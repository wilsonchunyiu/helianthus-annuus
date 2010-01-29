$.extend(an.plugins, {

'Kernel_Initializer':
{
	desc: '初始化',
	page: { 65535: 'comp' },
	type: 1,
	queue: [{
		fn: function()
		{
			if($d.pageName() === 'view') $('select[name=page]').val($.pageNo()); // for FF3 where select box does not reset

			$.ss('a > img { border: 0; }');

			$.ss('.TransparentGrayBackground, .TransparentGrayBackground + * { z-index: 10; }');

			$('script').empty().each(function()
			{
				this.removeAttribute('src');
			});
		}
	}]
},

'11f1c5ca-9455-4f8e-baa7-054b42d9a2c4':
{
	desc: '自動轉向正確頁面',
	page: { 65534: true },
	type: 4,
	queue: [{
		fn: function()
		{
			if(location.pathname !== '/login.aspx' && document.referrer.indexOf('/login.aspx') > 0) {
				location.replace('/topics.aspx?type=BW');
			}
			else {
				var ajaxPageNo = $.bbq.getState('page');

				if(ajaxPageNo && ajaxPageNo !== $.pageNo()) {
					location.replace($.uri({ querySet: { page: ajaxPageNo }, fragmentSet: { page: null } }));
				}
			}
		}
	}]
},

'a599dafa-b550-4b28-921a-019c72f481e5':
{
	desc: '除錯模式',
	page: { 65535: false },
	type: 1,
	queue: [{
		fn: function()
		{
			an.debugMode = true;

			$.run('addButton', '移除儲存資料', function()
			{
				if(confirm('確定移除儲存資料?')) {
					$.storage(null);
					location.reload();
				}
			});

			$.run('addButton', '顯示儲存資料', function()
			{
				if(!$('#an-savedsettings').length) {
					$.run('box', 'an-savedsettings', '儲存資料', null, 'max');
					$.ss('#an-savedsettings { padding: 0 2em; } #an-savedsettings code { display: block; white-space: pre; margin: 1em 0; font-family: Consolas; }');
					$('#an-savedsettings').append('<code></code>');
				}
				$('#an-savedsettings code').text($.storage().replace(/{[^{]*},?/g, function(sMatch){ return sMatch.replace(/,/g, ',\n'); }));
				$.run('gray', true, 'an-savedsettings');
			});

			$.run('addButton', '顯示功能列表', function()
			{
				if(!$('#an-functionlist').length) {
					$.run('box', 'an-functionlist', '功能列表', 600, 400);
					$.ss('#an-functionlist textarea { margin: 10px; width: 570px; height: 370px; font-family: Consolas; }');
					$('#an-functionlist').append('<textarea readonly="readonly"></textarea>');

					var sList = '';
					$.each(an.mod, function(sMod)
					{
						if(!this.fn) return;

						sList += '\r' + sMod + ':\r\r';

						$.each(this.fn, function()
						{
							sList += ' * ' + this.desc + '\r';
						});
					});

					$('#an-functionlist textarea').text(sList);
				}
				$.run('gray', true, 'an-functionlist');
			});
		}
	}]
},

'12c98ebc-873c-4636-a11a-2c4c6ce7d4c2':
{
	desc: '設定內核樣式',
	priority: 1,
	page: { 65535: 'comp' },
	type: 2,
	options:
	{
		sUIFontColor: { desc: 'UI主顏色', defaultValue: '#808080', type: 'text', global: true },
		sUIHoverColor: { desc: 'UI連結懸浮顏色', defaultValue: '#9ACD32', type: 'text', global: true },
		sMainFontColor: { desc: '論壇主要字體顏色', defaultValue: '#000000', type: 'text', global: true },
		sMainBorderColor: { desc: '論壇主要邊框顏色', defaultValue: '#000000', type: 'text', global: true },
		sSecBorderColor: { desc: '論壇次要邊框顏色', defaultValue: '#CCCCCC', type: 'text', global: true },
		sMainBgColor: { desc: '論壇主要背景顏色', defaultValue: '#FFFFFF', type: 'text', global: true },
		sSecBgColor: { desc: '論壇次要背景顏色', defaultValue: '#F8F8F8', type: 'text', global: true },
		sMainHeaderFontColor: { desc: '論壇標題字體顏色', defaultValue: '#FFFFFF', type: 'text', global: true },
		sMainHeaderBgColor: { desc: '論壇標題背景顏色', defaultValue: '#336699', type: 'text', global: true }
	},
	queue: [{
		fn: function()
		{
			$.ss('\
			#an, #an legend { color: {0.sMainFontColor}; } \
			\
			.an-forum, .an-forum textarea { background-color: {0.sSecBgColor}; } \
			.an-forum input[type="text"], .an-forum select { background-color: {0.sMainBgColor}; border: 1px solid {0.sMainBorderColor}; } \
			.an-forum input[type="text"]:disabled, .an-forum select:disabled { color: graytext; } \
			.an-forum, .an-forum h4, .an-forum div, .an-forum td, .an-forum dl, .an-forum dt, .an-forum dd, .an-forum ul, .an-forum li, .an-forum a, .an-forum fieldset, .an-forum hr { border: 0 solid {0.sMainBorderColor}; } \
			.an-forum * { color: {0.sMainFontColor}; } \
			.an-forum a { text-decoration: none; } \
			.an-forum a:hover { text-decoration: underline; } \
			.an-forum table { width: 100%; border-collapse: collapse; } \
			.an-forum td { line-height: 1.5em; padding: 0 0.2em; border-width: 1px; } \
			.an-forum-header[class], .an-forum thead td { color: {0.sMainHeaderFontColor}; background-color: {0.sMainHeaderBgColor}; } \
			.an-forum-header[class] { border-bottom-width: 1px; } \
			\
			.an-content-note, .an-content-line, .an-content-box { color: {0.sUIFontColor}; } \
			.an-content-note { margin-right: 2px; cursor: default; } \
			.an-content-line { font-size: 0.625em; font-style: italic; } \
			.an-content-box { display: inline-block; border: 1px solid; padding: 1px 2px; } \
			a.an-content-line, a.an-content-box { text-decoration: none !important; } \
			a.an-content-line:hover, a.an-content-box:hover { color: {0.sUIHoverColor}; } \
			',
			$.options()
			);
		}
	}]
},

'78af3c29-9bf2-47ee-80bf-a3575b711c73':
{
	desc: '自動檢查更新',
	page: { 4: true },
	type: 1,
	options:
	{
		bAlsoCheckBeta: { desc: '同時檢查Beta版本', defaultValue: false, type: 'checkbox' },
		nCheckUpdateInterval: { desc: '檢查更新間隔(小時)', defaultValue: 1, type: 'text' }
	},
	queue: [{
		fn: function()
		{
			var
			interval = $.options('nCheckUpdateInterval') || 1,
			lastChecked = $.db('nLastChecked') || 0;

			if($.time() - lastChecked < 36e5 * (interval < 1 ? 1 : interval)) return;
			$.db('nLastChecked', $.time());

			$.ajax({
				url: 'http://helianthus-annuus.googlecode.com/svn/other/an.version.js',
				dataType: 'jsonp',
				jsonpCallback: 'an-autoupdate',
				success: function(lastest)
				{
					var
					type = $.options('bAlsoCheckBeta') ? 'beta' : 'stable',
					current = an.version.split('.');
					lastest = lastest[type].split('.');

					for(var i=0; i<lastest.length; ++i) {
						if(current[i] !== lastest[i]) {
							if(current[i] < lastest[i] && confirm('發現新版本!\n按確定進行更新')) {
								$.each([ ['MAXTHON 2.0', 'm2f'], ['Gecko', 'xpi'], ['Chrome/4', 'crx'] ], function(j, set)
								{
									if(navigator.userAgent.indexOf(set[0]) !== -1) {
										window.open($.format('http://helianthus-annuus.googlecode.com/svn/dist/v3/{0}/annuus.{1}', type, set[1]));
										return false;
									}
								});
								window.open('http://code.google.com/p/helianthus-annuus/wiki/Changelog', '_blank');
							}
							break;
						}
					}
				}
			});
		}
	}]
},

'c217bf55-6d44-42d1-8fc2-2cd1662d604a':
{
	desc: '轉頁後再次運行功能',
	page: { 64: true },
	type: 1,
	queue: [{
		fn: function()
		{
			window.Profile_ShowGoogleAds = $('.main_table1').an;
		}
	}]
},

'722b69f8-b80d-4b0e-b608-87946e00cfdc':
{
	desc: '強制鎖定闊度',
	page: { 65534: 'comp' },
	type: 3,
	queue: [{
		fn: function()
		{
			var css = 'body { word-wrap: break-word; }';

			if($(document).pageName() === 'view') {
				css += '\
				.repliers, .repliers_right { table-layout: fixed; } \
				.repliers_right > tbody > tr:first-child > td { overflow-x: hidden; } \
				';
			}

			$.ss(css);
		}
	}]
}

});