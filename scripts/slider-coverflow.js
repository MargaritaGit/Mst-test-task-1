const swiperCoverflow = new Swiper(".swiper_coverflow", {
    // Начальный слайд (нумерация с 0)
    initialSlide: 3, // 0 — первый слайд, 1 — второй и т.д.

    loop: true,

    autoplay: {
        delay: 5000, // in miliseconds 
        disableOnInteraction: false,
    },

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination_coverflow",
        clickable: true,
    },
});
