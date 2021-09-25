import { board } from './board.js';
import { updateApple } from "./apple.js";
import { playerUpdate, gameOver } from "./player.js";
import { createSpikes } from "./spike.js";

let playerPosition = 12;
let max = 24;
const startButton = document.getElementById("start");
let model1 = document.getElementsByClassName("modal-1");
model1 = model1[0];
let model2 = document.getElementsByClassName("modal-2");
model2 = model2[0];

model2.hidden = true;
var timer;

function time() {
    // Function to handle the timer
    const secEl = document.getElementById("sec");
    const milSecEl = document.getElementById("milSec");
    
    let newSec = parseInt(secEl.innerHTML);
    let newMilSec = parseInt(milSecEl.innerHTML);

    if(newSec == 10) {
        gameOver();
        clearInterval(timer);
    }
    
    if(newMilSec + 5 > 99) {
        newSec++;
        newMilSec = 0;
    }
    else {
        newMilSec += 5;
    }

    secEl.innerHTML = newSec;
    milSecEl.innerHTML = newMilSec;

}

startButton.addEventListener("click", ()=> {
    timer = setInterval(time, 50);

    model1.hidden = true;
    board(playerPosition);
    updateApple(0, max);
    createSpikes();
    
    let input = window.addEventListener("keydown", e => {
        playerPosition = playerUpdate(e, playerPosition, max, input);
    });
})