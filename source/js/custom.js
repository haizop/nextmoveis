/* -- Full Screen Viewport Container
   ---------------------------- */

$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
    init();
});

$(document).ready(function() {
  owlCarousel();
  magnificPopup();
});



/* --- initialize functions on window load here -------------- */

function init() {
  tooltips();
  onePageScroll();
  scrollAnchor();
  toggleContactForm();
}



/* --- owlCarousel ------------- */

function owlCarousel() {
  $("#team-roster").owlCarousel({
    lazyLoad : true,
    theme: "owl-theme-main",
    itemsCustom: [
      [100,1],
      [479,1],
      [768,3],
      [880,3]
    ]
  });
}



/* --- Tooltips ------------------- */

function tooltips() {
  $('.tooltips').tooltip();
}




/* --- Show/Hide Contact Form ------------------- */

function toggleContactForm() {
  $('.contact-button').click(function() {
    $(this).toggleClass('active');
    $('.contact-form').slideToggle(300);
  });
}




/* --- scrollReveal ------------------- */

window.scrollReveal = new scrollReveal();

/* --- modals------------------- */
// neccesary to clear active classes on isotope gallery when modals close

$('.modal').on('hide.bs.modal', function() {
  $('.portfolio-item figure figcaption').removeClass('active');
  $('.portfolio-item figure .info').removeClass('active');
})

/* --- magnific popup ------------------- */

function magnificPopup() {

  // Gallery
  $('.popup-gallery').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-fade',
    disableOn: 700,
    removalDelay: 160,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    },
    callbacks: {
      close: function() {
        $('.portfolio-item figure figcaption').removeClass('active');
        $('.portfolio-item figure .info').removeClass('active');
      }
    }
  });

  $('.portfolio-item figcaption a.preview').click(function(){
    $(this).parent().addClass('active');
    $(this).parent().siblings('.info').addClass('active');
  });

  // Zoom Gallery

  $('.zoom-modal').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('i') ? openerElement : openerElement.find('i');
      }
    }

  });

  $('.popup-modal').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
    modal: true
	});

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
}



/* --- Isotope ------------------- */

function isotope() {

  var $container = $('#portfolio');

  // init

  $container.imagesLoaded( function(){
    $container.isotope({
      // options
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    var relayout = setInterval(function(){
      $container.isotope( 'layout' );
    }, 1000);
    setTimeout(function(){
      clearInterval(relayout);
    }, 3000);
  });

  $( window ).resize(function() {
    $container.isotope( 'layout' );
    setTimeout(function(){
      $container.isotope( 'layout' );
    }, 1500);
  });

  // filter items on button click
  $('#filters').on( 'click', 'button', function( event ) {
    var filterValue = $(this).attr('data-filter-value');
    $container.isotope({ filter: filterValue });
    $('#filters button').removeClass('active');
    $(this).addClass('active');
 });

}


/* --- Scroll to Anchor ------------------- */

function scrollAnchor() {

  // scroll to specific anchor
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 650);
        return false;
      }
    }
  });

}


function onePageScroll() {
  $('.nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 650,
    scrollOffset: 30,
    scrollThreshold: 0.5,
    filter: ':not(.login, .signup, .external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
  });
}


$(window).scroll(function() {
  var windowpos = $(window).scrollTop() ;

  if (windowpos <= 500) {
    $('.nav li.current').removeClass('current');
  }
});




//Placeholder fixed for Internet Explorer
$(function() {
	var input = document.createElement("input");
	if(('placeholder' in input)==false) {
		$('[placeholder]').focus(function() {
			var i = $(this);
			if(i.val() == i.attr('placeholder')) {
				i.val('').removeClass('placeholder');
				if(i.hasClass('password')) {
					i.removeClass('password');
					this.type='password';
				}
			}
		}).blur(function() {
			var i = $(this);
			if(i.val() == '' || i.val() == i.attr('placeholder')) {
				if(this.type=='password') {
					i.addClass('password');
					this.type='text';
				}
				i.addClass('placeholder').val(i.attr('placeholder'));
			}
		}).blur().parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var i = $(this);
				if(i.val() == i.attr('placeholder'))
					i.val('');
			})
		});
	}
	});


// contact form

$('#contact-form').validator().on('submit', function (event) {
  if (event.isDefaultPrevented()) {
    $('#success').html("<div class='alert alert-danger'>");
    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      .append( "</button>");
    $('#success > .alert-danger').append("<strong>Sorry it seems that there is a problem.</strong><br>Please check your entries and try again.");
    $('#success > .alert-danger').append('</div>');
  } else {
    event.preventDefault();
    var form = $('#contact-form');
    var formData = $(form).serialize();

    $.ajax({
      type: 'POST',
      url: 'https://formspree.io/haizop@gmail.com',
      data: formData,
      dataType: "json"
    })
    .done(function(response) {
      // Success message
      // console.log(response)
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append( "</button>");
      $('#success > .alert-success')
        .append("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success')
        .append('</div>');
      //clear all fields
      $('#contact-form').trigger("reset");
    })
    .error(function(data) {
      // Fail message
      // console.log(data.responseText)
      $('#success').html("<div class='alert alert-danger'>");
      $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append( "</button>");
      $('#success > .alert-danger').append("<strong>Sorry, it seems that there is a problem with our email server.</strong><br>Please email us directly at <a href='mailto:connect@nextmove.is?Subject=Message_Me'>connect@nextmove.is</a>.");
      $('#success > .alert-danger').append('</div>');
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  }
})

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
