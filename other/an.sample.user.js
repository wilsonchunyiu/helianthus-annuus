/*
    Copyright (C) 2008  Sample

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// ==UserScript==
// @name Helianthus.Annuus 3: Sample Module
// @namespace http://code.google.com/p/helianthus-annuus/
// @description by Sample
// @include http://forum*.hkgolden.com/*
// @run-at document-start
// ==/UserScript==

(function()
{

// for FF & Chrome which run scripts in a sandbox wrapper
var window = (typeof unsafeWindow != 'undefined') ? unsafeWindow : (typeof contentWindow != 'undefined') ? contentWindow : this;
// define AN or refer to the existing one
var AN = window.AN || (window.AN = { temp: [], mod: {} });

if(AN.initialized) return; // for Chrome which interestingly executes user scripts even when injecting xhr HTML into an element

// push the function in the temp array for Kernel to execute it later
AN.temp.push(function()
{
	// these are for FF & Chrome again
	var JSON = window.JSON;
	var $, jQuery = $ = window.jQuery;
	
	// you can optionally add a new function type
	// @param arg1 type id
	// @param arg2 type description
	AN.util.addFnType('sample', 'Sample Module');

	// module name
	AN.mod['Sample Module'] =
	{
		// Module version
		ver: '1.0.0',
		// the main module object
		fn: {

// you can use any id, as long as being unique in the current module and being a legal object property name
'Sample_Function_1':
{ 
	// @com required
	// function description
	desc: 'Sample 1',
	// @com required
	// page no. uses binary flags, pls refer to kernel.js or the API doc page
	// for default status you can choose: 'comp' for compulsory, 'disabled' for disabled, true for default on, false for default off
	//
	// In the following example, we have:
	// 4(topics.aspx) + 16(newmessages.aspx) = 20 which is default on
	// 8(search.aspx) which is default off
	// so in settings there will be 2 seperated switches for (topics.aspx & newmessages.aspx) and (search.aspx)
	page: { 20: true, 8: false },
	// @com required
	// for type no. pls refer to kernel.js or the API doc page
	type: 2,
	// @com optional
	// defer the function execution(s), value can be 1-5, the larger the latter
	defer: 1,
	// @com optional
	// provides option settings for users
	options:
	{
		// variable name
		// note: use a unique name as it is in the Kernel scope (not in module scope)
		sampleOption:
		{
			// @com required 
			// option description
			desc: 'Sample Option',
			// @com required 
			// default value
			// for checkbox use true/false
			// for text use any string
			// for select use array
			defaultValue: [1,2,3,4,5],
			// @com required 
			// you can use checkbox for boolean, text for string, select for fixed choices
			type: 'select'
		},
		// you can add as many options as you can
		sampleOption2: { desc: 'Sample Option 2', defaultValue: true, type: 'checkbox' }
	},
	// @com optional
	// @param jDoc the jQuery object of the current scope, the context is 99% document.body
	// @param oFn the current function object, in this example it is Sample_Function_1
	// this function is called once only which is at DOMLoad
	once: function(jDoc, oFn)
	{
		// exactly the same as oFn
		this;
		
		// you can choose not to use jQuery by doing the following, where you get a NODE object, which is 99% document.body
		jDoc[0];
	},
	// @com optional
	// @param jDoc the jQuery object of the current scope, the context could be any NODE(s)
	// @param oFn the current function object, in this example it is Sample_Function_1
	// this function is called everytime when AN.modFn.execMods() is called, ex. when an AJAX operation is done
	infinite: function(jDoc, oFn)
	{
		// exactly the same as oFn
		this;
		
		// you can choose not to use jQuery by doing the following, where you get a NODE object, which may NOT be document.body
		jDoc[0];
	}
},

/***** a demostration of real life example (not using jQuery) ****/
'Real_Life_Example_Not_Using_jQuery':
{
	desc: 'Alternate Row Background Color',
	page: { 4: true }, // topics.aspx only
	type: 'sample', // here we use our custom type added at line 46
	options:
	{
		sample_rowColor: // as unique as possible
		{
			desc: 'Row color',
			defaultValue: '#CCC',
			type: 'text' // a color type will be added so that users can use a colorpicker instead
		},
		sample_rowColor2: { desc: 'Row color 2', defaultValue: '#AAA', type: 'text' }
	},
	infinite: function(jDoc) // this time we use infinite since ajax functions may replace the topic table
	{
		var rowColor = AN.util.getOptions('sample_rowColor'); // retrieve the color option value
		var rowColor2 = AN.util.getOptions('sample_rowColor2');
		
		var len = jDoc.topics().length; // the jDoc.topics() return an array of objects, where each object represents a topic row and has properties about it
		for(var i=0; i<len; i++)
		{
			var color = (i % 2 == 0) ? rowColor : rowColor2; // alternate colors
			var row = jDoc.topics()[i].jThis[0]; // the jThis property is the TR element of that row
			
			var cells = row.getElementsByTagName('td'); // we cant set background-color on tr so we have to set it on each cell
			for(var j=0; j<cells.length; j++)
			{
				cells[j].style.backgroundColor = color;
			}
		}
		
		/* // actually there is a more efficient method, find out more at style.js
		
		// $.spritf() is a jQuery plugin included in lib.js
		// AN.util.addStyle let you write css as usual
		AN.util.addStyle($.sprintf('\
		td[style*="background-color: #FFFFFF"],td[style*="background-color: #ffffff"],td[style*="background-color: rgb(255, 255, 255)"] { background-color: %(sample_rowColor)s !important; } \
		td[style*="background-color: #F8F8F8"],td[style*="background-color: #f8f8f8"],td[style*="background-color: rgb(248, 248, 248)"] { background-color: %(sample_rowColor2)s !important; } \
		',
		AN.util.getOptions() // get an object of all options, ie. AN.util.getOptions().sample_rowColor == AN.util.getOptions('sample_rowColor')
		));
		
		*/
	}
}

}}; // end mod

}); // end push

})(); // end anonymous