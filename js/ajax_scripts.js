// JavaScript Document
(function($) {
    "use strict";

	$(document).on("change", "input:radio[name='wc_rb_select_service']", function(e) {
		$('.wc_rb_mb_customer').removeClass('displayNone');

		var pos = $(".wc_rb_mb_customer").offset().top;
		$('body, html').animate({scrollTop: pos});
	});

	$(document).on("click", "[dt_type_id]", function(e) {
		e.preventDefault();

		var $theTypeId = $(this).attr('dt_type_id');
		$(this).parent().closest('ul').find('.selected').removeClass("selected");
		$(this).addClass('selected');
		
		$('#wcrb_thetype_id').val($theTypeId);

		$("ul.manufacture_list").removeClass('displayNone');
		$('div.selectionnotice').addClass('displayNone');

		var pos = $("#wc_rb_mb_manufactures").offset().top;
		$('body, html').animate({scrollTop: pos});
	});

	function add_device_extra_field($theDeviceId) {
		if ( $theDeviceId != '' ) {
			var $sync_service_with_device = $('#sync_services_with_devices').val();
			// .log($theDeviceId);
			$.ajax({
				type: 'POST',
				data: {
					'action': 'rb_add_booking_device_row',
					'theDeviceId': $theDeviceId,
					'syncServiceWithDevice': $sync_service_with_device
				},
				url: ajax_obj.ajax_url,
				dataType: 'json',
				
				beforeSend: function() {
					$('.service-message').html("<div class='loader'></div>");
				},
				success: function(response) {
					//console.log(response);
					var message 		= response.message;
					$('.selected_devices').append(message);
				}
			});
		}
	}

	$(document).on("click", "[dt_device_id]", function(e) {
		e.preventDefault();

		var $theDeviceId = $(this).attr('dt_device_id');
		
		$(this).parent().closest('ul').find('.selected').removeClass("selected");
		$(this).addClass('selected');
		
		$('.wc_rb_mb_services').removeClass('displayNone');

		var $wc_rb_mb_device_submit = $("#wc_rb_mb_device_submit").val();

		//var pos = $(".service-message").offset().top;
		//$('body, html').animate({scrollTop: pos});
		add_device_extra_field($theDeviceId);
		
		$.ajax({
			type: 'POST',
			data: {
				'action': 'wc_rb_update_services_list',
				'theDeviceId': $theDeviceId, 
				'theBrandNonce': $wc_rb_mb_device_submit 
			},
			url: ajax_obj.ajax_url,
			dataType: 'json',

			beforeSend: function() {
				$('.service-message').html("<div class='loader'></div>");
			},
			success: function(response) {
				//console.log(response);
				var message 		= response.message;
				$('#wcrb_thedevice_id').val($theDeviceId);
				$('.service-message').html('<div data-closable="slide-out-right">'+message+'</div>');
			}
		});
	});

	$(document).on("click", "[dt_warranty_device]", function(e) {
		e.preventDefault();

		var $theDeviceId = $(this).attr('dt_warranty_device');

		$(this).parent().closest('ul').find('.selected').removeClass("selected");
		$(this).addClass('selected');

		$('.wc_rb_mb_customer').removeClass('displayNone');
		var $wc_rb_mb_device_submit = $("#wc_rb_mb_device_submit").val();

		add_device_extra_field($theDeviceId);

		$('#wcrb_thedevice_id').val($theDeviceId);
	});

	$(document).on("click", "[dt_device_g_id]", function(e) {
		e.preventDefault();

		var $theDeviceId = $(this).attr('dt_device_g_id');
		
		$(this).parent().closest('ul').find('.selected').removeClass("selected");
		$(this).addClass('selected');
		
		$('.wc_rb_mb_services').removeClass('displayNone');

		var $wc_rb_mb_device_submit = $("#wc_rb_mb_device_submit").val();

		//var pos = $(".service-message").offset().top;
		//$('body, html').animate({scrollTop: pos});
		add_device_extra_field($theDeviceId);

		$.ajax({
			type: 'POST',
			data: {
				'action': 'wc_rb_update_services_list_grouped',
				'theDeviceId': $theDeviceId, 
				'theBrandNonce': $wc_rb_mb_device_submit 
			},
			url: ajax_obj.ajax_url,
			dataType: 'json',

			beforeSend: function() {
				$('.service-message').html("<div class='loader'></div>");
			},
			success: function(response) {
				//console.log(response);
				var message 		= response.message;
				$('#wcrb_thedevice_id').val($theDeviceId);
				$('.service-message').html('<div data-closable="slide-out-right">'+message+'</div>');
				$(document).foundation();
			}
		});
	});

	$(document).ready(function() {
		setTimeout(function() {
			var wcrb_thebrand_id = $('#wcrb_thebrand_id').val();
			if ( wcrb_thebrand_id != '' ) {
				$('[dt_brand_id="'+wcrb_thebrand_id+'"]').trigger('click');
			}
		},10);
	});

	$(document).on("click", '[dt_brand_id]', function(e) {
		e.preventDefault();

		var $theBrandId = $(this).attr('dt_brand_id');
		$(this).parent().closest('ul').find('.selected').removeClass("selected");
		$(this).addClass('selected');
		
		var $wc_rb_mb_device_submit = $("#wc_rb_mb_device_submit").val();
		
		var pos = $(".device-message").offset().top-250;
		$('body, html').animate({scrollTop: pos});

		$.ajax({
			type: 'POST',
			data: {
				'action': 'wc_rb_mb_update_devices',
				'theBrandId': $theBrandId, 
				'theBrandNonce': $wc_rb_mb_device_submit 
			},
			url: ajax_obj.ajax_url,
			dataType: 'json',

			beforeSend: function() {
				$('.device-message').html("<div class='loader'></div>");
			},
			success: function(response) {
				//console.log(response);
				var message 		= response.message;
				$('#wcrb_thebrand_id').val($theBrandId);
				$('.device-message').html('<div data-closable="slide-out-right">'+message+'</div>');
			}
		});
	});

	$(document).on("click", 'body [dt_brand_g_id]', function(e) {
		e.preventDefault();

		var $theTypeId = $('#wcrb_thetype_id').val();
		var $theBrandId = $(this).attr('dt_brand_g_id');
		$(this).parent().closest('ul').find('.selected').removeClass("selected");
		$(this).addClass('selected');
		
		$(".wc_rb_mb_device").removeClass('displayNone');

		var $wc_rb_mb_device_submit = $("#wc_rb_mb_device_submit").val();
		
		var $theTypeWarranty = 'NO';
		$theTypeWarranty = $(this).attr('dt_device_warranty');

		var pos = $(".device-message").offset().top-200;
		$('body, html').animate({scrollTop: pos});

		$.ajax({
			type: 'POST',
			data: {
				'action': 'wc_rb_mb_update_devices',
				'theBrandId': $theBrandId, 
				'theTypeId': $theTypeId,
				'typeWarranty' : $theTypeWarranty,
				'theBrandNonce': $wc_rb_mb_device_submit 
			},
			url: ajax_obj.ajax_url,
			dataType: 'json',

			beforeSend: function() {
				$('.device-message').html("<div class='loader'></div>");
			},
			success: function(response) {
				//console.log(response);
				var message 		= response.message;
				$('#wcrb_thebrand_id').val($theBrandId);
				$('.device-message').html('<div data-closable="slide-out-right">'+message+'</div>');
			}
		});
	});

	$(document).on('change', 'input[name="reciepetAttachment"]', function(e) {
		e.preventDefault();

		var fd = new FormData();
		var file = $(document).find('input[type="file"]');

		var individual_file = file[0].files[0];
		fd.append("file", individual_file);
		fd.append('action', 'wc_upload_file_ajax');  

		$.ajax({
			type: 'POST',
			url: ajax_obj.ajax_url,
			data: fd,
			contentType: false,
			processData: false,
			dataType: 'json',
			success: function(response) {
				var message = response;
				$('#jobAttachments').append(message);
				$("#jobAttachments").removeClass('displayNone');
				//console.log( response );
			}
		});
	});

	$(document).on('submit', "body form[name='wc_rb_device_form']", function(e) {
		e.preventDefault();
		var $form 	= $(this);
		var formData = $form.serialize();
		var $perform_act = "wc_rb_submit_booking_form";

		$.ajax({
			type: 'POST',
			data: formData + '&action='+$perform_act,
			url: ajax_obj.ajax_url,
			async: true,
			mimeTypes:"multipart/form-data",
			dataType: 'json',
			beforeSend: function() {
				$('.booking_message').html("<div class='loader'></div>");
			},
			success: function(response) {
				//console.log(response);
				var message = response.message;
				var success = response.success;
				
				if(success == "YES" ) {
					$('.final_customer_message').html('<div class="callout success" data-closable="slide-out-right">'+message+'</div>');
				} else {
					$('.booking_message').html('<div class="callout success" data-closable="slide-out-right">'+message+'</div>');
				}
			}
		});
	});

	$( document ).ready(function(e) {
		if( $('#auto_submit_status').length ) {
			$( "form[data-async]" ).submit();
		}
	});  

	$("form[data-async]").on("submit",function(e) {
	  	e.preventDefault();

	  	var $form 	= $(this);
	  	var $target = $($form.attr('data-target'));

	  	var formData = $form.serialize();
		var $input = $(this).find("input[name=form_type]");

		if($input.val() == "wc_request_quote_form") {
			var $perform_act = "wc_cr_submit_quote_form";	
		} else if($input.val() == "wc_create_new_job_form") {
			var $perform_act = "wc_cr_create_new_job";
		} else {
			var $perform_act = "wc_cmp_rep_check_order_status";	
		}

		$.ajax({
			type: $form.attr('method'),
			data: formData + '&action='+$perform_act,
			url: ajax_obj.ajax_url,
			dataType: 'json',

			beforeSend: function() {
				$('.form-message').html("<div class='spinner is-active'>Loading ...</div>");
			},
			success: function(response) {
				//console.log(response);
				var message 		= response.message;
				var success 		= response.success;
				var reset_select2 	= response.reset_select2;

				$('.form-message').html('<div class="callout success" data-closable="slide-out-right">'+message+'</div>');
				
				if(success == "YES") {
					$form.trigger("reset");	
				
					if(reset_select2 == "YES") {
						$("#customer, #rep_devices").val(null).trigger('change');
					}
				}
			}
		});
	});
})(jQuery); //jQuery main function ends strict Mode on