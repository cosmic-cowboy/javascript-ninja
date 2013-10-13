// リスト5-11 カリー化関数
// 最初の引数とあとの引数をまとめる

Function.prototype.curry = function() {
	// 関数を指す
	var fn = this;
	// 事前に設定する引数を指す
	var args = Array.prototype.slice.call(arguments);
	return function(){
		return fn.apply(this, args.concat(
			Array.prototype.slice.call(arguments)));

	};
};