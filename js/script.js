function bigPicChanger(event) {
    event.preventDefault();

    if ($('.big-container img').attr('src') !== $(this).attr('href')) {
        $('.big-container img').hide().attr('src', $(this).attr('href')).fadeIn(500);
    }
}

function miniPicDecorator() {
    $('.small-container a img').fadeTo(0, 1).removeClass('bordered');
    $(this).fadeTo(500, 0.6).addClass('bordered');
};

function slider() {
    $('.gallery').slideToggle(500);
    if ($(this).text() === '-') {
        $(this).text('+');
    } else {
        $(this).text('-');
    }
}



$('.small-container a').click(bigPicChanger);
$('.small-container a img').click(miniPicDecorator);
$('.btn').click(slider);