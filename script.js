// ===== À COMPLÉTER =====
// Numéro WhatsApp au format international, sans "+" ni espaces (ex. : 243XXXXXXXXX).
// Tant qu'il est vide, les boutons WhatsApp mènent à la section Contact.
var WHATSAPP_NUMERO = "243978699514";
// =======================

(function () {
  // Liens WhatsApp
  if (WHATSAPP_NUMERO) {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      a.href = 'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent(a.getAttribute('data-wa'));
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  // Menu mobile
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function closeNav() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Fermer' : 'Menu';
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });

  // Apparition au défilement
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
