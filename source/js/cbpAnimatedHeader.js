/**
 * cbpAnimatedHeader.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
 var cbpAnimatedHeader = (function() {

 	var docElem = document.documentElement,
 		header = document.querySelector( '.cbp-af-header' ),
 		didScroll = false,
 		changeHeaderOn = 150;

 	function init() {
 		window.addEventListener( 'scroll', function( event ) {
 			if( !didScroll ) {
 				didScroll = true;
 				setTimeout( scrollPage, 250 );
 			}
 		}, false );
 	}

 	function scrollPage() {
 		var sy = scrollY();
 		if ( sy >= changeHeaderOn ) {
 			header.classList.add( 'cbp-af-header-shrink' );
 		}
 		else {
 			header.classList.remove( 'cbp-af-header-shrink' );
 		}
 		didScroll = false;
 	}

 	function scrollY() {
 		return window.pageYOffset || docElem.scrollTop;
 	}

 	init();

 })();
