var resize = function(){
  var width = $('.thumb').first().width()
  $('.thumb').height(width)
}

  var template = `<a class="insta-gallery__image" href="{{link}}" target="_blank" id="{{id}}">
          <figure class="photo-inner">
            <div class="thumb" style="background-image: url('{{image}}')" title="Portrait: 400x800"></div>
          </figure>
        </a>`

  var userFeed = new Instafeed({
   get: 'user',
   userId: '1368560571',
   clientId: '7be25a015f484c51b664a9ee6847c408',
   accessToken: '1368560571.7be25a0.203a7561c4494211bdf972888f8e0c8b',
   resolution: 'standard_resolution',
   template: template,
   sortBy: 'most-recent',
   limit: 10,
   links: true,
   after: function() {
            resize()
        }
 })
 userFeed.run()


$(window).resize(function(){
 resize()
})
