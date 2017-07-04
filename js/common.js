$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function() {
			carouselService();
		}, 200);
	});



	$('.carousel-services').owlCarousel({
	  loop: true, 
		nav: true,
		smartSpeed: 1000,
		responsiveClass: true,
		
		navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
		dots: false,
    responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	$('.carousel-services-content').equalHeights();

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this);
			var thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	//$('select').selectize();

		//E-mail Ajax Send
	$("form.collback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	function onResize() {
		$('.carousel-services-content').equalheights();
	}onResize();
	window.onresize = function() {
		onResize()
	};
});
