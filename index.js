const dropdownContainers = document.querySelectorAll('.dropdown-menu__container');
const headerFixed = document.querySelector('.header-fixed');
const headerElem = document.querySelector('.header-logo');
const menuDropDown = document.querySelectorAll('.menu-items')

dropdownContainers.forEach(container => {
  container.addEventListener('mouseover', () => {
    headerFixed.style.backgroundColor = '#4a4a4a';
  });

  container.addEventListener('mouseout', () => {
    headerFixed.style.backgroundColor = '#4a4a4ac6';
  });
});

headerElem.addEventListener('mouseover', () => {
  headerFixed.style.backgroundColor = '#4a4a4a';
});

headerElem.addEventListener('mouseout', () => {
  headerFixed.style.backgroundColor = '#4a4a4ac6';
});


// alert(
//   window.innerWidth
// )