(function()
{

if(window.jQuery
|| /\.(?:gif|jpe?g|png|asmx)\b/i.test(location.href)
) return;

var jQuery, $, $d, $p, $j, an = {
	version: '${AN_VERSION}',
	storageMode: null,
	plugins: {}
};