 // リスト3-3 関数呼び出しとメソッド呼び出しの違い

define(function() {

    function listing_3_3(){

        function creep () {
            return this;
        }

        assert(creep() === window, "Creeping in the window");

        var sneak = creep;
        assert(sneak() === window, "Sneaking in the window");

        var ninja1 = {
            skulk : creep
        };
        assert(ninja1.skulk() === ninja1, "The 1nd ninja is skulking");

        var ninja2 = {
            skulk : creep
        };
        assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");

    }
    return listing_3_3;
});
