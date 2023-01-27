// открытие/закрытие меню 


var burger = document.querySelector('.menu-btn');
var dropMenu = document.querySelector('.header__menu_drop-menu');
var list = dropMenu.querySelector('.drop-menu__list');
var elementsList = list.querySelectorAll('li');
var burgerMenu = document.querySelector('#menuBurg');
var str = document.querySelector('.string');



burger.addEventListener('click', function(evt) {
    evt.preventDefault();
    dropMenu.classList.toggle('visibility');
    burgerMenu.classList.toggle('menu-burger-open');
    
});





function showMore() {
    let containerBrands = document.querySelector('.swiper');
    let btnTxt = document.querySelector('#myBtn');

    if (containerBrands.style.height != String('')) {
        containerBrands.style.height = "";
        btnTxt.innerHTML = "Скрыть";
        btnTxt.style.backgroundImage = "url(arrows/icon-rev.svg)";
    } else {
        containerBrands.style.height = "170px";
        btnTxt.innerHTML = "Показать все";
        btnTxt.style.backgroundImage = "url(arrows/icon.svg)";
    }
}







