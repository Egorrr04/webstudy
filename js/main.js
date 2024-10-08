$(function () {

    var mixer = mixitup('.directions__list');
    $('.directions__filter-btn').on('click', function () {

        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        appendArrows: $('.team__slider-arrows'),
        responsive:
            [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                },
            }]
    })


    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')

    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')

    })


    $('.testimonials__slider').slick({
        arrows: false,
        infinite: true,
        draggable: false,
        appendArrows: $('.testimonials__slider'),
        dots: true,
        appendDots: ('.testimonials__dots'),


        
    })



    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')

    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')

    })


    //     $('.program__acc-link').on('click', function (e){
    //         e.preventDefault()
    //         $(this).toggleClass('program__acc-link--active')
    //         $(this).children('.program__acc-text').slideToggle()


    // })


    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()

        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()



        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')

            $(this).children('.program__acc-text').slideDown()
        }



    })
    $(".header__nav-list ,.footer__top-list, .header__content-buttons,.header__btn-box").on("click", "a", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 500);
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')

        } else {
            $('.burger').removeClass('burger--follow')

        }
    }, 0);




    $('.burger, .overlay,.header__nav-link, .header__top-btn').on('click', function (e) {

        e.preventDefault()


        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')


    })

})