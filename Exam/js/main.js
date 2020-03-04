$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
    });
    $('.menu__btn').on('click', function(){
		$('.header__menu-list').slideToggle();
	});
});