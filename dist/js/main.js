'use strict';

document.querySelectorAll('[data-goto]').forEach(function ($navlink) {
    var $content = document.querySelector('.content');
    $navlink.addEventListener('click', function () {
        $content.setAttribute('data-show', this.getAttribute('data-goto'));
    });
});

$(".menu-icon").click(function () {
    // console.log('helloooo');
    $(".menu-icon").toggleClass("active");
});

$(".menu-icon").click(function () {
    // console.log('helloooo');
    $(".sidebar").toggleClass("active");
});

$(".menu li a").click(function () {
    $(".menu-icon").toggleClass("active");
    $(".sidebar").toggleClass("active");
});

$(".logo").click(function () {
    $(".menu-icon").toggleClass("active");
    $(".sidebar").toggleClass("active");
});
//# sourceMappingURL=main.js.map
