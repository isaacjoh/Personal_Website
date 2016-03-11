$(document).ready(function(){
    var windowHeight = $(window).height(); 
    $(window).scroll(function(){
        if ($(window).scrollTop() >= windowHeight && $(window).scrollTop() < (2 * windowHeight)){
            $('a').css('textDecoration', 'none');
            $('#anchor1').css('textDecoration', 'underline');
        }
        else if ($(window).scrollTop() >= (2 * windowHeight) && $(window).scrollTop() < (3 * windowHeight)){
            $('a').css('textDecoration', 'none');
            $('#anchor2').css('textDecoration', 'underline');
        }
        else if ($(window).scrollTop() >= (3 * windowHeight) && $(window).scrollTop() < (4 * windowHeight)){
            $('a').css('textDecoration', 'none');
            $('#anchor3').css('textDecoration', 'underline');
        }
        else if ($(window).scrollTop() >= (4 * windowHeight) && $(window).scrollTop() < (5 * windowHeight)){
            $('a').css('textDecoration', 'none');
            $('#anchor4').css('textDecoration', 'underline');
        }
        else if ($(window).scrollTop() >= (5 * windowHeight) && $(window).scrollTop() < (6 * windowHeight)){
            $('a').css('textDecoration', 'none');
            $('#anchor5').css('textDecoration', 'underline');
        }
        else if ($(window).scrollTop() >= (6 * windowHeight) && $(window).scrollTop() < (7 * windowHeight)){
            $('a').css('textDecoration', 'none');
            $('#anchor6').css('textDecoration', 'underline');
        }
        else {
            $('a').css('textDecoration', 'none');
        } 
    });
});

