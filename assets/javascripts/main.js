//= require vanilla-masker.min
//= require smoothscroll.min

VMasker(document.querySelector("#mask-phone")).maskPattern("(99) 99999-9999");

document.addEventListener('DOMContentLoaded', function() {
  var btnScroll = document.querySelector('.js-contact-btn');

  btnScroll.addEventListener('click', function () {
    var destine = document.querySelector('.js-contact');
    window.smoothScroll(destine, 2000)
  });

  setTimeout( function(){ var flash = document.querySelector('.flash'); if(flash){flash.style.display = 'none';}}, 6000);

});

