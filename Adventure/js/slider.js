$(document).ready(function(){

 $('.slider__item:gt(0)').hide();


 $('.next').click(function(){
  var current = $('.slider__item:visible');
  var next = current.next().length ? current.next() : $('.slider__item:eq(0)');
  current.fadeOut(600);
  next.fadeIn(600);

 });



 $('.prev').click(function(){
  var current = $('.slider__item:visible');
  var prev = current.prev().length ? current.prev() : $('.slider__item:eq(3)');
  current.fadeOut(600);
  prev.fadeIn(600);


 });

 });

