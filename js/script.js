"use strict"



//Получение классов в переменные
const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
const headBody = document.getElementsByTagName('body')[0];

//Присваивание класса active когда нажимаю на headerBurger
headerBurger.addEventListener('click', function(e) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  headBody.classList.toggle('lock');
});

document.addEventListener('keyup', function(e){
  if(e.code === 'Escape'){
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active');
      headBody.classList.remove('lock');
  }
});











//Валидация формы
const formUs = document.querySelector('.form');
const formInputs = document.querySelectorAll('.sub__input');
const inputEmail = document.querySelector('.js-input-email');



function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}


formUs.onsubmit = function(){

  let emailVal = inputEmail.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function(input) {
    if(input.value === ''){
      input.classList.add('error');
    } else{
      input.classList.remove('error');
    }
  })      

  if(emptyInputs.length !== 0){
     return false
  }

  if(!validateEmail(emailVal)){
    inputEmail.classList.add('error')
    return false

  } else{
    inputEmail.classList.remove('error')
  }

  
}


//Функции свайпера

  new Swiper(".mySwiper", {
    
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, 
      },
      // mousewheel: true,
      // keyboard: true,
    

  // Сколлбар 
  //   scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },

//Управление слайдером клавиатурой
  keyboard:{
    //Включить \  Выключить
    enabled:true,

    //Включить \  Выключить
    //Только когда слайдер в пределахь вьюпорта
    onlyInViewport:true,

    //Включить \  Выключить
    //Управление клавишами pageUp, pageDown
    pageUpDown:true,

  },

  
// //Управление слайдером мышью
//  mousewheel:{
//    sensitiviti:1,
//  },

//Автовысота
  // autoHeight: true,


//Количество слайдов для показа
  // slidesPerView: 3,

//Отключение функционала если слайдов меньше чем нужно
  // watchOverflow:true,

//стартовый слайд 0 - это первый, 1 - это второй, итд
  // initialSlide: 1,


//Бесконечный слайдер
  // loop:true,

//Кол-во дублирующих слайдов
  // loopedSlides:3,  


//Свободный режим
  // freeMode:true,


//Скорость
// speed:300,



//Вертикальный слайдер  
// direction:'horizontal',


//смена прозрачности
// effect:'fade',

// //дополнение к fade
// fadeEffect:{
//  //Параллельная смена прозрачности
//  crossFade:true
// },




//Брейк поинты (адаптив)
//Ширина экрана

breakpoints:{
  320:{
    slidesPerView: 1,
  },
  1100:{
    slidesPerView: 2,
  },
  1110:{
    slidesPerView: 6,
  },
},




});











