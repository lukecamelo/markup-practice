const button = document.querySelector('.burger-button').childNodes[1]
const mobileNav = document.querySelector('.mobile-open')

button.addEventListener('click', e => {
  e.preventDefault()
  if (mobileNav.classList.contains('hide')) {
    mobileNav.classList.remove('hide')
  } else {
    mobileNav.classList.add('hide')
  }
})

fetch('http://email-loop.atypicdev.com/send?atypicdev2018', {
  method: 'POST',
  data: {'to': 'llukecamelo@gmail.com', 'message': 'this is a message' }
})
  .then(res => res.json())
  .then(json => console.log(json))