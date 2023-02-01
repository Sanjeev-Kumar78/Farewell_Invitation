// using javascript to activate menu item onscroll

const li = document.querySelectorAll(".links");

const sec = document.querySelectorAll("section");



function activeMenu(){

let len=sec.length;

while(--len && window.scrollY + 97 < sec[len].offsetTop){}

li.forEach(ltx => ltx.classList.remove("active"));

li[len].classList.add("active");

}

activeMenu();

window.addEventListener("scroll", activeMenu);