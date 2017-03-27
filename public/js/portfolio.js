document.body.classList.add("animate-in");

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

var setActiveSideBarSection = function() {
  function elementScrolled(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top + $( elem ).height()/2;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }

  var sectionNames = ['engagements','bridals','weddings','portraits'];

  $('.js-side-btn').removeClass('selected');

  sectionNames.forEach(function(sectionName){
    if( elementScrolled('#' + sectionName ) ){
      $('.js-' + sectionName ).addClass('selected');
    } else {
      $('.js-' + sectionName ).removeClass('selected');
    }
  });
}

$(document).ready(function(){

  console.log('ready')

  // set up smooth scrolling for any anchor tags
  $("a").on('click', function(event) {
    console.log('click')
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // set default on page load
  setActiveSideBarSection();

  // set up side bar button section listener
  $(window).scroll(function(){
      setActiveSideBarSection();
  });


});
