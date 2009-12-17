jQuery = $ = window.jQuery.noConflict();

$d = $(document);

if($.browser.mozilla && typeof unsafeWindow != 'undefined') jQuery.ready();