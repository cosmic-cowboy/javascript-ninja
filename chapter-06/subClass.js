// 即時関数
(function () {
	var initializing = false;
	// 関数シリアライズの確認
	// 関数を受け取り、ソーステキストを返す
	var superPattern = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;

	// ObjectにsubClassメソッドを追加
	// propertiesには追加するオブジェクト（プロパティ群のハッシュ）
	Object.subClass = function (properties) {
		// プロトタイプを_superに
		var _super = this.prototype;

		initializing = true;
		// スーパークラスのプロパティをプロトタイプに代入する
		var proto = new this();
		initializing = false;

		for(var name in properties){
			// サブクラスとスーパークラスの同名のプロパティがあり、
			// サブクラスのプロパティ、スーパークラスのプロパティが関数の場合、
			// プロパティをコピーする以外の処理が必要になる
			// オーバーライドしたプロパティが使用でき、
			// _super()を使えば、スーパークラスのプロパティも使用できる
			proto[name] =
				typeof properties[name] === "function" &&
				typeof _super[name] === "function" &&
				superPattern.test(properties[name]) ?

				(function(name, fn){
					return function(){
						var tmp = this._super;
						this._super = _super[name];
						var ret = fn.apply(this,arguments);
						this._super = tmp;
						return ret;
					};
				})(name, properties[name]) :

				properties[name];
		}

		// コンストラクタが呼ばれた時はinitだけを実行する
		function Class(){
			if(!initializing && this.init){
				this.init.apply(this, arguments);
			}
		}

		Class.prototype = proto;

		Class.constructor = Class;

		Class.subClass = arguments.callee;

		return Class;
	}
})();