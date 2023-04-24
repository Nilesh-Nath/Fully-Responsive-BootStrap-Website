const open = document.querySelector('.openMenu');
const hamel = document.querySelector('.hammenu');
const close = document.querySelector('.closeMenu');
const blackel=document.querySelector('.black-cover');
const headel = document.querySelector('.top-header');
const animatedtextel = document.querySelector('.animated_text');
var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');

open.addEventListener('click',()=>{
    hamel.style.right = '0%';
    blackel.style.left = '0%';
});

close.addEventListener('click',()=>{
    hamel.style.right = '-100%';
    blackel.style.left = '-100%';
})

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY> 0) {
          document.getElementById('navbar_top').classList.add('fixed-top'); 
          headel.style.background = '#111111';
          headel.style.transition = 'all 0.5s ease';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
          headel.style.background = 'transparent';
          headel.style.transition = 'all 0.5s ease';
        } 
    });
  }); 

  document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";
  });