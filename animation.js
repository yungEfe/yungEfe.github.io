var animation;

function MegaTf() {
  animation = anime({
   loop: true,
   targets: 'img#luffyp',
   easing: 'linear',
   duration: window.innerWidth * 5,
   translateX: [0,window.innerWidth * 1.5]
 });
}

window.onload = function() {
  MegaTf();
};
