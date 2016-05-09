$(function(){
    var header = $('header');
    var secondBlock = $('div');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0 && $(this).scrollTop() <= secondBlock.offset().top) {
            header.addClass('stickyHeader');
            secondBlock.removeClass('stickyBlock');
        }

        if ($(this).scrollTop() > secondBlock.offset().top) {
            header.removeClass('stickyHeader');
            secondBlock.addClass('stickyBlock');
        }

        if ($(this).scrollTop() == 0) {
            header.removeClass('stickyHeader');
            secondBlock.removeClass('stickyBlock');
        }
    });
});

//$(window).scroll(function() {
//    if ($(this).scrollTop() > 0 && $(this).scrollTop() <= secondBlock.offset().top) {
//        header.addClass('stickyHeader');
//        secondBlock.removeClass('stickyBlock');
//    } else if ($(this).scrollTop() > secondBlock.offset().top) {
//        header.removeClass('stickyHeader');
//        secondBlock.addClass('stickyBlock');
//    } else {
//        header.removeClass('stickyHeader');
//        secondBlock.removeClass('stickyBlock');
//    }
//});