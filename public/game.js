var ismobile = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)|(BlackBerry)/i);
var scroll_x = $(window).width() / 2;
var floor_x = 0;
var mario_x = 0;
var direction = false;
var music_play = false;
var interval_left = false;
var interval_right = false;
var jumping = false;

if (ismobile) scroll_x -= 170;
else scroll_x -= 240;

$('#scroll').css('left', scroll_x + 'px');

$('.tweet').click(function () {
    window.open('https://twitter.com/intent/tweet?text=' + document.title + '&tw_p=tweetbutton&url=' + document.location.href);
    return false;
});

function moveTo(pos) {
    diff = ismobile ? 10 : 15;

    if (pos == 'left') {
        if (!direction) {
            direction = 'left';
            $('#mario').css('-webkit-transform', 'scaleX(-1)');
        }
        floor_x += diff;
        scroll_x += diff;
        mario_x -= 65;
        if (mario_x == -195) mario_x = 0;
    } else if (pos == 'right') {
        if (!direction) {
            direction = 'right';
            $('#mario').css('-webkit-transform', 'scaleX(1)');
        }
        floor_x -= diff;
        scroll_x -= diff;
        mario_x -= 65;
        if (mario_x == -195) mario_x = 0;
    } else {
        direction = false;
    }

    // reach end
    if (scroll_x < (parseInt($('#scroll').css('width')) * -1)) {
        scroll_x = $(window).width();
    // reach start
    } else if (scroll_x > $(window).width()) {
        scroll_x = parseInt($('#scroll').css('width')) * -1;
    }

    $('#scroll').css('left', scroll_x + 'px');
    $('#floor').css('background-position-x', floor_x + 'px');
    $('#mario').css('background-position-x', mario_x + 'px');
}

function playMusic() {
    if (!music_play) {
        document.getElementById("bg_music").play();
        music_play = true;
    }
}

function moveLeft() {
    playMusic();
    direction = false;
    if (!interval_left) {
        interval_left = setInterval(function () {
            moveTo('left');
        }, 100);
    }
}

function moveRight() {
    playMusic();
    direction = false;
    if (!interval_right) {
        interval_right = setInterval(function () {
            moveTo('right');
        }, 100);
    }
}

function stopMove() {
    clearInterval(interval_left);
    clearInterval(interval_right);
    interval_left = false;
    interval_right = false;
}

function jump() {
    if (!jumping) {
        jumping = true;
        $('#mario').addClass('jump');
        setTimeout(function () {
            $('#mario').removeClass('jump');
            jumping = false;
        }, 600); // Match this duration with the CSS animation duration
    }
}

// Function to move Mario to the right
function moveRightArrow() {
    const mario = document.getElementById('mario');
    mario.style.left = (parseInt(mario.style.left) || 0) + 10 + 'px';
    window.scrollBy(10, 0); // Scroll the page to the right
}

// Function to move Mario to the left
function moveLeftArrow() {
    const mario = document.getElementById('mario');
    mario.style.left = (parseInt(mario.style.left) || 0) - 10 + 'px';
    window.scrollBy(-10, 0); // Scroll the page to the left
}

// Function to make Mario jump
function jumpArrow() {
    const mario = document.getElementById('mario');
    mario.style.bottom = '100px';
    setTimeout(() => {
        mario.style.bottom = '0px';
    }, 500);
}

// Event listeners for arrow buttons
document.getElementById('btn_right').addEventListener('click', moveRightArrow);
document.getElementById('btn_left').addEventListener('click', moveLeftArrow);

// Double-tap to jump
let lastTap = 0;
document.addEventListener('touchend', function(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        jumpArrow();
    }
    lastTap = currentTime;
});

$(function () {
    $("body, #scroll").click(function () {
        playMusic();
    });

    $("body").keydown(function (e) {
        if (e.keyCode == 37) {
            moveLeft();
        } else if (e.keyCode == 39) {
            moveRight();
        } else if (e.keyCode == 32) {
            jump();
        }
    });

    $("body").keyup(function (e) {
        stopMove();
    });

    $('#btn_left').on('mousedown touchstart', function () {
        moveLeft();
    });

    $('#btn_right').on('mousedown touchstart', function () {
        moveRight();
    });

    $('#btn_left, #btn_right').on('mouseup touchend', function (event) {
        stopMove();
    });
});
