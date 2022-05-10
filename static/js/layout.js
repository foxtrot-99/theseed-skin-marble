$(function() {
	$('div.alert button.close').click(function() {
		$(this).parent().remove();
	});
	
	$('ul.nav-tabs li.nav-item a.nav-link').click(function() {
		$(this).parent().parent().next().find('> div.tab-pane').hide();
		$($(this).attr('href')).show();
		$(this).parent().parent().find('> li.nav-item > a.nav-link.active').attr('class', 'nav-link');
		$(this).attr('class', 'nav-link active');
	});
	
	$('nav a.dropdown-toggle').click(function() {
		$(this).next().slideToggle('fast');
	});
});