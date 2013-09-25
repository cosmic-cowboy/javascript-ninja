 // リスト3-2 宣言スコープの観察

define(function() {

	function listing_3_2(){

		function assertOuter(title){
			assert(true, title);
			assert(typeof outer === 'function', "outer()はスコープ内にある");
			assert(typeof inner === 'function', "inner()はスコープ内にある");
			assert(typeof a ==='number', "aはスコープ内にある");
			assert(typeof b ==='number', "bはスコープ内にある");
			assert(typeof c ==='number', "cはスコープ内にある");
		}

		assertOuter.call(this, "|====== OUTERの前 =====|");

		function outer () {
			var that = this;
			assertOuter.call(that, "|====== OUTERの中, aの宣言の前 =====|");

			var a = 1;
			assertOuter.call(that, "|====== OUTERの中, aの宣言の後 =====|");

			function inner(){}
			assertOuter.call(this, "|====== OUTERの中, innerの宣言の後 =====|");

			var b = 2;
			assertOuter.call(this, "|====== OUTERの中, bの宣言の後 =====|");

			if(a === 1){
				var c = 3;
			}
			assertOuter.call(this, "|====== OUTERの中, cの宣言の後 =====|");
		}
		outer();

		assertOuter.call(this, "|====== OUTERの後 =====|");


		}
	return listing_3_2;
});
