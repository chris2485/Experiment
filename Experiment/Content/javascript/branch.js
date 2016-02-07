var mouseDown = false;
var bgPost = 0;
var currPost = 0;
var movePost = 0;
var maxPost = -(2464 * 0.5);
$('#lx_branch .container').html('<p>' + bgPost + ', ' + maxPost + '</p>');

$('#lx_branch .container').mousedown(function (e) {
    mouseDown = true;
    yVal = $('#lx_branch .container').css('background-position').split(' ')[1];
    bgPost = parseInt(yVal.replace(/[^0-9-.]/g, ''));
    currPost = e.pageY;
});

$('#lx_branch .container').mousemove(function (e) {
    if (mouseDown) {
        movePost = e.pageY;

        bgxPost = bgPost;
        diff = currPost - movePost;
        bgxPost -= diff;

        if (diff < 0 && bgxPost > 0) {
            return;
        }
        else if (diff > 0 && bgxPost < maxPost) {
            return;
        }

        bgPost -= diff;
        currPost = movePost;
        $('#lx_branch .container').html('<p>' + bgPost + ', ' + maxPost + '</p>');
        $('#lx_branch .container').css({ 'background-position': '0 ' + bgPost + 'px' });
    }
});

$('#lx_branch .container').mouseup(function () {
    mouseDown = false;
});

$('#lx_branch .container').mouseleave(function () {
    mouseDown = false;
});

$('span.branch_b').click(function () {
    $('#web #lx_branch').css({ display: 'initial' }).after(function () {
        $('#web #lx_branch').addClass('branchInDown').one('animationend', function () {
            $('#web #lx_branch').removeClass('branchInDown');
        });
    });
});

function CloseBranch() {
    $('#web #lx_branch').addClass('branchOutUp').one('animationend', function () {
        $('#web #lx_branch').removeClass('branchOutUp');
        $('#web #lx_branch').css({ display: 'none' });
    });
}