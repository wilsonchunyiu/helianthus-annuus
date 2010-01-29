(function($)
{
	var
	fnGroups,
	constructFnGroups = function()
	{
		fnGroups = {};

		for(var i=1; i<=9; ++i) {
			fnGroups[i] = [];
		}

		var
		pageCode = $.pageCode(),
		settings = $.__storage(false).privateData;

		$.each(an.plugins, function(pluginId, plugin)
		{
			var code = $.bitmasks(pageCode, plugin.page);
			if(!code) return;

			var status = settings[pluginId][code].status;
			if(status === 0) return;

			plugin.id = pluginId;

			$.each(plugin.queue, function(i, fnClass)
			{
				if(!fnClass.page || fnClass.page & pageCode) {
					fnGroups[fnClass.priority || 4].push({ plugin: plugin, fnClass: fnClass, pageCode: code });
				}
			});
		});
	};

	$.prioritize = function(priority, type, fn)
	{
		fnGroups[priority].push($.extend({}, an.__$pFnSet, { fnClass: { type: type, fn: fn } }));
	};

	$(window).load(function()
	{
		an.__isWindowLoaded = true;
		$d.trigger('winload');
	});

	$.fn.an = function()
	{
		$j = this;

		if(!fnGroups) constructFnGroups();

		function runEach(i, fnSet)
		{
			$p = fnSet.plugin;
			an.__$pFnSet = fnSet;
			fnSet.fnClass.fn.call(fnSet.plugin);
		}

		for(var i=1; i<=3; ++i) {
			$.each(fnGroups[i], runEach);
		}

		$d.trigger('p3end');

		$(function()
		{
			for(var i=4; i<=6; ++i) {
				$.each(fnGroups[i], runEach);
			}

			$d.trigger('p6end');
		});

		$d.one('winload', function()
		{
			for(var i=7; i<=9; ++i) {
				$.each(fnGroups[i], runEach);
			}

			if(!an.__isFirstRan) {
				an.__isFirstRan = true;

				for(var i=1; i<=9; ++i) {
					fnGroups[i] = $.grep(fnGroups[i], function(fnSet)
					{
						return fnSet.fnClass.type > 1;
					});
				}
			}
		});

		if(an.__isWindowLoaded) $d.trigger('winload');

		return $j;
	};
})(jQuery);