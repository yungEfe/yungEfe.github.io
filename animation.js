var animation;
var animationn;
var animationnn;
var animationnnn;
var animationnnnn;
var animationnnnnn;

function MegaTf() {
  animation = anime({
   loop: true,
   targets: 'img#luffyp',
   easing: 'linear',
   duration: window.innerWidth * 5,
   translateX: [0,window.innerWidth * 1.5]
 });
}
function MonTf() {
  animationn = anime({
   loop: true,
   targets: '.mon',
   easing: 'easeInOutExpo',
   scale: 1.2,
   endDelay: 5000

 });
}
function TueTf() {
  animationnn = anime({
   loop: true,
   targets: '.tue',
   easing: 'easeInOutExpo',
   scale: 1.2,
   delay: 1000,
   endDelay: 4000
 });
}
function WedTf() {
  animationnnn = anime({
   loop: true,
   targets: '.wed',
   easing: 'easeInOutExpo',
   scale: 1.2,
  delay: 2000,
   endDelay: 3000
 });
}
function ThuTf() {
  animationnnnn = anime({
   loop: true,
   targets: '.thu',
   easing: 'easeInOutExpo',
   scale: 1.2,
     delay: 3000,
   endDelay: 2000
 });
}
function FriTf() {
  animationnnnnn = anime({
   loop: true,
   targets: '.fri',
   easing: 'easeInOutExpo',
   scale: 1.2,
        delay: 4000,
   endDelay: 1000
 });
}
window.onload = function() {
  MegaTf();
  MonTf();
  TueTf();
  WedTf();
  ThuTf();
  FriTf();
};
