import $ from 'jquery';
import './js-styling/jquery-ui.min.js';
import './js-styling/jquery-ui.css';
import './style.scss';

$(function() {

  // изменение цвета элементов навигационного меню
  $('.nav__item').click(function(){
    $('.nav__item').removeClass('nav__item_active');
    $('.nav__item').removeClass('nav__item_active-near');
    $(this).addClass('nav__item_active');
    $(this).prev().addClass('nav__item_active-near');
    $(this).next().addClass('nav__item_active-near');
  });
  
  
  // меняем стил выпадающих списков
  $('.dropdown').selectmenu({
    icons: { button: "select-arrow" }
  });
  
  
  //заполняем форму данными
//  $('.card-number__item').each(function(){
//    $(this).val('5555');
//  });
//  $('#cvv-field').val('123');
//  $('.card-user__field').val('Andrey Grachev');
  
  
  
  // валидация и отправка данных формы
  $('.send-btn').click( function () {
  
    $('form').submit(function(event){
      //останавливаем отправку данных формы
      event.preventDefault();
      
      // очистка нынешнего состояния
      $('.input-item').each( function() {
        if ( $(this).val() == "" && $(this).hasClass('valid')) {
          $(this).removeClass('valid').addClass('novalid');
        }
      });
      
      //проверка валидности данных формы
      $('.input-item').each( function() {
        if ( $(this).val() == "") {
          $(this).addClass('novalid');
        } else {
          $(this).removeClass('novalid').addClass('valid');
        };
      });
      // условие для списков jQueryUI
      $('.ui-selectmenu-button').each( function() {
        if ( $('.ui-selectmenu-text', this).html() == '&nbsp;') {
          $(this).addClass('novalid');
        } else {
          $(this).removeClass('novalid').addClass('valid');
        };
      });
      
      // условие отправки данных формы
      var len = 0;
      $('.input-item').each( function() {
        if ( $(this).hasClass('valid') == true ) {
          len++;
        };
      });
      $('.ui-selectmenu-button.ui-button').each( function() {
        if ( $(this).hasClass('valid') == true ) {
          len++;
        };
      });

      // условие отправки данных формы
      if (len == 8) {
        $('form').unbind('submit').submit();
        console.log("Data sended...");
      }
      
    });
    
  });
  
});