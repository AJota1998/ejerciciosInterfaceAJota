// Cuando el usuario se desplaza hacia abajo 20 px desde la parte superior del documento, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}


function eliminar() {
  let video = document.getElementById("divVideo")
  video.className = "cerrar";
}