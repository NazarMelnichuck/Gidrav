$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-bottom__nav, .header__top, .header__bottom').toggleClass('active');
        $('body').toggleClass('lock');
    });
});