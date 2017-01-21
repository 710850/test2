
    $(function() {
     $('.lazy').lazy({
      // loads instantly
      customLoaderName: function(element) {
       element.load();
      },

      // embed a youtube video
      youtubeLoader: function(element) {
       var url = 'https://www.youtube.com/embed/',
           frame = $('<iframe />')

       frame.attr('width', 700)
       frame.attr('height', 394)
       frame.attr('frameborder', 0)
       frame.attr('src', url + element.data("video"));

       element.append(frame).load();
      },

      // loads with a five seconds delay
      asyncLoader: function(element) {
       setTimeout(function() {
        element.load()
       }, 5000);
      },

      // always fail
      errorLoader: function(element) {
       element.error();
      }
     });
    });
