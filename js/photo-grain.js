/* Keep the page texture, with transparent openings over the photo pixels.
   Mask the overlay itself; do not change photo/label stacking order. */
(() => {
  const grain = document.querySelector('.paper-grain');
  const photos = [...document.querySelectorAll('.portrait, .about-photo')];
  if (!grain || !photos.length) return;
  let scheduled = false;
  function update() {
    scheduled = false;
    const width = document.documentElement.clientWidth;
    const height = window.innerHeight;
    let path = `M0 0H${width}V${height}H0Z`;
    for (const photo of photos) {
      const rect = photo.getBoundingClientRect();
      if (!rect.width || !rect.height || rect.bottom < 0 || rect.top > height) continue;
      const style = getComputedStyle(photo);
      const matrix = new DOMMatrix(style.transform === 'none' ? undefined : style.transform);
      const w = photo.offsetWidth, h = photo.offsetHeight;
      const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
      // Leave the paper frame textured. Only the image content is excluded.
      const left = -w / 2 + parseFloat(style.borderLeftWidth) + parseFloat(style.paddingLeft);
      const right = w / 2 - parseFloat(style.borderRightWidth) - parseFloat(style.paddingRight);
      const top = -h / 2 + parseFloat(style.borderTopWidth) + parseFloat(style.paddingTop);
      const bottom = h / 2 - parseFloat(style.borderBottomWidth) - parseFloat(style.paddingBottom);
      const points = [[left, top], [right, top], [right, bottom], [left, bottom]].map(([x, y]) =>
        `${(cx + matrix.a * x + matrix.c * y).toFixed(2)} ${(cy + matrix.b * x + matrix.d * y).toFixed(2)}`);
      path += `M${points.join('L')}Z`;
    }
    // A photo scrolling underneath the sticky header must not cut its texture.
    const header = document.querySelector('.site-header');
    const headerBottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><path fill="white" fill-rule="evenodd" d="${path}"/><rect width="${width}" height="${headerBottom}" fill="white"/></svg>`;
    const mask = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
    grain.style.maskImage = mask;
    grain.style.webkitMaskImage = mask;
  }
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  photos.forEach(photo => photo.addEventListener('load', schedule));
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(schedule);
    photos.forEach(photo => observer.observe(photo));
    observer.observe(document.body);
  }
  if (document.fonts) document.fonts.ready.then(schedule);
  schedule();
})();
