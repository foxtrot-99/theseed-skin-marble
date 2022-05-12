$(function() {
	$('#sidebarToggle').click(function() {
		localStorage.setItem('showSidebar', $(this).is(':checked') + '');
		reload();
	});
	
	$('#disableNoticeAlert').click(function() {
		localStorage.setItem('disableNoticeAlert', $(this).is(':checked') + '');
		reload();
	});
	
	$('#disableUserDocumentDiscussAlert').click(function() {
		localStorage.setItem('disableUserDocumentDiscussAlert', $(this).is(':checked') + '');
		reload();
	});
	
	$('#foldDetailsCard').click(function() {
		localStorage.setItem('foldDetailsCard', $(this).is(':checked') + '');
		reload();
	});
	
	$('#foldRecentCard').click(function() {
		localStorage.setItem('foldRecentCard', $(this).is(':checked') + '');
		reload();
	});
	
	$('#themeSelect').change(function() {
		localStorage.removeItem('theme');
		localStorage.setItem('theme', $(this).val());
	});
	
	$('#themeSelect').val(localStorage.getItem('theme') || 'marbleui');
	$('#sidebarToggle').prop('checked', localStorage.getItem('showSidebar') == 'false' ? false : true);
});
