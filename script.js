'use strict';
let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let about = document.querySelector('.about');
toggle.addEventListener('click', function(){
    navigation.classList.toggle('active')
    toggle.classList.toggle('active')
    topbar.classList.toggle('active')
    main.classList.toggle('active')
    about.classList.toggle('active')
})