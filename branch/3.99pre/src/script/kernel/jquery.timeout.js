(function($)
{
	var cache = {};

	function proxy(fn, args)
	{
		return function()
		{
			fn.apply(null, args);
		};
	}

	$.timeout = function(id, delay, fn)
	{
		if(cache[id]) {
			clearTimeout(cache[id].timer);
		}

		if(delay === undefined) {
			return cache[id].fn;
		}
		else if(delay === null) {
			delete cache[id];
		}
		else {
			if($.isFunction(delay)) {
				fn = delay;
				delay = 0;
			}

			var isFn = fn && $.isFunction(fn);
			if(!isFn) fn = cache[id].fn;

			cache[id] = {
				fn: fn,
				timer: setTimeout(proxy(fn, $.slice(arguments, isFn ? 3 : 2)), delay)
			};
		}
	};
})(jQuery);