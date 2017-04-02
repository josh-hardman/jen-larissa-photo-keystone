$( document ).ready( function(){
  $('.nav-toggle').click(function(e){
    $('.mobile-nav').toggleClass('mobile-nav--open')
    $('.nav-toggle').toggleClass('nav-toggle--open')
    $('.mobile-nav__background').toggleClass('mobile-nav__background--open')
    $('.slide-body').toggleClass('slideRight')
  })
})
