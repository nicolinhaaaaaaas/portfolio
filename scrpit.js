var hamburguer = document.querySelector(".hamb");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburguer.addEventListener("click", function(){
    this.classList.toggle("click");
    navList.classList.toggle("open");
});