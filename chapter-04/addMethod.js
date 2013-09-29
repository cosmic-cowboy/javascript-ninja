// chapter04：リスト4-15
// 関数を多重定義するためのアプローチ

function addMethod (object, name, fn) {

	// ひとつ前の関数を保存する
	// 引数0から引数を増やしていけば、
	// oldは最後に引数0に行き当たるので、
	// それもありかなという気がするが、
	// このoldの概念は結構難しい
	// oldがデフォルトの関数ということになると思うので、
	// そうなると、一番最初に必ずデフォルトの値を入れましょうというお約束が必要になる
	var old = object[name];
	// 新しい無名関数を作成する
	object[name] = function () {
		if(fn.length === arguments.length){
			return fn.apply(this, arguments);
		} else if(typeof old === 'function'){
			return old.apply(this, arguments);
		}
	};
}