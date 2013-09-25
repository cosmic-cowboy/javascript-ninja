 // リスト3-6 呼び出しコンテクストの設定を示すfor-each関数の構築

define(function() {

  function listing_3_6(){

      function forEach (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback.call(list[i], i);
        }
      }

      var weapons = ['shuriken', 'katana', 'nunchucks'];

      forEach(
        weapons,
        function (index) {
          assert(this.toString() === weapons[index], weapons[index] + "は期待した値を得た");
        }
      );

  }
  return listing_3_6;
});
