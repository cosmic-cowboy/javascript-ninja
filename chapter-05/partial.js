// 部分適用
// 引数群をあらかじめ定義する
// 関数が実行されたとき、それも含めて実行する
Function.prototype.partial = function() {
	// 関数を指す
	var fn = this;
	// 事前に設定する引数を指す
	var args = Array.prototype.slice.call(arguments);
	return function  () {
		var arg = 0;
		for (var i = 0; i < args.length && arg < arguments.length; i++) {
			// 部分適用の時点でundefinedと設定されたところに穴埋め式に引数を適用していく
			if ( args[i] === undefined){
				args[i] = arguments[arg++];
			}
		}
		return fn.apply(this, args);
	};
};