function initBurger() {
  $('.top-header__burger').click(function () {
    $('.top-header__burger, .top-header__nav').toggleClass('active');
    $('.body-header').toggleClass('active');
    $('body').toggleClass('lock');
  });
}

function initSlider() {
  let swiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

$(document).ready(function () {
  initBurger();
  initSlider();
});
