document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".swiper",{
        slidesPerView:3,
        loop:true,
        spaceBetween:20,
        autoplay:{
          delay:2000,
        },
        breakpoints: {
          400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
          300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
          1200: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
        },
        navigation:{
          nextEl: ".fa-arrow-right",
          prevEl: ".fa-arrow-left",
        },
        
      
        
      })
});




