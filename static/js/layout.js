function reload(n) {
	try {
		if(localStorage.getItem('showSidebar') == 'false') {
			document.querySelector('td.task-td').style.display = 'none';
			document.querySelector('col#tasks').style.display = 'none';
		} else {
			document.querySelector('td.task-td').style.display = '';
			document.querySelector('col#tasks').style.display = '';
		}
	} catch(e) {}
		
	try {
		if(localStorage.getItem('disableNoticeAlert') == 'true') {
			document.querySelector('p.alert#noticeAlert').style.display = 'none';
		} else {
			document.querySelector('p.alert#noticeAlert').style.display = '';
		}
	} catch(e) {}
		
	try {
		if(localStorage.getItem('disableUserDocumentDiscussAlert') == 'true') {
			document.querySelector('p.alert#userDocumentDiscussAlert').style.display = 'none';
		} else {
			document.querySelector('p.alert#userDocumentDiscussAlert').style.display = '';
		}
	} catch(e) {}
		
	try {
		if(localStorage.getItem('foldRecentCard') == 'true') {
			document.querySelector('dd#recentChangesBody').style.display = 'none';
		} else {
			document.querySelector('dd#recentChangesBody').style.display = '';
		}
	} catch(e) {}
		
	try {
		if(localStorage.getItem('foldDetailsCard') == 'true') {
			document.querySelector('dd#detailsBody').style.display = 'none';
		} else {
			document.querySelector('dd#detailsBody').style.display = '';
		}
	} catch(e) {}
		
	try {
		if(localStorage.getItem('scenicBtn') == 'true') {
			document.querySelector('span#scenicBtnStyle').outerHTML = '<style id=scenicBtnStyle>' + document.querySelector('span#scenicBtnStyle').innerHTML + '</style>';
		} else {
			document.querySelector('style#scenicBtnStyle').outerHTML = '<span id=scenicBtnStyle style="display: none;">' + document.querySelector('style#scenicBtnStyle').innerHTML + '</span>';
		}
	} catch(e) {}
	
	if(!n) {
		var theme = localStorage.getItem('theme');
		if(theme && theme != 'marbleui') {
			document.querySelector('link[rel="stylesheet"][href="/skins/marble/css/marbleui.css"]').remove();
			var link = document.createElement('link');
			link.setAttribute('rel', 'stylesheet');
			link.setAttribute('href', '/skins/marble/css/' + theme + '.css');
			document.querySelector('head').appendChild(link);
		}
	}
}

reload();

window.reload = reload;

window.onload = function() {
	reload(1);
};

$(function() {
	$('.alert button.close').click(function() {
		$(this).parent().remove();
	});
	
	$('ul.nav-tabs li.nav-item a.nav-link').click(function() {
		$(this).parent().parent().next().find('> div.tab-pane').hide();
		$($(this).attr('href')).show();
		$(this).parent().parent().find('> li.nav-item > a.nav-link.active').attr('class', 'nav-link');
		$(this).attr('class', 'nav-link active');
	});
	
	$('nav .dropdown-toggle').click(function() {
		$(this).next().slideToggle('fast');
	});
	
	$('table.body td.task-td dl.tasks > dt').click(function() {
		$(this).next().slideToggle('fast');
	});
	
	var recentCard = $('table.body td.task-td dl.tasks.recent-changes > dd');
		
	$.ajax({
		url: '/sidebar.json',
		dataType: 'json',
		success: function(data) {
			var ret = '';
			var i;
			for(i=0; i<9; i++) {
				var item = data[i];
				if(!item) break;
				var date = new Date(item.date * 1000);
				var time = date.getHours() + ':' + date.getMinutes();
				ret += '<li>[' + time + '] <a href="/w/' + encodeURIComponent(item.document) + '">' + item.document + '</a></li>';
			}
			
			recentCard.html('<ul class=wiki-list>' + ret + '</ul>');
		}, error: function() {
			recentCard.html('<li>갱신 실패!</li>');
		}
	});
});
