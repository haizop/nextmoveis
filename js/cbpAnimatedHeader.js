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
var cbpAnimatedHeader=function(){function e(){window.addEventListener("scroll",function(e){a||(a=!0,setTimeout(n,250))},!1)}function n(){var e=t();e>=o?r.classList.add("cbp-af-header-shrink"):r.classList.remove("cbp-af-header-shrink"),a=!1}function t(){return window.pageYOffset||c.scrollTop}var c=document.documentElement,r=document.querySelector(".cbp-af-header"),a=!1,o=150;e()}();