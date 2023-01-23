// открытие/закрытие меню 


var burger = document.querySelector('.menu-btn');
var dropMenu = document.querySelector('.header__menu_drop-menu');
var list = dropMenu.querySelector('.drop-menu__list');
var elementsList = list.querySelectorAll('li');
var burgerMenu = document.querySelector('#menuBurg');
var str = document.querySelector('.string');

burger.addEventListener('click', function(evt) {
    evt.preventDefault();
    dropMenu.classList.toggle('visibility')
    burgerMenu.classList.toggle('menu-burger-open');
    
});



// добавляем




