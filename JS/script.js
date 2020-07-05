if(document.readyState === "loading"){
    document.addEventListener("DOMContertLoaded", ready());
} else{
    ready();
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName("status-overlay"));
    let cards = Array.from(document.getElementsByClassName("game-card"));

    overlays.forEach(overlay => {
            overlay.addEventListener("click", () =>{
                overlay.classList.remove("visible");
            });
    });
}