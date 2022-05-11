$(function() {
	$('#sidebarToggle').click(function() {
		localStorage.setItem('showSidebar', $(this).is(':checked') + '');
		reload();
	});
	
	$('#themeSelect').change(function() {
		localStorage.removeItem('theme');
		localStorage.setItem('theme', $(this).val());
	});
	
	$('#themeSelect').val(localStorage.getItem('theme') || 'marbleui');
});
