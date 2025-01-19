// JavaScript for Mario Controls
const mario = document.getElementById('mario');

function moveForward() {
    mario.style.left = (parseInt(mario.style.left) || 0) + 10 + 'px';
}

function moveBackward() {
    mario.style.left = (parseInt(mario.style.left) || 0) - 10 + 'px';
}

function jump() {
    mario.style.bottom = '100px';
    setTimeout(() => {
        mario.style.bottom = '0px';
    }, 500);
}

// Event listeners for buttons
document.getElementById('btn_right').addEventListener('click', moveForward);
document.getElementById('btn_left').addEventListener('click', moveBackward);
document.getElementById('btn_jump').addEventListener('click', jump);
