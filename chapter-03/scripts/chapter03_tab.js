define(['jquery'], function($){

	var namespace = 'activateChapter03Tab';

	$[namespace] = {
		
		//activation
		activate: function (args) {

			//options
			var options = $.extend({}, {
					insertAfter: undefined,		//insert the "orderButtons" after this element (ie: '#here')
					callback: undefined		//function to call when an element is clicked (ie: function(){update();})
				}, args);
	
			function init () {
				//create tabs
				createTabsStyle();
				
			}
			
			//select box style
			function createTabsStyle() {

				var choice = $(	'<ul id="communityChoices" class="clearfix">' +
									'<li class="choiceList"><a href="#" data-type="chapter03_01">chapter03_01</a></li>' +
									'<li class="choiceList"><a href="#" data-type="chapter03_02">chapter03_02</a></li>' +
									'<li class="choiceList"><a href="#" data-type="chapter03_03">chapter03_03</a></li>' +
									'<li class="choiceList"><a href="#" data-type="chapter03_04">chapter03_04</a></li>' +
									'<li class="choiceList"><a href="#" data-type="chapter03_05">chapter03_05</a></li>' +
									'<li class="choiceList"><a href="#" data-type="chapter03_06">chapter03_06</a></li>' +
								'</ul>');
					
				// クリックイベント
				choice.delegate("li a", "click", function(event){
					var tabName = $(this).attr("data-type");
					window.location.hash = "page=" + tabName;
					return false;
				});
				
				// ハッシュ切り替え
				$(window).bind("hashchange", function(){
					var hashTabName = location.hash.split("=")[1] || choice.find('li:first a').attr("data-type");
					choice.trigger('change.tabs', hashTabName);
				});
				
				
				// カスタムイベント監視
				choice.bind('change.tabs', function(event, tabName){
					var $selected = choice.find('li a.selected');
					$selected.removeClass("selected");
					choice.find('li a[data-type="' + tabName + '"]').addClass("selected");
					options.callback(tabName);
				});
				
				//insert everything into the page
				$(options.insertAfter).after(choice);
				

			}
			
			init();
		},
		
	};
});
