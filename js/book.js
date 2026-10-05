const root = document.querySelector('[data-pdf-book]');
if (root) {
  const book = root.querySelector('.book');
  const slots = [...root.querySelectorAll('.book-page')];
  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  const status = root.querySelector('.book-status');
  const error = root.querySelector('.book-error');
  const narrow = matchMedia('(max-width: 700px)');
  const previewCount = Number(root.dataset.pageCount || 0);
  const imageBase = root.dataset.pageImages;
  let pdf, position = narrow.matches ? 1 : 0, busy = false, rerender = false;
  const pdfURL = new URL(root.dataset.pdf, document.baseURI);
  function controls() {
    const first = narrow.matches ? 1 : 0;
    const last = narrow.matches ? pdf.numPages : Math.floor(pdf.numPages / 2) * 2;
    prev.disabled = busy || position <= first;
    next.disabled = busy || position >= last;
    book.setAttribute('aria-busy', String(busy));
  }
  async function render() {
    if (!pdf) return;
    if (busy) { rerender = true; return; }
    busy = true; controls();
    const single = narrow.matches;
    const pages = single ? [position] : [position, position + 1];
    book.classList.toggle('single-page', single);
    try {
      for (let i = 0; i < slots.length; i++) {
        const slot = slots[i], number = pages[i];
        slot.hidden = single && i === 1;
        slot.replaceChildren();
        slot.classList.toggle('blank', !number || number > pdf.numPages);
        if (slot.hidden || !number || number > pdf.numPages) {
          slot.setAttribute('aria-label', 'Blank book page'); continue;
        }
        if (previewCount && imageBase) {
          const img = document.createElement('img');
          img.alt = `The Developer’s Journey — report page ${number}. Open the original PDF for full-size reading.`;
          img.src = new URL(`${imageBase}${String(number).padStart(2, '0')}.jpg`, document.baseURI).href;
          img.decoding = 'async';
          await img.decode();
          slot.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
          slot.setAttribute('aria-label', `Report page ${number}`);
          slot.append(img);
          continue;
        }
        const page = await pdf.getPage(number);
        const base = page.getViewport({ scale: 1 });
        const width = Math.max(slot.clientWidth, 200);
        const density = Math.min(devicePixelRatio || 1, 2);
        const viewport = page.getViewport({ scale: width / base.width * density });
        slot.style.aspectRatio = `${base.width} / ${base.height}`;
        slot.setAttribute('aria-label', `Report page ${number}`);
        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.setAttribute('role', 'img');
        canvas.setAttribute('aria-label', `Internship journal, page ${number}. Open the original PDF for selectable text.`);
        slot.append(canvas);
        await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
        page.cleanup();
      }
      const visible = pages.filter(n => n >= 1 && n <= pdf.numPages);
      status.textContent = `Page${visible.length > 1 ? 's' : ''} ${visible.join('–')} of ${pdf.numPages}`;
      book.classList.remove('turning');
      void book.offsetWidth;
      book.classList.add('turning');
      error.hidden = true;
    } catch (e) {
      error.textContent = 'This spread could not be displayed. You can still open the original PDF below.';
      error.hidden = false;
    } finally {
      busy = false; controls();
      if (rerender) { rerender = false; render(); }
    }
  }
  function turn(direction) {
    if (!pdf || busy) return;
    const step = narrow.matches ? 1 : 2;
    const first = narrow.matches ? 1 : 0;
    const last = narrow.matches ? pdf.numPages : Math.floor(pdf.numPages / 2) * 2;
    const target = Math.max(first, Math.min(last, position + direction * step));
    if (target !== position) { position = target; render(); }
  }
  prev.addEventListener('click', () => turn(-1));
  next.addEventListener('click', () => turn(1));
  book.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault(); turn(e.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  let resizeTimer;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!pdf) return;
      position = narrow.matches ? Math.max(1, position) : Math.floor(position / 2) * 2;
      render();
    }, 180);
  });
  async function load() {
    if (previewCount && imageBase) {
      pdf = { numPages: previewCount };
      root.querySelector('.book-links').hidden = false;
      await render();
      return;
    }
    if (location.protocol === 'file:') return;
    try {
      const response = await fetch(pdfURL);
      if (response.status === 404) return; // Keep the honest coming-soon spread.
      if (!response.ok) throw new Error('Report unavailable');
      const data = new Uint8Array(await response.arrayBuffer());
      // A server returning index.html for a missing file should not create a broken book.
      if (new TextDecoder().decode(data.slice(0, 5)) !== '%PDF-') return;
      status.textContent = 'Opening the journal…';
      const pdfjs = await import('../vendor/pdfjs/pdf.min.mjs');
      pdfjs.GlobalWorkerOptions.workerSrc = new URL('../vendor/pdfjs/pdf.worker.min.mjs', import.meta.url).href;
      pdf = await pdfjs.getDocument({ data,
        cMapUrl: new URL('../vendor/pdfjs/cmaps/', import.meta.url).href,
        cMapPacked: true,
        standardFontDataUrl: new URL('../vendor/pdfjs/standard_fonts/', import.meta.url).href,
        isEvalSupported: false
      }).promise;
      root.querySelector('.book-links').hidden = false;
      await render();
    } catch (e) {
      status.textContent = 'Preview unavailable';
      error.textContent = 'The journal preview could not be opened. Please try again later.';
      error.hidden = false;
    }
  }
  load();
}
