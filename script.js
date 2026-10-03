(function () {
  var root = document.documentElement;

  // alternância de tema (claro/escuro), lembrando a escolha
  document.getElementById('theme').addEventListener('click', function () {
    var current = root.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // filtro dos projetos
  var chips = document.querySelectorAll('.chip');
  var projects = document.querySelectorAll('.project');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('on', on);
        c.setAttribute('aria-pressed', on);
      });
      projects.forEach(function (p) {
        p.hidden = filter !== 'all' && p.dataset.cat !== filter;
      });
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
