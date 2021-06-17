/* Código SlideShow Automático com Efeito Fade */

var i = 0;
var images = [];
var time = 3000;

images[0] = 'imagem01.jpg';
images[1] = 'imagem02.jpg';
images[2] = 'imagem03.jpg';

function changeImage() {
  document.hasChildNodes.src = images[i];

  if (i < images.length - 1) {
    i++;
  }
  else {
    i = 0;
  }

  setTimeout("changeImage()", time);
}

window.onload = changeImage;