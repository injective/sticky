$(function(){
    var header = $('header');
    var main = $('main');

    $(window).scroll(function() {

        if($(this).scrollTop() > 1) {
            header.addClass('stickyHeader');
            main.addClass('stickyMain');
        } else {
            header.removeClass('stickyHeader');
            main.removeClass('stickyMain');
        }

    });
});

