$(".burger").click(function(){
    $(".nav").toggleClass("open");
    $(this).toggleClass("open");
    $(".overlay").toggleClass("open");
});