require([
  'jquery',
  '../scripts/listing-3.1',
  '../scripts/listing-3.2',
  '../scripts/listing-3.3',
  '../scripts/listing-3.4',
  '../scripts/listing-3.5',
  '../scripts/listing-3.6',
  '../scripts/chapter03_tab'
  ], function(
  $,
  listing_3_1,
  listing_3_2,
  listing_3_3,
  listing_3_4,
  listing_3_5,
  listing_3_6
  ){
    $('#tab').html("タブ");
    $('#result').html("結果");
    $.activateChapter03Tab.activate({
      insertAfter: '#tab',
      callback: function(tabName){
        showDetail(tabName);
      }
    });

    function showDetail (tabName) {
      switch(tabName){
        case "chapter03_02":
          listing_3_2();
        break;
        case "chapter03_03":
          listing_3_3();
        break;
        case "chapter03_04":
          listing_3_4();
        break;
        case "chapter03_05":
          listing_3_5();
        break;
        case "chapter03_06":
          listing_3_6();
        break;
        default:
          listing_3_1();
        break;
      }
    }
  }
);