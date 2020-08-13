/* level button animation */

$(document).ready(function(){
    $("p").animate({bottom: "-30px"}, 300);
});

$(document).ready(function(){
     $("#cadetButton").animate({bottom: '0px'}, 550);
     $("#pilotButton").animate({bottom: '0px'}, 800);
     $("#commanderButton").animate({bottom: '0px'}, 1000);
     $("#hiScoreButton").animate({bottom: '0px'}, 1200);
});



  function showHiScores(){
      
     var x = document.getElementById("hiScoreOverlay");
      if(x.style.display === ""){
         x.style.display = "block";
      } else if (x.style.display === "none") {
          x.style.display = "block";
      } else{
          x.style.display = "none";
      }

  }


