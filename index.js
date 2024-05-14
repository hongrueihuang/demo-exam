const menuBtn = document.querySelector('.menu-btn');
const menuBtnImage = document.querySelector('.menu-btn img');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
    const menuBtnImageSrc = menuBtnImage.getAttribute('src');
    if(menuBtnImageSrc === './assets/hamburgur.png') {
        menuBtnImage.setAttribute('src', './assets/hamburgur_close.png');
    } else {
        menuBtnImage.setAttribute('src', './assets/hamburgur.png');
    }
    menuList.classList.toggle('active');
})