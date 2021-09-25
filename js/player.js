import { updateApple } from "./apple.js";
import { createSpikes } from "./spike.js";

let over = false;

export function gameOver(input) {
    // function to display the game over modal with the score of the current game 
    if(over === false) {
        over = true;
        let model2 = document.getElementsByClassName("modal-2");
        model2 = model2[0];
        model2.hidden = false;
        
        document.getElementById("board").hidden = true;
        document.getElementById("counter").hidden = true;

        const result = document.getElementById("points");
        const moves = document.getElementById("moves");
        const timePlayed = document.getElementById("timePlayed");
        const sec = document.getElementById("sec");
        const milSec = document.getElementById("milSec");

        document.getElementById("resultPoints").innerHTML = " "+result.innerHTML + " points in "+moves.innerHTML+" moves";

        timePlayed.innerHTML = "Time played: "+sec.innerHTML+" : "+ milSec.innerHTML;
    }
}

export function playerUpdate(e, currentPosition, max, input) {
    // Function to move the player around
    let player = document.getElementsByClassName("player");
    player = player[0];
    let newPosition = currentPosition;

    let movesEl = document.getElementById("moves");
    let moves = parseInt(movesEl.innerHTML);

    if(e.key=="ArrowUp") {
        moves++;
        newPosition = (newPosition - 5 >= 0) ? currentPosition - 5 : currentPosition;
    }else if(e.key=="ArrowDown") {
        moves++;
        newPosition = (newPosition + 5 <= max) ? currentPosition + 5 : currentPosition;
    }else if(e.key=="ArrowRight") {
        moves++;
        newPosition = (newPosition + 1 <= max) ? currentPosition + 1: currentPosition;
    }else if(e.key=="ArrowLeft") {
        moves++;
        newPosition = (newPosition - 1 >= 0) ? currentPosition - 1 : currentPosition;
    }

    movesEl.innerHTML = moves;

    player.classList.remove("player");

    
    let newPositionPlayer = document.getElementById(newPosition);

    // If it encounters a spike, the game is over

    if(newPositionPlayer.classList.contains("spike")) {
        gameOver(input);
    }
    newPositionPlayer.classList.add("player");
    
    // If it encounters an apple, you get a point and get to the next stage

    if(newPositionPlayer.classList.contains("apple")) {
        let points = document.getElementById("points");
        points.innerHTML = parseInt(points.innerHTML)+1;

        let apple = document.getElementsByClassName("apple");

        createSpikes();
        
        for(let item of apple) {
            item.classList.remove("apple");
        }

        updateApple(0,max);
    }
    
    return newPosition;
}