//slider mobile
const swiperSliderMobile = new Swiper(".slider-mobile .swiper", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".slider-mobile-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      if (swiperSliderMobile.activeIndex === 4) {
        document
          .querySelector(".mobile-slider-box")
          .classList.add("slider-end");
      } else {
        document
          .querySelector(".mobile-slider-box")
          .classList.remove("slider-end");
      }
      if (swiperSliderMobile.activeIndex === 0) {
        document
          .querySelector(".mobile-slider-box")
          .classList.add("slider-start");
      } else {
        document
          .querySelector(".mobile-slider-box")
          .classList.remove("slider-start");
      }
    },
  },
});
