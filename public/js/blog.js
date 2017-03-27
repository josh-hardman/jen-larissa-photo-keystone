$(document).ready( function(){
  $('.blog__img img').each(function(){
    $(this).on('load', function() {
        this.width > this.height ? $(this).parent().addClass('blog__img--landscape') : $(this).parent().addClass('blog__img--portrait')
    });
  })
})
