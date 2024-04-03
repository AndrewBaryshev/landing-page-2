const image = document.getElementById("smart-img-parallax")
new simpleParallax(image, {
	scale: 1.3,
  delay: .1,
	transition: 'cubic-bezier(0,0,0,1)'
});