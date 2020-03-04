
$(function(){
    $('.services__row').on('click',function(){
        $(this).parents(".services__item").find(".services__content").slideDown('slow');
        $(this).parents(".services__item").siblings().find(".services__content").slideUp('slow');
    });
    $('.customer-slider').slick({
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__up" src="img/slider-arrow_up.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__down" src="img/slider-arrow_down.png" alt="">',
        responsive:[{
            breakpoint: 725,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },]
    });
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive:[{
            breakpoint: 725,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },]
    });
    $('.menu__btn').on('click', function(){
        $('.header__top .menu').toggle(800);
    });
    let mevideo = videojs('my-video')
    mevideo.background('../img/video-bg.png');
});
