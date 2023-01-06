// Obtener todos los enlaces de publicación
var postLinks = document.querySelectorAll('.post-link');
// Añadir un evento click a cada enlace
postLinks.forEach(function(postLink) {
  postLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Obtener el ID de la página de publicación
    var postId = this.getAttribute('href');
    // Mostrar la página de publicación
    document.querySelector(postId).style.display = 'block';
  });
});
// Obtener todos los botones de cierre
var closeButtons = document.querySelectorAll('.close-button');
// Añadir un evento click a cada botón
closeButtons.forEach(function(closeButton) {
  closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Obtener la página de publicación padre del botón
    var post = this.parentNode;
    // Cerrar la página de publicación
    post.style.display = 'none';
  });
});