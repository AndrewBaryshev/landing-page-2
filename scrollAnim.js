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
  anim1: false,
  anim2: false,
  anim3: false,
  anim4: false,
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
  const clientRect1 = anim1.getBoundingClientRect();
  const clientRect2 = anim2.getBoundingClientRect();
  const clientRect3 = anim3.getBoundingClientRect();
  const clientRect4 = anim4.getBoundingClientRect();
  const iconRect = icon[0].getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (clientRect1.top <= windowHeight && !state.anim1) {
    state.anim1 = true
    anim1.classList.add("first-block-anim")
  }

  if (clientRect2.top + 25 <= windowHeight && !state.anim2) {
    state.anim2 = true
    anim2.classList.add("first-block-anim")
  }

  if (clientRect3.top <= windowHeight && !state.anim3) {
    state.anim3 = true
    anim3.classList.add("first-block-anim")
  }

  if (clientRect4.top <= windowHeight && !state.anim4) {
    state.anim4 = true
    anim4.classList.add("first-block-anim")
  }

  if(iconRect.top <= windowHeight && !state.icon) {
    state.icon = true
    setTimeout(() => chainAnimationIcon(arrAnimIcon1, 0, arrAnimIcon1.length), 300)
  }
}


anim1.addEventListener('animationend', () => {
  anim1.classList.add("nullTraslate")
})

anim2.addEventListener('animationend', () => {
  anim2.classList.add("nullTraslate")
})

anim3.addEventListener('animationend', () => {
  anim3.classList.add("nullTraslate")
})

anim4.addEventListener('animationend', () => {
  anim4.classList.add("nullTraslate")
})

window.addEventListener('scroll', checkBlockPosition);