(function($)
{
	function Job(data)
	{
		for(var prop in data) {
			this[prop] = data[prop];
		}
	}

	$.each(['options', 'db'], function(i, type)
	{
		Job.prototype[type] = function(name, val)
		{
			if(name && !this.plugin[type][name]) $.error($.format('{0} does not have {1} {2}!', this.plugin.desc, type, name));

			var
			storage = $.storage(val === undefined),
			profile = storage.profiles[storage.curProfile],
			access = this.plugin[type][name].access,
			data;

			if(val === undefined) {
				data = $.extend({}, profile.publicData[type], profile.privateData[this.plugin.id][this.pageCode][type]);
				return name === undefined ? data : data[name];
			}

			data = access === 'public'
			? $.make(profile, 'publicData', type)
			: access === 'protected'
				? $.make(profile, 'privateData', this.plugin.id, type);
				: $.make(profile, 'privateData', this.plugin.id, this.pageCode, type);

			if(val === null) {
				delete data[name];
			}
			else {
				data[name] = val;
			}

			$.storage(storage);
		};
	});

	var
	jobGroups,
	constructJobGroups = function()
	{
		jobGroups = {};

		for(var i=1; i<=9; ++i) {
			jobGroups[i] = [];
		}

		var
		pageCode = $.pageCode(),
		storage = $.storage(true),
		settings = storage.profiles[storage.curProfile].privateData;

		$.each(an.plugins, function(pluginId, plugin)
		{
			var pluginPageCode = $.bitmasks(pageCode, plugin.page);
			if(!pluginPageCode) return;

			var status = settings[pluginId][pluginPageCode].status;
			if(status === 0) return;

			plugin.id = pluginId;

			$.each(plugin.queue, function(i, fnSet)
			{
				if(!fnSet.page || fnSet.page & pageCode) {
					jobGroups[fnSet.priority || 4].push(new Job({ plugin: plugin, fnSet: fnSet, pageCode: pluginPageCode }));
				}
			});
		});
	};

	$.prioritize = function(priority, type, fn)
	{
		jobGroups[priority].push(new Job($.extend({}, an.__curJob, { fnSet: { type: type, fn: fn } })));
	};

	$(window).load(function()
	{
		an.__isWindowLoaded = true;
		$d.trigger('winload');
	});

	$.fn.an = function()
	{
		$j = this;

		if(!jobGroups) constructJobGroups();

		function runEach(i, job)
		{
			an.__curJob = job
			job.fnSet.fn.call(job, job);
		}

		for(var i=1; i<=3; ++i) {
			$.each(jobGroups[i], runEach);
		}

		$d.trigger('p3end');

		$(function()
		{
			for(var i=4; i<=6; ++i) {
				$.each(jobGroups[i], runEach);
			}

			$d.trigger('p6end');
		});

		$d.one('winload', function()
		{
			for(var i=7; i<=9; ++i) {
				$.each(jobGroups[i], runEach);
			}

			$d.trigger('p9end');

			an.__isFirstRan = true;

			for(var i=1; i<=9; ++i) {
				jobGroups[i] = $.grep(jobGroups[i], function(job)
				{
					return job.fnSet.type > 1;
				});
			}
		});

		if(an.__isWindowLoaded) $d.trigger('winload');

		return $j;
	};
})(jQuery);