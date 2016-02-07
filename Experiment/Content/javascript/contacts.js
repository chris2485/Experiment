$('span.contact_b').click(function () {
    $('#web #lx_contact_left').css({ display: 'initial' }).after(function () {
        $('#web #lx_contact_left').addClass('slideInLeft').one('animationend', function () {
            $('#web #lx_contact_left').removeClass('slideInLeft');
        });
    });
    $('#web #lx_contact_right').css({ display: 'initial' }).after(function () {
        $('#web #lx_contact_right').addClass('slideInRight').one('animationend', function () {
            $('#web #lx_contact_right').removeClass('slideInRight');
        });
    });
});

$('#back_contact').click(function () {
    CloseContacts();
});

function CloseContacts() {
    $('#web #lx_contact_left').addClass('slideOutLeft').one('animationend', function () {
        $('#web #lx_contact_left').removeClass('slideOutLeft');
        $('#web #lx_contact_left').css({ display: 'none' });
    });

    $('#web #lx_contact_right').addClass('slideOutRight').one('animationend', function () {
        $('#web #lx_contact_right').removeClass('slideOutRight');
        $('#web #lx_contact_right').css({ display: 'none' });
    });
}