bower install https://code.jquery.com/jquery-3.3.1.min.js

$(document).ready(function(){
    $(".promo .btn").click(function(){
        $(".btn").slideToggle("slow");
        $(this).toggleClass("active");
    });
});