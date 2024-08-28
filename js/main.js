(function($){
	"use strict";

	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 300 ) {
					return 290;
				} else {
					return 300;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});

})(window.jQuery);