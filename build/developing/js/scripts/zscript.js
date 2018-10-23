document.addEventListener("DOMContentLoaded",function(){



	"use strict";

	hljs.initHighlightingOnLoad();
	console.clear();


	// Notes
	infoNotes('[data-component="info-note"]');

	// Dropdown
	dropdown('[data-component="dropdown"]');

	// Sticky Headers
	stickyHeader('[data-type="stickyHeader"]');

	// Modal Box
	modal('[data-component="modal"]');

	// Tooltip
	tooltip('[data-component="tooltip"]');

	// Tabs
	tabs('[data-component="tabs"]');

	// Collapseable box
	togglebox('[data-component="collapse"]');


	// fade out when clicks on external link - smooth animation :)
	$('a.external').click(function(e) {
		e.preventDefault();
		var link = $(this).attr('href');
		$('body').fadeOut('50', function() {
			window.location.href = link;
		});
	});



	//Demo animations
	$(".sec-toggle").click(function(event) {
		event.preventDefault();
		$(this).next(".demo-heading").slideToggle('400');
		$(this).toggleClass("isOpened");
		if ( $(this).hasClass("isOpened") ) {
			$(this).find('span.line').animate({
				width:'100%',
			}, 800);
			$('html, body').animate({
				scrollTop: $(this).next(".demo-heading").find('h3').first().offset().top + 5
			}, 800);

			//  THIS IS HERE ONLY FOR DEMO PURPOSE
			// Sticky Headers
			stickyHeader('[data-type="demo_sticky"]');

		} else {
			$(this).find('span.line').animate({
				width:'0%'
			}, 800);
		}
	});




});





















// // LOCAL STORAGE SCRIPT
// // load css files
// console.log('Local storage started!');
// var styles = [{
// 	url: '/css/styles.css'
// }];

// // load js files
// var js = [{
// 	url: '/js/scripts/jquery.js'
// }];
// // IF loading JS files then in LOADER.LOAD.APPLY use styles.concat(js) not just styles

// // UNCOMMENT to turn on loading cached files from Local Storage (performance boost √)
// loader.textInjection = true;

// if (loader.has('/css/styles.css')) {
// 	loader.load.apply(loader, styles.concat(js)).then(function() {
// 		// initiliaze your app?
// 		console.log("It has! loaded from storage!");
// 	});
// }else{
// 	loader.load.apply(loader, styles.concat(js)).then(function() {
// 		// initiliaze your app?
// 		console.log("Nope, loading from file :/");
// 	});
// }
