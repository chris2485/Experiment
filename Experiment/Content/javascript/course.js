function ChangeTao(num) {
    $('#web #lx_course_left .right .container .mid img').css({ display: 'none' });
    $('#img_' + num).css({ display: 'block' });
    $('#web #lx_course_right .container .info').css({ display: 'none' });
    $('#tao_' + num).css({ display: 'block' });
}

/*******************************/

$('span.course_b').click(function () {
    $('#web #lx_course_left').css({ display: 'initial' }).after(function () {
        $('#web #lx_course_left').addClass('slideInDown').one('animationend', function () {
            $('#web #lx_course_left').removeClass('slideInDown');
        });
    });

    $('#web #lx_course_right').css({ display: 'initial' }).after(function () {
        $('#web #lx_course_right').addClass('slideInUp').one('animationend', function () {
            $('#web #lx_course_right').removeClass('slideInUp');
        });
    });

    ChangeTao(1);
});

function CloseCourses() {
    $('#web #lx_course_left').addClass('slideOutUp').one('animationend', function () {
        $('#web #lx_course_left').removeClass('slideOutUp');
        $('#web #lx_course_left').css({ display: 'none' });
    });

    $('#web #lx_course_right').addClass('slideOutDown').one('animationend', function () {
        $('#web #lx_course_right').removeClass('slideOutDown');
        $('#web #lx_course_right').css({ display: 'none' });
    });
}

$('#back_course').click(function () {
    CloseCourses();
});