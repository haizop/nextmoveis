function init(){tooltips(),onePageScroll(),scrollAnchor(),toggleContactForm()}function owlCarousel(){$("#owl-example").owlCarousel({lazyLoad:!0,items:4,theme:"owl-theme-main"}),$("#intro").owlCarousel({lazyLoad:!0,lazyEffect:"fade",singleItem:!0,navigation:!0,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],slideSpeed:450,pagination:!1,transitionStyle:"fade",theme:"owl-theme-featured"})}function tooltips(){$(".tooltips").tooltip()}function toggleContactForm(){$(".contact-button").click(function(){$(this).toggleClass("active"),$(".contact-form").slideToggle(300)})}function magnificPopup(){$(".popup-gallery").magnificPopup({type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",disableOn:700,removalDelay:160,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'},callbacks:{close:function(){$(".portfolio-item figure figcaption").removeClass("active"),$(".portfolio-item figure .info").removeClass("active")}}}),$(".portfolio-item figcaption a.preview").click(function(){$(this).parent().addClass("active"),$(this).parent().siblings(".info").addClass("active")}),$(".zoom-modal").magnificPopup({type:"image",mainClass:"mfp-with-zoom",zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("i")?e:e.find("i")}}}),$(".popup-modal").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-slide-bottom",modal:!0}),$(document).on("click",".popup-modal-dismiss",function(e){e.preventDefault(),$.magnificPopup.close()})}function isotope(){var e=$("#portfolio");e.imagesLoaded(function(){e.isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"})}),$("#filters").on("click","button",function(t){var a=$(this).attr("data-filter-value");e.isotope({filter:a}),$("#filters button").removeClass("active"),$(this).addClass("active")})}function scrollAnchor(){$(".scroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},650),!1}})}function onePageScroll(){$(".nav").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:650,scrollOffset:30,scrollThreshold:.5,filter:":not(.login, .signup, .external)",easing:"swing",begin:function(){},end:function(){},scrollChange:function(e){}})}$(window).load(function(){$(".preloader").fadeOut(1e3),init()}),$(document).ready(function(){owlCarousel(),magnificPopup()}),window.scrollReveal=new scrollReveal,$(".modal").on("hide.bs.modal",function(){$(".portfolio-item figure figcaption").removeClass("active"),$(".portfolio-item figure .info").removeClass("active")}),$(window).scroll(function(){var e=$(window).scrollTop();500>=e&&$(".nav li.current").removeClass("current")}),$(function(){var e=document.createElement("input");"placeholder"in e==0&&$("[placeholder]").focus(function(){var e=$(this);e.val()==e.attr("placeholder")&&(e.val("").removeClass("placeholder"),e.hasClass("password")&&(e.removeClass("password"),this.type="password"))}).blur(function(){var e=$(this);(""==e.val()||e.val()==e.attr("placeholder"))&&("password"==this.type&&(e.addClass("password"),this.type="text"),e.addClass("placeholder").val(e.attr("placeholder")))}).blur().parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var e=$(this);e.val()==e.attr("placeholder")&&e.val("")})})}),$("#contact-form").validator().on("submit",function(e){if(e.isDefaultPrevented())$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry it seems that there is a problem.</strong><br>Please check your entries and try again."),$("#success > .alert-danger").append("</div>");else{e.preventDefault();var t=$("#contact-form"),a=$(t).serialize();$.ajax({type:"POST",url:"https://formspree.io/haizop@gmail.com",data:a,dataType:"json"}).done(function(e){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contact-form").trigger("reset")}).error(function(e){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry, it seems that there is a problem with our email server.</strong><br>Please email us directly at <a href='mailto:connect@nextmove.is?Subject=Message_Me'>connect@nextmove.is</a>."),$("#success > .alert-danger").append("</div>")}),$('a[data-toggle="tab"]').click(function(e){e.preventDefault(),$(this).tab("show")})}}),$("#name").focus(function(){$("#success").html("")});