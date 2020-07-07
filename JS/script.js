class gameLevel {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("timer-countdown");
    this.ticker = document.getElementById("flips-made");
    //this.audioController = new AudioController();
  }
  startGame() { //this function gets called everytime the game is started
    this.cardToCheck = null; // this property checks to see if the card is already flipped
    this.totalClicks = 0; //will reset the clicks to 0 at the start of game
    this.timeRemaining = this.totalTime; //We want the time to reset when the game starts
    this.matchedCards = []; // all matched cards that we get will go here and we will also use this to check if we have a victory
    this.busy = true;

    this.shuffleCards();
  }

  flipCard(card){
    if(this.canFlipCard(card)){
        //this.audioController.flip(); ----- add the sounds please.
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add("visible");
    }
  }

  shuffleCards(){ /* using the fisher/Yates shuffling algorithm
                            1) this algorithm takes an array and works through it backwards from [-1] to [0]
                            2) for each iteration, it creates a random INT which is >= 0 and <= to i
                            3) it then exchanges the random number created with the position of the one being iterated, And thats the shuffle! */

        for(let i = this.cardsArray.length -1; i > 0; i--){
                let randomIndex = Math.floor(Math.random() * (i+1));
                this.cardsArray[randomIndex].style.order = i;
                this.cardsArray[i].style.order = randomIndex;
        }
  }


  canFlipCard(){
      return true; //for now will return true to check if I can flip the card.
      //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
  }

}


function ready() {
  let overlays = Array.from(document.getElementsByClassName("status-overlay"));
  let cards = Array.from(document.getElementsByClassName("game-card"));
  let game = new gameLevel(100,cards);

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      game.startGame();
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
  ready();
}

//new gameLevel(100,cards);
