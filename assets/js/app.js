window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__menu-active');
        });
    });
});


// Scroll to section

// let header = $('#header');
// let headerH = header.innerHeight();
// let scrollTop = $(window).scrollTop();

// let navToggle = $('#navToggle');   
// let headerMenu = $('#header__menu');

// $('[data-scroll]').on('click', function(event) {
//     event.preventDefault();

//     let scrollEl = $(this).data('scroll');
//     let scrollElPos = $(scrollEl).offset().top;

//     navToggle.removeClass('active');
//     nav.removeClass('active');
//     $('body').removeClass('lock');

//     $('html, body').animate({
//         scrollTop: scrollElPos - headerH
//     }, 500);
// });