/*
Author       : Theme-Family
Template Name: Khaliq - Wind & Solar Energy Landing Page TemplateTemplate
Version      : 1.0
*/
(function($) {
    "use strict";
	
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.atf-status').fadeOut();
			$('.atf-preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/	
		
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		
		/*START MENU JS*/
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/
        
		//**================= Sticky =====================**//
  
		 // Back to top button 
		$(window).on('scroll', function () { 
			var scrolled = $(window).scrollTop();
			if (scrolled > 400) $('.back-to-top').addClass('active');
			if (scrolled < 400) $('.back-to-top').removeClass('active');
		});


		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 50);
		});
		
		/* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
			// Handle click on toggle search button
			$('.header-search').on('click', function() {
				$('.header-search, .header-search-form').toggleClass('search-open');
				return false;
			});

			

			
	/*--------------------------------------------------------------
		Counter
      --------------------------------------------------------------*/	
			 $('.counter-value').each(function(){
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				},{
					duration: 3500,
					easing: 'swing',
					step: function (now){
						$(this).text(Math.ceil(now));
					}
				});
			});
			
		/*Start course Design*/
			$('#service-slider').owlCarousel({
				margin:3,
				autoplay:false,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					992:{
						items:4
					}
				}
			})

		/*END course Design*/
		
			/*Start gallery Design*/
			$('#gallery-slider').owlCarousel({
				margin:5,
				autoplay:true,
				items: 4,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					992:{
						items:3
					}
				}
			})

		/*END course Design*/
			
			
		/*Start Testimonials LOGO*/
			$('#atf-testimonial-slider').owlCarousel({
				margin:5,
				autoplay:false,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					992:{
						items:2
					}
				}
			})

		/*END Testimonials LOGO*/
			
		
		
		/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/
			

		/* --------------------------------------------------------
					   LightCase jQuery Active
		--------------------------------------------------------- */
					$('a[data-rel^=lightcase]').lightcase({
						transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
						swipe: true,
						maxWidth: 1170,
						maxHeight: 600,
					});
		
		/* --------------------------------------------------------
             Mailchamp
        --------------------------------------------------------- */

		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
		/*START ANIMATION JS*/
		  AOS.init();
		/*END ANIMATION JS*/
		
		
})(jQuery);