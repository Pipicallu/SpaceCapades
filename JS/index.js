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

/* Hi-Score function (used in on-click event check line 99)*/


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

  



  /*----------------Firebase--------------------------*/

let firebaseConfig = {
    apiKey: "AIzaSyDISc4XEXHikCPEeFrtR2ItnrJDqLRkv_I",
    authDomain: "highscores-6ce17.firebaseapp.com",
    databaseURL: "https://highscores-6ce17.firebaseio.com",
    projectId: "highscores-6ce17",
    storageBucket: "highscores-6ce17.appspot.com",
    messagingSenderId: "305834552779",
    appId: "1:305834552779:web:6dbb29ca7da2227307da4e",
    measurementId: "G-XFBMC4636C"
  };

firebase.initializeApp(firebaseConfig);

firebase.analytics();

const db = firebase.firestore();

// getting data 
const scoreList = document.querySelector("#hiScoresBody");

function renderScore(doc){
    let tr = document.createElement("tr");
    let hash = document.createElement("th");
    let playerName = document.createElement("td");
    let timeLeft = document.createElement("td");
    let flipCount = document.createElement("td");

    tr.setAttribute("data-id", doc.id);
    hash.setAttribute("scope","row");
    hash.textContent = "#";
    playerName.textContent = doc.data().Name;
    timeLeft.textContent = doc.data().Time;
    flipCount.textContent = doc.data().Flips;

    tr.appendChild(hash);
    tr.appendChild(playerName);
    tr.appendChild(timeLeft);
    tr.appendChild(flipCount);
    scoreList.appendChild(tr);
}


    db.collection("Hi-Scores").orderBy("Time", "desc").limit(10).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if(scoreList != null){
            renderScore(doc);
            }
        });
  });

  
const form = document.querySelector("#inputHiScore");

//saving data 
if(form != null) {
form.addEventListener("submit", (eventObj) => {
    // prevents page refresh
    eventObj.preventDefault();
    db.collection("Hi-Scores").add({
        Name: form.name.value,
        Time: `${parseInt(document.getElementById("timer-countDown").innerHTML)}s`,
        Flips: parseInt(document.getElementById("flips-made").innerHTML)
    });
     form.reset();
});
}


  