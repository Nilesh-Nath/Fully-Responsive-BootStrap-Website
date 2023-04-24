const playEl=document.querySelector(".play");
const trailerEl=document.querySelector(".trailer-container");
const bodyEl=document.getElementsByTagName("body")[0];
const closeEl=document.querySelector(".closee");

playEl.addEventListener("click",()=>{
    trailerEl.style.display="block";
    bodyEl.style.overflowY="hidden";
    playEl.style.display="none";
});

closeEl.addEventListener("click",()=>{
    trailerEl.style.display="none";
    bodyEl.style.overflowY="auto";
    playEl.style.display="block";
});