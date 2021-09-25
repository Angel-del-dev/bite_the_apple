function removeApples() {
    // Function that removes every .apple to solve visual and mechanical bugs
    const applesEl = document.getElementsByClassName("apple");
    if(applesEl.length > 0) {
        for(let item of applesEl) {
            item.classList.remove("apple");
        }
    }
}

export function updateApple(min=0, max=24){
    removeApples();
    // Function to create an apple in a random grid cell that is not a spike or a player
    let position = Math.floor(Math.random() * (max - min)) + min;
    if(document.getElementById(position).classList.contains("player") || document.getElementById(position).classList.contains("spike")){
        updateApple(min,max);
    }
    document.getElementById(position).classList.add("apple");
}