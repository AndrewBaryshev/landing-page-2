new Swiper(".swiper", {
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  slidesPerView: 2.8,
  spaceBetween: 19,
  loop: true,
  freeMode: true,
  centeredSlides: true,
  pagination: {                       
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
        return `<div class="${className}"></div>`
    },
  }
});