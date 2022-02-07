/*
1. найти элемент, на который кликаем
2. найти элемент меню
3. написать клик на кнопку и добавить класс
*/
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', function(){
  menu.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
});
