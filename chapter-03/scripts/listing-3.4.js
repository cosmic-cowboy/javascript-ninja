 // リスト3-4 コンストラクタを使って、共有オブジェクトをセット

define(function() {

  function listing_3_4(){

      function Ninja(){
        this.skulk = function () { return this; };
      }

      var ninja1 = new Ninja();
      var ninja2 = new Ninja();

      assert(ninja1.skulk() === ninja1, "The 1nd ninja is skulking");
      assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");


  }
  return listing_3_4;
});
