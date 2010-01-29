(function($)
{
	var
	storage, defaultData, storageData,
	constructStorage = function()
	{
		storage = {
			'Flash': {
				get: function()
				{
					var data = an.__lso.get('an', 'an');
					return data && JSON.parse(data);
				},
				set: function(val)
				{
					an.__lso.set('an', 'an', JSON.stringify(val).replace(/\\/g, '\\\\'));
				},
				remove: function()
				{
					an.__lso.remove('an', 'an');
				}
			},

			'DOM': {
				get: function()
				{
					return window.localStorage.an && JSON.parse(localStorage.an);
				},
				set: function(val)
				{
					window.localStorage['an'] = JSON.stringify(val);
				},
				remove: function()
				{
					window.localStorage.removeItem('an');
				}
			}
		}[an.storageMode];
	},
	constructDefaultData = function()
	{
		defaultData = {
			publicData: {},
			privateData: {}
		};

		$.each(an.plugins, function(pluginId, plugin)
		{
			defaultData.privateData[pluginId] = {};

			$.each(plugin.page, function(pageCode, isDefaultOn)
			{
				defaultData.privateData[pluginId][pageCode] = { status: isDefaultOn ? 1 : 0 };
			});

			if(plugin.options) {
				var options = {};

				$.each(plugin.options, function(optionId, optionSet)
				{
					(optionSet.global ? $.make(defaultData.publicData, 'options') : options)[optionId] = optionSet.defaultValue;
				});

				$.each(defaultData.privateData[pluginId], function(pageCode, dataSet)
				{
					dataSet.options = $.extend({}, options);
				});
			}
		});
	},
	constructStorageData = function()
	{
		storageData = storage.get() || {
			curProfile: 'default',
			profiles: {
				'default': {
					name: '預設'
				}
			}
		};

		if(!defaultData) constructDefaultData();

		for(var profileId in storageData.profiles) {
			storageData.profiles[profileId] = $.extend(true, {}, defaultData, storageData.profiles[profileId]);
		}
	}

	$.__storage = function(option)
	{
		if(!storage) constructStorage();

		if(option === null) { // remove storage
			storageData = null;
			return storage.remove();
		}

		if(!storageData) constructStorageData();

		if(option === undefined) { // get storage
			return storageData;
		}
		if(option === true) { // update storage
			storage.set(storageData);
		}
		else { // get profile
			return storageData.profiles[option === false ? storageData.curProfile : option];
		}
	};

	$.each(['options', 'db'], function(i, type)
	{
		$[type] = function(publicOnly, name, val)
		{
			var
			profile = $.__storage(false),
			publicData = profile.publicData,
			privateData = profile.privateData[$p.id][an.__$pFnSet.pageCode],
			isSpecific = typeof publicOnly === 'boolean';

			if(!isSpecific) {
				val = name;
				name = publicOnly;
				publicOnly = false;
			}

			var data = publicOnly ? publicData : privateData;

			if(name === undefined || val === undefined) { // get all || get target
				data = isSpecific ? data[type] : $.extend({}, publicData[type], privateData[type]);
				return (name === undefined) ? data : data[name];
			}

			if(val === null) { // remove target
				if($.dig(data, type, name) === undefined) return;
				delete data[type][name];
			}
			else { // update target
				$.make(data, type)[name] = val;
			}

			$.__storage(true);
		};
	});
})(jQuery);