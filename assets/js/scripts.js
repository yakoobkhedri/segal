// dropdown menu

let productMenu=document.getElementById('productMenu');
let dropdown1=Array.from(document.querySelectorAll('.dropdown1 > li'));
let dropdown2=Array.from(document.querySelectorAll('.dropdown2 > li'));

productMenu.addEventListener('mouseover',function () {
    this.parentElement.nextElementSibling.classList.add('active');
})

dropdown1.forEach((item) => {
    item.addEventListener('mouseover', function() {
        dropdown1.forEach((li)=>li.classList.remove('active'));
        item.classList.add('active');
        let tabId = item.dataset.id;
        dropdown2.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        })
    })
});

// swiper
var models = new Swiper(".banner", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
    },
});
var category = new Swiper(".category", {
    slidesPerView: 2.3,
    spaceBetween: 20,
    breakpoints:{
     768:{
        slidesPerView: 3,
     },
     992:{
        slidesPerView: 4,
        spaceBetween: 69,
     },
     1280:{
        slidesPerView: 5,
     },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination2",
    },
});
var services = new Swiper(".services", {
    slidesPerView: 1,
    spaceBetween: 27,
    breakpoints:{
     768:{
        slidesPerView: 2,
     },
     1280:{
        slidesPerView: 3,
     },
    },
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    pagination: {
        el: ".swiper-pagination3",
    },
});
var customer = new Swiper(".customer", {
    loop:true,
    slidesPerView: 1.2,
    spaceBetween: 19,
    breakpoints:{
     576:{
        slidesPerView: 2,
        spaceBetween: 27,
     },
     992:{
        slidesPerView: 3,
     },
     1400:{
        slidesPerView: 4,
     },
    },
    pagination: {
        el: ".swiper-pagination4",
    },
});