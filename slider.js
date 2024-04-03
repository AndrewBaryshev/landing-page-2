new Swiper(".swiper", {
  slidesPerView: 2.8,
  spaceBetween: 19,
  loop: true,
  pagination: {                       
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
        return `<div class="${className}"></div>`
    },
  }
});