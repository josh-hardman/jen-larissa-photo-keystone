$( document ).ready( () => {
  $('.nav-toggle').click( () => {
    $('.mobile-nav').toggleClass('mobile-nav--open')
    $('.nav-toggle__open').toggleClass('nav-toggle__open--active')
    $('.nav-toggle__close').toggleClass('nav-toggle__close--active')
    $('.mobile-nav__background').toggleClass('mobile-nav__background--open')
    $(body).toggleClass('lock-scroll')
  })
})
