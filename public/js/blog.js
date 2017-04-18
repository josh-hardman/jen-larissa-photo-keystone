$(document).ready( function(){
  $('.blog__img img').each(function(){
    $(this).on('load', function() {
        if (this.width < this.height) {
          $(this).parent().removeClass('blog__img--landscape')
          $(this).parent().addClass('blog__img--portrait')
        }
    });
  })
})
