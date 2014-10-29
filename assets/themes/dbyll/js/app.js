$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var tcontacts = $('#contact-list-stertiary');
	var contact_list = $('#contact-list');
	
	scontacts.hide();
	
	contact_list.mouseenter(function(){ scontacts.fadeIn(); });
	contact_list.mouseenter(function(){ tcontacts.fadeIn(); });	
	contact_list.mouseleave(function(){ scontacts.fadeOut(); });
	contact_list.mouseleave(function(){ tcontacts.fadeOut(); });

});
