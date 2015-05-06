//= require vanilla-masker.min
//= require smoothscroll.min

VMasker(document.querySelector("#mask-phone")).maskPattern("(99) 9999-99999");

window.addEventListener('DOMContentLoaded', function() {
  var btnScroll = document.querySelector('.js-contact-btn');

  btnScroll.addEventListener('click', function () {
    var destine = document.querySelector('.js-contact');
    window.smoothScroll(destine, 2000)
  });
});
