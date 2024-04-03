document.addEventListener("DOMContentLoaded", function() {
  let parallaxElement = document.querySelector('.img-style-smart.parallax-layer');
  let parallaxWrapper = document.querySelector('.wrapper.parallax');

  function updateParallax() {
      let scrollPosition = parallaxWrapper.getBoundingClientRect().top;
      parallaxElement.style.transform = 'translateX(-50%) translateY(' + scrollPosition * 0.5 + 'px)';
  }

  window.addEventListener('scroll', updateParallax);
});