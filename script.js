//! Бургер меню
var btnBurger = document.querySelector('.burger');
var navMenu = document.querySelector('.nav-menu');

btnBurger.onclick = function() {
    if(navMenu.style.display == "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
        }
    };