//! Бургер меню
// var burgerLine = document.getElementsByClassName('burger-line');
// var btnBurger = document.querySelector('.burger');
// var mainMenu = document.querySelector('.main-menu');
// var lineBurger1 = document.querySelector('.burger-line:nth-child(1)');
// var lineBurger2 = document.querySelector('.burger-line:nth-child(2)');
// var lineBurger3 = document.querySelector('.burger-line:nth-child(3)');
// var lineBurger4 = document.querySelector('.burger-line:nth-child(4)');

// btnBurger.onclick = function() {
//     // console.log(mainMenu.style.right);
//     if(mainMenu.style.right != 0 + "vw") {
//         mainMenu.style.right = 0 + "vw";
//         lineBurger2.classList.add('opacity');
//         lineBurger3.classList.add('opacity');
//         lineBurger1.classList.add('lineBurger1');
//         lineBurger4.classList.add('lineBurger4');
//         // burgerLine.style.boxShadow = "0px 0px 1px 1px white";
//         for(let elem of burgerLine) {
//             elem.style.boxShadow = "0px 0px 1px 1px white";
//         }
//     } else {
//         mainMenu.style.right = -60 + "vw";
//         lineBurger2.classList.remove('opacity');
//         lineBurger3.classList.remove('opacity');
//         lineBurger1.classList.remove('lineBurger1');
//         lineBurger4.classList.remove('lineBurger4');
//         for(let elem of burgerLine) {
//             elem.style.boxShadow = 'none';
//         }
//     }
// };