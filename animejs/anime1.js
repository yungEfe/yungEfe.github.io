
//alert("Spirekeeper is'nt out yet, so stay calm u cheesy lil weirdo")
/*
var eat = document.getElementByClass('eat');
var click = document.getElementByClass('click');
var kill = document.getElementByClass('kill');
var feed = document.getElementByClass('feed');
var heal = document.getElementByClass('heal');
var defend = document.getElementByClass('defend');
var remove = document.getElementByClass('remove');
var add = document.getElementByClass('add');
*/
var animation;

function MegaTf() {
  animation = anime({
   loop: true,
   targets: 'img#wolf',
   easing: 'linear',
   duration: window.innerWidth * 6,
   translateX: [0,window.innerWidth * 1.5]
 });
}

window.addEventListener('load', MegaTf);


window.addEventListener('resize', function(event){
  animation.pause();
  animation = anime({
   loop: true,
   targets: 'img#wolf',
   easing: 'linear',
   duration: window.innerWidth * 6,
   translateX: [0,window.innerWidth * 1.5]
 });
  animation.play();
});

/*
translateX frame.width
duration screen width * 4
translateX -150
easing: steps
*/

function eat() { alert("TEST"); }
