export function board(playerPosition) {
    // Function to create the board
    const board = document.getElementById("board");
    for(let i = 0 ; i<25 ; i++) {
        const el = document.createElement("div");
        el.id = i;
        if(i == playerPosition) {
            el.classList.add("player");
        }
        board.appendChild(el);
    }
}