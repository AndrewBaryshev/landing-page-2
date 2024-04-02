new Swiper(".swiper", {
  slidesPerView: 2.8,
  spaceBetween: 19,
  loop: true,
  pagination: {                       
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {                 //added
        return `<div class="${className}"></div>` //added
    },                                                          //added
  }
});