/* Gallery lightbox — uses native <dialog> element, no dependencies */
(function () {
  'use strict';

  function buildLightbox() {
    var existing = document.getElementById('gallery-lightbox');
    if (existing) return existing;

    var dlg = document.createElement('dialog');
    dlg.id = 'gallery-lightbox';
    dlg.innerHTML =
      '<div class="lb-wrap">' +
        '<button type="button" class="lb-close" aria-label="Fechar">\u00D7</button>' +
        '<img class="lb-img" src="" alt="">' +
      '</div>';
    document.body.appendChild(dlg);

    /* close on backdrop click */
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) dlg.close();
    });

    dlg.querySelector('.lb-close').addEventListener('click', function () {
      dlg.close();
    });

    return dlg;
  }

  function bindGallery(dlg) {
    document.querySelectorAll('.gallery-item[data-src]').forEach(function (btn) {
      if (btn.dataset.lbBound) return;
      btn.dataset.lbBound = '1';
      btn.addEventListener('click', function () {
        var img = dlg.querySelector('.lb-img');
        img.src = btn.dataset.src;
        img.alt = btn.dataset.alt || '';
        dlg.showModal();
      });
    });
  }

  function init() {
    var dlg = buildLightbox();
    bindGallery(dlg);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
