$('.apply_b').click(function () {
    $('#web #lx_apply').css({ display: 'initial' }).after(function () {
        $('#web #lx_apply .panel').addClass('applyInLeft').one('animationend', function () {
            $('#web #lx_apply .panel').removeClass('applyInLeft');
        });
    });
});

$('#web #lx_apply').click(function (e) {
    if (e.target === this) {
        CloseApply();
    }
});

$('#back_apply').click(function () {
    CloseApply();
});

function CloseApply() {
    $('#web #lx_apply .panel').addClass('applyOutRight').one('animationend', function () {
        $('#web #lx_apply .panel').removeClass('applyOutRight');
        $('#web #lx_apply').css({ display: 'none' });
    });
}