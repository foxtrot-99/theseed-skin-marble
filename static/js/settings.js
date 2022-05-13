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
	
	$('#scenicBtn').click(function() {
		localStorage.setItem('scenicBtn', $(this).is(':checked') + '');
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
	$('#scenicBtn').prop('checked', localStorage.getItem('scenicBtn') == 'true' ? true : false);
	$('#foldDetailsCard').prop('checked', localStorage.getItem('foldDetailsCard') == 'true' ? true : false);
	$('#foldRecentCard').prop('checked', localStorage.getItem('foldRecentCard') == 'true' ? true : false);
	$('#disableNoticeAlert').prop('checked', localStorage.getItem('disableNoticeAlert') == 'true' ? true : false);
	$('#disableUserDocumentDiscussAlert').prop('checked', localStorage.getItem('disableUserDocumentDiscussAlert') == 'true' ? true : false);
});
