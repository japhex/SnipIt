// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
	snipit.defaults();
});

var snipit = {
	defaults: function(){
		snipit.ajaxifyBitch();
		snipit.colourPagesAnTing();
	},
	ajaxifyBitch: function(){
		var trigger = $('.ajaxify-bitch'),
				urlToAjax;
	
		trigger.click(function(){
			urlToAjax = $(this).attr('href') + ' #retrieved-data';
			snipit.popMeUp(urlToAjax);
			return false;
		});
	},
	popMeUp: function(ajaxUrl){
		var popup = $('<div id="popup"></div>'),
				overlay = $('<div id="overlay"></div>');

		popup.load(ajaxUrl, function(data){
			popup.appendTo(overlay);
			overlay.appendTo('body').fadeIn();
			prettyPrint();
		});
		// To get rid of window
		overlay.click(function(){
			overlay.fadeOut(500,function(){
				$(this).remove();
			});
		});
		$(document).keydown(function(e){
			if (e.keyCode === 27){
				overlay.fadeOut(500, function(){
					$(this).remove();
				});
			}
		});
	},
	colourPagesAnTing: function(){
		var pages = $('.pages').find('h3'),
				page;
	
		for(i=0;i < pages.length;i++){
			var page = $(pages[i]),
					pageName = $(pages[i]).text();

			if (pageName.indexOf('.js') != -1){
				if (pageName.indexOf('.jsp') != -1){
					page.addClass('code-jsp');
				}
				else{
					page.addClass('code-js');
				}
			}
			if (pageName.indexOf('.html') != -1){page.addClass('code-html');}
			if (pageName.indexOf('.css') != -1){page.addClass('code-css');}
			if (pageName.indexOf('.tag') != -1){page.addClass('code-tag');}
		}
	}
}

// Rails Utilities

//*-- Function ot add additional form fields for pages to snippets form
function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g");
  $(link).parent().before(content.replace(regexp, new_id));
}