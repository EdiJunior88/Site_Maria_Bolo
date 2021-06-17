/* Código SlideShow Automático com Efeito Fade */

$(function(){
  $('.container_slideshow img:gt(0)').hide();
  setInterval(function(){
    $('.container_slideshow :first-child').fadeOut()
       .next('img').fadeIn()
       .end().appendTo('.container_slideshow');}, 
    3000);
});