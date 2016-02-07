

/************ESC*************/

$(document).keyup(function (e) {
    if (e.keyCode == 27 && $('.RGBABG').css('display') != 'none') {
        $('.RGBABG .mid .panel').addClass('fadeOutUp').one('animationend', function () {
            $('.RGBABG .mid .panel').removeClass('fadeOutUp');
            $('.RGBABG').css({ display: 'none' });
            $('.RGBABG .mid .panel #why_output').css({ display: 'none' });
            $('.RGBABG .mid .panel #who_output').css({ display: 'none' });
        });
    }
    else if (e.keyCode == 27 && $('#web #lx_contact_left').css('display') != 'none' && $('#web #lx_contact_right').css('display') != 'none') {
        CloseContacts();
    }
    else if (e.keyCode == 27 && $('#web #lx_course_left').css('display') != 'none' && $('#web #lx_course_right').css('display') != 'none') {
        CloseCourses();
    }
    else if (e.keyCode == 27 && $('#web #lx_branch').css('display') != 'none') {
        CloseBranch();
    }
    else if (e.keyCode == 27 && $('#web #lx_about').css('display') != 'none') {
        CloseAbout();
    }
    else if (e.keyCode == 27 && $('#web #lx_apply').css('display') != 'none') {
        CloseApply();
    }
});

/************SIDE PANEL************/

$('#web .lx_side_panel .content .why_who p #why_b').click(function () {
    $('.RGBABG .mid .panel #why_output').css({ display: 'initial' });
    $('.RGBABG').css({ display: 'table' });
});

$('#web .lx_side_panel .content .why_who p #who_b').click(function () {
    $('.RGBABG .mid .panel #who_output').css({ display: 'initial' });
    $('.RGBABG').css({ display: 'table' });
});

$('.RGBABG .mid').click(function (e) {
    if (e.target === this) {
        $('.RGBABG .mid .panel').addClass('fadeOutUp').one('animationend', function () {
            $('.RGBABG .mid .panel').removeClass('fadeOutUp');
            $('.RGBABG').css({ display: 'none' });
            $('.RGBABG .mid .panel #why_output').css({ display: 'none' });
            $('.RGBABG .mid .panel #who_output').css({ display: 'none' });
        });
    }
});