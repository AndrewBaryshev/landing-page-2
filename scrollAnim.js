const block = document.querySelector('.anim-flex');
const icon = document.querySelectorAll('.block-data__icon')

const anim1 = document.querySelector(".anim-1")
const anim2 = document.querySelector(".anim-2")
const anim3 = document.querySelector(".anim-3")
const anim4 = document.querySelector(".anim-4")

const animIcon1 = document.querySelector(".anim-icon-1")
const animIcon2 = document.querySelector(".anim-icon-2")
const animIcon3 = document.querySelector(".anim-icon-3")

const arrAnim1 = [
  anim1,
  anim2,
  anim3,
  anim4
]

const arrAnimIcon1 = [
  animIcon1,
  animIcon2,
  animIcon3
]

const state = {
  firstBlock: false,
  icon: false
}

function chainAnimation(arr, index, length) {
  arr[index].classList.add("first-block-anim")
  if(index + 1 != length) {
    arr[index].addEventListener('animationend', () => {
      arr[index].classList.add("nullTraslate")
      chainAnimation(arr, index + 1, length)
    })
  }
  else {
    arr[index].classList.add("nullTraslate")
  }
}

function chainAnimationIcon(arr, index, length) {
  arr[index].classList.add("icon-anim")
  if(index + 1 != length) {
    arr[index].addEventListener('animationend', () => {
      arr[index].classList.remove("moved")
      chainAnimationIcon(arr, index + 1, length)
    })
  }
  else {
    arr[index].classList.remove("moved")
  }
}

function checkBlockPosition() {
  const blockRect = block.getBoundingClientRect();
  const iconRect = icon[0].getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (blockRect.top <= windowHeight && !state.firstBlock) {
    state.firstBlock = true
    chainAnimation(arrAnim1, 0, arrAnim1.length)
  }

  if(iconRect.top <= windowHeight && !state.icon) {
    state.icon = true
    chainAnimationIcon(arrAnimIcon1, 0, arrAnimIcon1.length)
  }
}

window.addEventListener('scroll', checkBlockPosition);