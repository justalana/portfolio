document.querySelectorAll('.nav-links a').forEach(link => { if (link.getAttribute('href') === (location.pathname.split('/').pop() || 'index.html')) link.setAttribute('aria-current', 'page'); });
