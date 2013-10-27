(function(){

	var cache = {};

	this.tmpl = function tmpl(str, data){

		var fn = !/\W/.test(str) ?
			cache[str] = cache[str] ||
			tmpl(document.getElementById(str).innerHTML) : 

			new Function("obj",
				"var p = [], print = function(){p.push.apply(p, arguments);};" +
				"with(obj){p.push('" +
		
				// 改行記号、タブ記号をすべて削除する
				// <%をタブ記号に変換する
				// %>を探し、$1\rを代入する
				str
					.replace(/[\r\t\n]/g, "")
					.split("<%").join("\t")
					.replace(/((^|%>)[^\t]*)'/g, "$1\r")
					.replace(/\t=(.*?)%>/g, "',$1,'")
					.split("\t").join("');")
					.split("%>").join("p.push('")
					.split("\r").join("\\'")
				+ "');}return p.join('');");

	    return data ? fn(data) : fn;

	};

})();