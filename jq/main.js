jQuery(document).ready(function() {

      $("#core-button").click(function(){
          if ($(this).css('left') == "0px") {
            $(this).animate({left: '20%'});
            $(this).html('&#10005');
          }else{
            $(this).animate({left: '0%'});
            $(this).html('&#9776');
          }
      });

      $('#titulo').hover(function(){
            $(this).css("font-family", "moonbeam");
            setTimeout(function(){
            }, 1000);
            $(this).css('font-family','segoe-script');
            setTimeout(function(){
            }, 1000);
            $(this).css('font-family','rowdyheavy');
            setTimeout(function(){
            }, 1000);
      },function(){
        $(this).css('font-family')='moonbeam';
      });
});
