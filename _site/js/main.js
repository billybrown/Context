$(document).ready(function() {


  $('#email-trigger').click(function(){
  	$('.email-signup').toggleClass("email-up");
  	$(this).toggleClass("hot-arrow");
  });

});



$(window).load(function() {

  $('.mobile-navicon').click(function(){
  	$('header').toggleClass('nav-slide');

  });

var windowwidth = $(window).width();
if (windowwidth > 620) {
		//////////////////////////////////////////////////////////////////////////////
		//equal height on load - articles
		var currentTallest2 = 0;
    	$('.featured-articles li > a').each(function(i){
				if ($(this).height() > currentTallest2) { 
					currentTallest2 = $(this).height(); 
				}
		});
		$('.featured-articles li > a').css('min-height', currentTallest2); 
		
}

		//////////////////////////////////////////////////////////////////////////////
		//equal height on load - across-4
		    var currentTallest = 0;
		    $('.across-4 li').each(function(i){
					if ($(this).height() > currentTallest) { 
						currentTallest = $(this).height(); 
					}
			});
			$('.across-4 li').css('min-height', currentTallest); 

});

$(window).resize(function() {


var windowwidth = $(window).width();
if (windowwidth > 620) {

//////////////////////////////////////////////////////////////////////////////
//equal height on resize - articles
		//zero out all min-heights
    $('.featured-articles li > a').css('min-height', 0);
    // set tallest height variable
    var currentTallest2 = 0;
    // find the tallest height
    $('.featured-articles li > a').each(function(i){
			if ($(this).height() > currentTallest2) { 
				currentTallest2 = $(this).height(); 
			}
	});
	// make all of them the same height
	$('.featured-articles li > a').css('min-height', currentTallest2); 
	// zero out the variable




currentTallest = 0;
currentTallest2 = 0;
}

		//////////////////////////////////////////////////////////////////////////////
		//equal height on load - across-4
		    var currentTallest = 0;
		    $('.across-4 li').each(function(i){
					if ($(this).height() > currentTallest) { 
						currentTallest = $(this).height(); 
					}
			});
			$('.across-4 li').css('min-height', currentTallest); 

});