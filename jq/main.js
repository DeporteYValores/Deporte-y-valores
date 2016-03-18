jQuery(document).ready(function() {
    var i = 0;
      $("#core-button").click(function(){
          if ($(this).css('left') == "0px") {
            $(this).animate({left: '20%'});
            $(this).html('&#10005');
          }else{
            $(this).animate({left: '0%'});
            $(this).html('&#9776');
          }
      });

      var myVar;

      $("#titulo").mouseenter(function() {
        myVar = setInterval(function(){
          myTimer()
        }, 300);
      }).mouseleave(function() {
        $("#titulo").css("font-family","moonbeam");
        myStopFunction();
      });

      function myTimer() {
          if (i%15==0) {
            $("#titulo").css("font-family","moonbeam");
          }else if(i%15==1){
            $("#titulo").css("font-family","segoe-script");
          }else if(i%15==2){
            $("#titulo").css("font-family","Georgia");
          }else if(i%15==3){
            $("#titulo").css("font-family","Palatino");
          }else if(i%15==4){
            $("#titulo").css("font-family","Times");
          }else if(i%15==5){
            $("#titulo").css("font-family","Arial");
          }else if(i%15==6){
            $("#titulo").css("font-family","Gadget");
          }else if(i%15==7){
            $("#titulo").css("font-family","cursive");
          }else if(i%15==8){
            $("#titulo").css("font-family","Lucida Grande");
          }else if(i%15==9){
            $("#titulo").css("font-family","Tahoma");
          }else if(i%15==10){
            $("#titulo").css("font-family","Helvetica");
          }else if(i%15==11){
            $("#titulo").css("font-family","Courier");
          }else if(i%15==12){
            $("#titulo").css("font-family","Geneva");
          }else if(i%15==13){
            $("#titulo").css("font-family","Monaco");
          }else{
            $("#titulo").css("font-family","rowdyheavy");
          }
          i++;
      }


      function myStopFunction() {
          clearInterval(myVar);
      }

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var maxScrollTop = $(document).height();
        var perc = (scroll/maxScrollTop)*100;
        if (perc>75) {
          $("body").scrollTop($("#nosotros").offset().top);
        }else if (perc>50) {
          $("body").scrollTop($("#depyval").offset().top);
        }else if (perc>25) {
          $("body").scrollTop($("#school").offset().top);
        }else{
          $("body").scrollTop($("#home").offset().top);
        }
      });

});
