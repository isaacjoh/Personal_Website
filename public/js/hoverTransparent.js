$(document).ready(function(){
    $(".tint").mouseover(function() {
        $(this).animate({
            backgroundColor: "rgba(0,0,0,0)",
            color: "transparent"
        }, "fast");
    }).mouseout(function() {
        $(this).animate({
            backgroundColor: "rgba(10,10,10,0.7)",
            color: "white"
        }, "fast"); 
    });
}); 
