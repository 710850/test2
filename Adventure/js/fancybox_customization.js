
    $(document).ready(function() {
     $(".fancybox").fancybox();
     $("a.group").fancybox({
      'transitionIn'	:	'elastic',
      'transitionOut'	:	'elastic',
      'speedIn'		:	600,
      'speedOut'		:	200,
      'overlayShow'	:	true,
      'padding'       : 0
     });



     $(".video").click(function() {
      $.fancybox({
       'padding'		: 0,
       'autoScale'		: false,
       'transitionIn'	: 'none',
       'transitionOut'	: 'none',
       'width'			: 740,
       'height'		: 480,
       'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
       'type'			: 'swf',
       'swf'			: {
        'wmode'				: 'transparent',
        'allowfullscreen'	: 'true'
       }
      });

      return false;
     });

    });
