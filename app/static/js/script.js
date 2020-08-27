'use strict';

// Вызов JS после загрузки HTML
$(document).ready(function() {  // полная загрузка страницы

    // POPUP
    $('.basket').click( function() {
        $('.wrapper_popup__basket').toggle();
        $('.arrow__basket__2').toggle();
        $('.arrow__basket__1').toggle();
    })

    $('.close__popup').click( function() {
        $('.wrapper_popup__basket').toggle();
    })

    //POPUP arrow_basket 1 TO 2
    $('.close__popup').click( function() {
        $('.arrow__basket__2').toggle();
        $('.arrow__basket__1').toggle();
    })

    // MODAL WINDOW
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    })

    // ---- карусель на JS | 2 section ----
    
  let slideMax = $('#slider__wrapper').children().length - 2; // т.к. слайда 3 берем значение (-2)
  let slideNow = 1;
  let changePostionPX = 0; // записываем число пикселей для сдвига
  let slideInterval = 2000000; // длительность анимации
  let slideMove = setInterval(nextSlide, slideInterval); // вызываем анимацию слайда
  let navBtnId = 0; // индекс кнопок под слайдером

  $('#next__btn').click( function() {
    // сдаиг к следующему слайду.
    nextSlide();
  });

  $('#prev__btn').click( function() {
    // сдаиг к предидущему слайду.
    prevSlide();
  });

  $('.native__js__slider').hover( function() {
    // останавливаем слайдер при наведении мышкой
    clearInterval(slideMove);
  }, function() {
    // запускаем, если убрали мышку
    slideMove = setInterval(nextSlide, slideInterval);
  });

  $('.slide__nav__btn').click( function() {
    // переходит на слайд, который равен позиции книпки под слайдером (сопоставление идет по индексу)
    navBtnId = $(this).index();

    if ( navBtnId + 1 != slideNow){
      changePostionPX = -($('#viewport__for__slider').width() / 3) * (navBtnId);
      $('#slider__wrapper').css('transform', `translateX(${changePostionPX}px)`);
      slideNow = navBtnId + 1;

    } else {
      $('#slider__wrapper').css('transform', `translateX(0px)`);
    }
    
    changeColorNavBtns() 
  });

  $(`.slide__nav__btn:nth-of-type(1)`).css('background-color', '#F55'); // цвет первой кнопки в нижнем навбаре по слайдам при загрузке страницы будет изменен

  function nextSlide() {
    // переключение слайда на 1 в правую сторону
    if ( slideNow < 1 || slideNow >= slideMax) {
      $('#slider__wrapper').css('transform', `translateX(0)`);
      slideNow = 1;

    } else {
      changePostionPX = -($('#viewport__for__slider').width() / 3) * slideNow;
      $('#slider__wrapper').css('transform', `translateX(${changePostionPX}px)`);
      slideNow++;
    }
    changeColorNavBtns()
  }

  function prevSlide() {
    // переключение слайда на 1 в левую сторону
    if ( slideNow <= 1 || slideNow > slideMax) {
      changePostionPX = -($('#viewport__for__slider').width() / 3) * (slideMax - 1);
      $('#slider__wrapper').css('transform', `translateX(${changePostionPX}px)`);
      slideNow = slideMax;

    } else {
      changePostionPX = -($('#viewport__for__slider').width() / 3) * (slideNow - 2);
      $('#slider__wrapper').css('transform', `translateX(${changePostionPX}px)`);
      slideNow -= 1;
    }
    changeColorNavBtns()
  }

  function changeColorNavBtns() { 
    // меняет цвет кнопки, которая соответствует индексу текущего слайда. Остальные красит в белый.
    $(`.slide__nav__btn`).css('background-color', '#FCC');
    $(`.slide__nav__btn:nth-of-type(${slideNow})`).css('background-color', '#F55');
  }

    

   












    // $('.nav-block').toggle();

    // $('.appointment-bg').click( function () {
    //     $('.appointment-bg').toggle();
    //     // $('.nav-block').toggle();
    // })
    // $('.window-appointment').click( function (event) {
    //     event.stopPropagation()     //отмена расспространения при нажатии на дочерний класс
    // })

})





// $ =
// 1. document.getElementsByClassName
// 2. document.getElementsByID





















