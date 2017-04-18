var mobileOpen = false

var openMobileNav = () => {
  mobileOpen = true
  $('.mobile-nav').addClass('mobile-nav--open')
  $('.nav-toggle__open').addClass('nav-toggle__open--active')
  $('.nav-toggle__close').addClass('nav-toggle__close--active')
  $('.mobile-nav__background').addClass('mobile-nav__background--open')
  $('.side-bar-nav').hide()
  $.scrollLock(true)
}

var closeMobileNav = () => {
  mobileOpen = false
  $('.mobile-nav').removeClass('mobile-nav--open')
  $('.nav-toggle__open').removeClass('nav-toggle__open--active')
  $('.nav-toggle__close').removeClass('nav-toggle__close--active')
  $('.mobile-nav__background').removeClass('mobile-nav__background--open')
  $('.side-bar-nav').show()
  $.scrollLock(false)
}

$( document ).ready( () => {
  $('.mobile-nav').click( () => {
    !mobileOpen ? openMobileNav() : closeMobileNav()
  })
})

$(window).resize(() => {
  if ( $(window).width() > 605 && mobileOpen ) closeMobileNav()
})
