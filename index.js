const dropdownContainers = document.querySelectorAll('.dropdown-menu__container');
const headerFixed = document.querySelector('.header-fixed');
const headerElem = document.querySelector('.header-logo');
const menuDropDown = document.querySelectorAll('.menu-items')

const containerArray = Array.from(dropdownContainers);

const state = {
  currHeader: false,
  currMenu: false
}

menuDropDown.forEach(elem => {
  elem.addEventListener('mouseover', (e) => {
    e.stopPropagation()
    state.currMenu = true
    elem.classList.add("active")
    headerFixed.classList.add('active-bg')
  });

  elem.addEventListener('mouseout', (e) => {
    e.stopPropagation()
    state.currMenu = false
    elem.classList.remove("active")
    headerFixed.classList.remove('active-bg')
  });
})

dropdownContainers.forEach(container => {
  const elemNumber = containerArray.indexOf(container)
  container.addEventListener('mouseover', (e) => {
    e.stopPropagation()
    state.currHeader = true
    headerFixed.classList.add('active-bg')
    menuDropDown[elemNumber].classList.add('active')
  });
});

headerElem.addEventListener('mouseover', () => {
  headerFixed.style.backgroundColor = '#4a4a4a';
});

headerElem.addEventListener('mouseout', () => {
  headerFixed.style.backgroundColor = '#4a4a4ac6';
});


alert(
  window.innerWidth
)