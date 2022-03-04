$(document).ready(function () {
  $('.top-header__burger').click(function () {
    $('.top-header__burger, .top-header__nav').toggleClass('active');
    $('.header__body').toggleClass('active');
  });
});
