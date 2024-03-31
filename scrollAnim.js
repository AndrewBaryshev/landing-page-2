const block = document.querySelector('.anim-flex');
const icon = document.querySelectorAll('.block-data__icon')

const state = {
  firstBlock: false,
  icon: false
}

function checkBlockPosition() {
  const blockRect = block.getBoundingClientRect();
  const iconRect = icon[0].getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (blockRect.top + blockRect.height / 6 <= windowHeight && !state.firstBlock) {
    state.firstBlock = true
    block.classList.add("first-block-anim")
  }

  if(iconRect.top + iconRect.height / 6 <= windowHeight && !state.icon) {
    state.icon = true
    icon.forEach(elem => {
      elem.classList.add("icon-anim")
    })
  }
}

block.addEventListener('animationend', () => {
  block.classList.add("nullTraslate")
})

icon.forEach(elem => {
  elem.addEventListener('animationend', () => {
    elem.classList.remove("moved")
  })
})

window.addEventListener('scroll', checkBlockPosition);