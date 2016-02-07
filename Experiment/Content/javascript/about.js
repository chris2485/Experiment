$('span.about_b').click(function () {
    $('#web #lx_about').css({ display: 'initial' }).after(function () {
        $('#web #lx_about').addClass('aboutInUp').one('animationend', function () {
            $('#web #lx_about').removeClass('aboutInUp');
        });
    });
});

$('#web #lx_about').scroll(function () {
    var currScrollPos = $('#web #lx_about').scrollTop();
    $('#web #lx_about .folder').css({ 'background-position': '0 ' + -(currScrollPos / 4) + 'px' });
});

$('#web #back_about').click(function(){
    CloseAbout();
});

function CloseAbout() {
    $('#web #lx_about').addClass('aboutOutDown').one('animationend', function () {
        $('#web #lx_about').removeClass('aboutOutDown');
        $('#web #lx_about').css({ display: 'none' });
    });
}