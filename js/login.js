$('.logWay').click(function () {
    var acco = $('#account');
    var qr = $('#qrCode');
    if ($(this).html() === '帐号登录') {
        $('*').removeClass('selected');
        $(this).addClass('selected');
        if (acco.css('display') === 'none') {
            acco.css('display', 'flex');
            qr.css('display', 'none')
        }
    } else {
        $('*').removeClass('selected');
        $(this).addClass('selected');
        if (qr.css('display') === 'none') {
            qr.css('display', 'flex');
            acco.css('display', 'none')
        }
    }
});

var main = $('.html');
var loginModule = $('.loginModule');

main.click(function () {
    window.location.assign('https://item.mi.com/product/10000070.html');
});

main.mouseover(function () {
    $(this).css('cursor', 'pointer');
});

loginModule.click(function (e) {
    e.stopPropagation();
});

loginModule.mouseover(function () {
    $(this).css('cursor', 'default');
});
