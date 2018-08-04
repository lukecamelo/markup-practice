const button = document.querySelector('.burger-button').childNodes[1]
const mobileNav = document.querySelector('.mobile-open')

button.addEventListener('click', (e) => {
  e.preventDefault()
  if(mobileNav.classList.contains('hide')) {
    mobileNav.classList.remove('hide')
  } else {
    mobileNav.classList.add('hide')
  }
})
