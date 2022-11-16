const navBar = document.getElementById('nav-bar');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
menu.addEventListener('click', () => {
    closeMenu.style.display = 'block';
    menu.style.display = 'none';
    navBar.style.top = '80px'
})
closeMenu.addEventListener('click', () => {
    menu.style.display = 'block';
    closeMenu.style.display = 'none';
    navBar.style.top = '-800px'
})

const verifyNow = document.querySelector('#verify-now');
const verify = document.querySelector('#verify');
const verifyClose = document.querySelector('#verify-close');
const section2 = document.querySelector('#section-2');
const faceBtn = document.querySelector('#face-btn');
const idVerClose = document.querySelector('#id-verify-close');
const idVerify = document.querySelector('#id-verify');
verifyNow.addEventListener('click', () => {
    verify.style.display = 'block';
    section2.style.filter = 'brightness(30%)';
})
verifyClose.addEventListener('click', () => {
    verify.style.display = 'none';
    section2.style.filter = 'brightness(100%)';
})

faceBtn.addEventListener('click', () => {
    idVerify.style.display = 'block';
    verify.style.display = 'none';
    section2.style.filter = 'brightness(30%)';
})
idVerClose.addEventListener('click', () => {
    idVerify.style.display = 'none';
    verify.style.display = 'block';
    section2.style.filter = 'brightness(100%)';
})