class gameLevel{
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = getElementsByClassName("timer-countdown")
        
    }
}

function startGame() {
    this.cardToCheck = null; 
}


function ready(){
    let overlays = Array.from(document.getElementsByClassName("status-overlay"));
    let cards = Array.from(document.getElementsByClassName("game-card"));

    overlays.forEach(overlay => {
            overlay.addEventListener("click", () =>{
                overlay.classList.remove("visible");
            });
    });

    cards.forEach(card =>{
        card.addEventListener("click", () =>{
            // game.flipCard(card);
        });
    });
}

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ready());
} else{
    ready();
}
