(function($){"use strict";jQuery(document).ready(function(){$('.sub-menu').each(function(){$(this).parents('li').addClass('has-child').find('> a').append('<span class="arrow"></span>');});$('.main-menu .arrow').on('click',function(e){e.preventDefault();$(this).parents('li').find('> .sub-menu').slideToggle('fast');});$('.main-menu .mega-menu-wrap').on('hover',function(){$(this).parents('.header-menu').addClass('open-mega');},function(){$(this).parents('.header-menu').removeClass('open-mega');});$('.mobile-menu').on('click',function(){$(this).parent().toggleClass('open');$(this).parents('body').toggleClass('menu-open');});$('html').on('click',function(e){if($(e.target).closest('.main-menu.open').length===0){$('.main-menu').removeClass('open');$('body').removeClass('menu-open');}});$('.site-header').sticky({topSpacing:0});$("#top").on("click",function(){$("html, body").animate({scrollTop:0},"slow");return false;});$("#top").on("click",function(event){event.stopPropagation();var idTo=$(this).attr("data-atr");var Position=$("[id='"+idTo+"']").offset();$("html, body").animate({scrollTop:Position},"slow");return false;});$(window).on("scroll",function(){if($(this).scrollTop()>1000){$("#top").fadeIn();}else{$("#top").fadeOut();}});$('.counter-number').counterUp({delay:10});$("a[data-gal^='prettyPhoto']").prettyPhoto({hook:'data-gal',animation_speed:'normal',theme:'light_square',slideshow:3000,social_tools:false});$('.tabs').each(function(){var _this=$(this);var id_first=$(_this).find('.tab-heading ul li a.active').attr('href');$(_this).find('.tab-container .tab-content').hide();$(_this).find(id_first).show();$(_this).find('.tab-heading li a').on('click',function(e){e.preventDefault();$(this).parents('.tab-heading').find('li a').not(this).removeClass('active');$(this).addClass('active');var id=$(this).attr('href');$(_this).find('.tab-container .tab-content').hide();$(this).parents('.tabs').find('.tab-content').not(this).hide().find('.product-item').removeClass('animated fadeInUp');$(this).parents('.tabs').find('.tab-container').find(id).show().find('.product-item').addClass('animated fadeInUp');});});$(".home-slider .owl-carousel").owlCarousel({items:1,loop:true,margin:0,nav:false,dots:true});$(' .home-slider .owl-carousel .item ').height($(window).height());$(".testimonials .owl-carousel").owlCarousel({loop:true,margin:0,nav:false,dots:true,items:1,mouseDrag:false,touchDrag:false});$(".our-team-slider .owl-carousel").owlCarousel({loop:true,margin:30,nav:false,dots:true,responsive:{0:{items:1},490:{items:2},768:{items:3},991:{items:4}}});$(".testimonials-home2 .owl-carousel").owlCarousel({loop:true,margin:30,nav:false,dots:false,responsive:{0:{items:1},414:{items:1},767:{items:2},992:{items:3}}});$(".recommended-products .owl-carousel").owlCarousel({loop:true,margin:25,nav:false,dots:false,responsive:{0:{items:1},768:{items:2},992:{items:3}}});var preview_carousel=$('.product-detail .images .p-preview.owl-carousel');var thumb_carousel=$('.product-detail .images .p-thumb-dt');preview_carousel.owlCarousel({items:1,dots:false,nav:false});preview_carousel.on('changed.owl.carousel',function(event){var index_owl=event.item.index;thumb_carousel.find('li').removeClass('active');thumb_carousel.find('li').eq(index_owl).addClass('active');});thumb_carousel.find('li a').each(function(index){$(this).on('click',function(e){e.preventDefault();preview_carousel.trigger('to.owl.carousel',[index,300,true]);});});$('.selectbox select').each(function(){var $this=$(this),numberOfOptions=$(this).children('option').length;$this.addClass('s-hidden');$this.wrap('<div class="select"></div>');$this.after('<div class="styledSelect"></div>');var $styledSelect=$this.next('div.styledSelect');$styledSelect.text($this.children('option').eq(0).text());var $list=$('<ul />',{'class':'options'}).insertAfter($styledSelect);for(var i=0;i<numberOfOptions;i++){$('<li />',{text:$this.children('option').eq(i).text(),rel:$this.children('option').eq(i).val()}).appendTo($list);}
var $listItems=$list.children('li');$styledSelect.on('click',function(e){e.stopPropagation();$('div.styledSelect.active').each(function(){$(this).removeClass('active').next('ul.options').hide();});$(this).toggleClass('active').next('ul.options').toggle();});$listItems.on('click',function(e){e.stopPropagation();$styledSelect.text($(this).text()).removeClass('active');$this.val($(this).attr('rel'));$list.hide();});$(document).on('click',function(){$styledSelect.removeClass('active');$list.hide();});});$('.list-item-checkout .remove-item').on('click',function(e){e.preventDefault();$(this).parents('tr').fadeOut('400');});$(window).on('load',function(){$('body').addClass('loaded');setTimeout(function(){$('#pageloader').fadeOut('slow');},1000);});});})(jQuery);