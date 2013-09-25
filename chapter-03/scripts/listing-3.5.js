//  リスト3-5 apply/callメソッドで呼び出しコンテクストを提供する

define(function() {

  function listing_3_5(){

      function juggle () {
        var result = 0;
        this.values = "";
        for (var i = 0; i < arguments.length; i++) {
          result += arguments[i];
          this.values = (this.values + " " + arguments[i]);
        }
        this.result = result;
      }

      var ninja1 = {};
      var ninja2 = {};

      juggle.apply(ninja1, [1,2,3,4]);
      juggle.call(ninja2, 5,6,7,8);

      assert(ninja1.result === 10, "juggled via apply / add items : " + ninja1.values + "/ result : " + ninja1.result);
      assert(ninja2.result === 26, "juggled via call  / add items : " + ninja2.values + "/ result : " + ninja2.result);

  }
  return listing_3_5;
});
