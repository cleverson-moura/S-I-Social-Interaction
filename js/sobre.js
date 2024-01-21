const perfil = document.querySelectorAll('.perfil');
const content = document.querySelectorAll('.content');

perfil.forEach(function(perf, index) {
  perf.addEventListener('click', function() {
    // Adicionar 'oculto' a todos os elementos, exceto o clicado
    content.forEach(function (cont, i) {
      if (index !== i) {
        cont.classList.add('oculto');
      }
    });

    // Alternar 'oculto' no elemento clicado
    content[index].classList.toggle('oculto');
  });
});
