// dropdown menu

let productMenu=document.getElementById('productMenu');
let dropdowns=document.querySelector('.dropdowns');
let dropdown1=Array.from(document.querySelectorAll('.dropdown1 > li'));
let dropdown2=Array.from(document.querySelectorAll('.dropdown2 > li'));
let accordionBtn=Array.from(document.getElementsByClassName('accordionBtn'));
let hamIcon=document.getElementById('hamIcon');
let mobileMenu=document.getElementById('mobileMenu');
let languageLi=document.querySelector('.nav-item.dropdown');

hamIcon.addEventListener('click',function () {
    mobileMenu.classList.toggle('active');
})

accordionBtn.forEach((item)=>{
    item.addEventListener('click',function () {
      item.nextElementSibling.classList.toggle('active');
      item.querySelector('.bi-chevron-up').classList.toggle('active');
    })
})
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
dropdowns.addEventListener('mouseleave',function () {
    dropdowns.classList.remove('active');
})
languageLi.addEventListener('mouseover', function() {
  document.querySelector('.dropdowns').classList.remove('active');
})

// swiper
var banner = new Swiper(".banner", {
    loop: true,
    autoplay:true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
    },
});
var category = new Swiper(".category", {
    slidesPerView: 2.3,
    spaceBetween: 20,
    autoplay:true,
    breakpoints:{
     992:{
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
    autoplay:true,
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
var services2 = new Swiper(".services2", {
    slidesPerView: 1,
    spaceBetween: 27,
    autoplay:true,
    breakpoints:{
        768:{
            slidesPerView: 2,
         },
     992:{
        slidesPerView: 3,
     },
     1200:{
        slidesPerView: 4,
     },
    }
});
var customer = new Swiper(".customer", {
    loop:true,
    autoplay:true,
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
var about = new Swiper(".about", {
    loop: true,
    autoplay:true,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
});

var about2 = new Swiper(".about2", {
    loop: true,
    autoplay:true,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination2",
    },
});

var about3 = new Swiper(".about3", {
    loop: true,
    autoplay:true,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination3",
    },
});

var about4 = new Swiper(".about4", {
    loop: true,
    autoplay:true,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination4",
    },
});
var smallImgs = new Swiper(".smallImgs", {
    spaceBetween: 16,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var gallery = new Swiper(".gallery", {
    spaceBetween: 10,
    thumbs: {
        Swiper: Swiper,
    },
});
var specialProduct = new Swiper(".specialProduct", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay:true,
    breakpoints:{
        576:{
            slidesPerView: 2,
         },
     992:{
        slidesPerView: 3,
     },
     1200:{
        slidesPerView: 4,
     },
     1400:{
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
var products = new Swiper(".products", {
    slidesPerView: 2,
    spaceBetween: 0,
    // autoplay:true,
    breakpoints:{
         768:{
            slidesPerView: 3.5,
         },
     992:{
        slidesPerView: 4.5,
     },
     1200:{
        slidesPerView: 5.5,
     },
     1400:{
        slidesPerView: 7.5,
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

// filter

let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    filterBtn.forEach((items) => {
      items.nextElementSibling.classList.remove('active');
      items.querySelector('svg').classList.remove('active');
    })
    item.nextElementSibling.classList.add('active');
    item.querySelector('svg').classList.add('active');
  })
})

// compare

var list = [];

$(document).on('click', '.addToCompare', function () {
    var productID = $(this).parents('.selectProduct').attr('data-id');
    var inArray = $.inArray(productID, list);
    if (inArray < 0) {
        if (list.length < 4) {
            list.push(productID);

            var productName = $(this).parents('.selectProduct').find('.productName').text();
            var price = $(this).parents('.selectProduct').find('.price').text();
            var oldPrice = $(this).parents('.selectProduct').find('.oldPrice').text();
            var off = $(this).parents('.selectProduct').find('.off').text();
            var image = $(this).parents('.selectProduct').find('.productImg').attr('src');

            $(".comparePan").append(`   
            
        <div  id="${productID}" class="col-xxl-3 col-xl-4 col-md-6">
            <div class="rounded-21 bg-white p-3 shadow10 position-relative">
          
              <div class="position-absolute left-20 cursor-pointer remove-compare">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <g opacity="0.3">
                    <path
                      d="M13.9099 11.9999L18.2099 7.70994C18.3982 7.52164 18.504 7.26624 18.504 6.99994C18.504 6.73364 18.3982 6.47825 18.2099 6.28994C18.0216 6.10164 17.7662 5.99585 17.4999 5.99585C17.2336 5.99585 16.9782 6.10164 16.7899 6.28994L12.4999 10.5899L8.20994 6.28994C8.02164 6.10164 7.76624 5.99585 7.49994 5.99585C7.23364 5.99585 6.97824 6.10164 6.78994 6.28994C6.60164 6.47825 6.49585 6.73364 6.49585 6.99994C6.49585 7.26624 6.60164 7.52164 6.78994 7.70994L11.0899 11.9999L6.78994 16.2899C6.69621 16.3829 6.62182 16.4935 6.57105 16.6154C6.52028 16.7372 6.49414 16.8679 6.49414 16.9999C6.49414 17.132 6.52028 17.2627 6.57105 17.3845C6.62182 17.5064 6.69621 17.617 6.78994 17.7099C6.8829 17.8037 6.9935 17.8781 7.11536 17.9288C7.23722 17.9796 7.36793 18.0057 7.49994 18.0057C7.63195 18.0057 7.76266 17.9796 7.88452 17.9288C8.00638 17.8781 8.11698 17.8037 8.20994 17.7099L12.4999 13.4099L16.7899 17.7099C16.8829 17.8037 16.9935 17.8781 17.1154 17.9288C17.2372 17.9796 17.3679 18.0057 17.4999 18.0057C17.632 18.0057 17.7627 17.9796 17.8845 17.9288C18.0064 17.8781 18.117 17.8037 18.2099 17.7099C18.3037 17.617 18.3781 17.5064 18.4288 17.3845C18.4796 17.2627 18.5057 17.132 18.5057 16.9999C18.5057 16.8679 18.4796 16.7372 18.4288 16.6154C18.3781 16.4935 18.3037 16.3829 18.2099 16.2899L13.9099 11.9999Z"
                      fill="black" />
                  </g>
                </svg>
              </div>
        
              <img alt="product" src="${image}" class=" img-fluid mx-auto d-block mt-4">
              <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
              ${productName}
              </a>
              <div class="d-flex align-items-center gap-3 mt-2 pt-1">
                <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path
                      d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                      fill="url(#paint0_linear_530_123)" />
                    <path opacity="0.5"
                      d="M2.23648 2.29248C2.29142 2.13613 2.40622 2.008 2.55561 1.93627C2.70501 1.86454 2.87678 1.85508 3.03315 1.90998L3.28398 1.99831C3.79815 2.17914 4.23398 2.33248 4.57815 2.50081C4.94481 2.68164 5.25981 2.90331 5.49648 3.24998C5.73148 3.59331 5.82898 3.97081 5.87315 4.38498C5.89315 4.56998 5.90398 4.77498 5.90981 4.99998H14.7748C16.179 4.99998 17.4431 4.99998 17.8131 5.48081C18.1831 5.96164 18.0381 6.68664 17.749 8.13581L17.3323 10.1566C17.0698 11.43 16.939 12.0675 16.479 12.4416C16.019 12.8166 15.369 12.8166 14.0681 12.8166H9.64898C7.32398 12.8166 6.16231 12.8166 5.44065 12.055C4.71898 11.2933 4.66565 10.485 4.66565 8.03331V5.86498C4.66565 5.24831 4.66565 4.83581 4.63065 4.51914C4.59731 4.21664 4.53981 4.06498 4.46398 3.95498C4.39148 3.84748 4.28065 3.74664 4.02731 3.62331C3.75815 3.49164 3.39231 3.36164 2.83565 3.16581L2.61898 3.08998C2.54139 3.06286 2.46991 3.0207 2.40864 2.96592C2.34737 2.91114 2.2975 2.84482 2.26189 2.77074C2.22628 2.69666 2.20564 2.61629 2.20113 2.53422C2.19663 2.45215 2.20836 2.37 2.23565 2.29248H2.23648Z"
                      fill="url(#paint1_linear_530_123)" />
                    <path
                      d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                      fill="url(#paint2_linear_530_123)" />
                    <defs>
                      <linearGradient id="paint0_linear_530_123" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5B6CCC" />
                        <stop offset="1" stop-color="#4834AC" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_530_123" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58465"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5B6CCC" />
                        <stop offset="1" stop-color="#4834AC" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_530_123" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5B6CCC" />
                        <stop offset="1" stop-color="#4834AC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <div class="flex-grow-1">
                  <div class="d-flex align-items-center justify-content-end gap-2">
                    <p class="fs-12 text-gray text-decoration-line-through mb-0">${oldPrice}</p>
                    <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">${off}</p>
                  </div>
                  <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                    <p class="fs-17 font-bold mb-0">${price}</p>
                    <p class="mb-1 fs-12 fw-bold">تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`)
        };
        console.log(list)
    } else {
        list.splice($.inArray(productID, list), 1);
        var prod = productID.replace(" ", "");
        $('#' + prod).remove();
    }
});

   /*function to remove item from preview panel*/
   $(document).on('click', '.remove-compare', function () {
    $(this).parent('.col-md-6').remove()
});
