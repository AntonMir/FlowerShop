'use strict';

$(document).ready( function() {

  let btnPosition = 0;

  $('#toggle__wrapper').click( function() { 
    
    if (btnPosition == 0) {
      $('#toggle').css('transform', `translateX(23px)`);
      $('#toggle__wrapper').css('background-color', `#2A2`);
      $('#main__block').css('box-shadow', `#2A2 0 0 20px`);
      $('#toggle__wrapper').css('box-shadow', `#2A2 0 0 10px`); 
      btnPosition = 1;
      
    } else {
      $('#toggle').css('transform', `translateX(0px)`);
      $('#toggle__wrapper').css('background-color', `#f22`);
      $('#main__block').css('box-shadow', `#f22 0 0 20px`);
      $('#toggle__wrapper').css('box-shadow', `#f22 0 0 10px`);
      btnPosition = 0
    }
  });
    
})
