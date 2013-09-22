// すべてのモダンブラウザで使えるシンプルなロギングメソッド
// ただ使うことはほとんどなさそう。
function log () {
	try{
		// 一般的なロギング
		console.log.apply(console, arguments);
	} catch(error1){

		try{
			// Operaのロギング（旧Operaに対応するなら）
			opera.postError.apply(opera, arguments);
		} catch(error2){
			// 最後はalertを利用
			alert(Array.prototype.join.call(arguments, " "));
		}

	}
}