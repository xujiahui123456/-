$('#botRight a').mouseenter(function () {
    $('#botRight a img').attr('src', "./images/custom-service-white.png");
    $('#botRight a span').css('color', 'white');
});

$('#botRight a').mouseleave(function () {
    $('#botRight a img').attr('src', "./images/custom-service.png");
    $('#botRight a span').css('color', '#F25807');
});
