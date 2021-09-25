function generate(min, numSpikes) {
    // Function to generate a random amount of spikes through the map
    const lastSpikes = document.getElementsByClassName("spike");
    
    if(lastSpikes.length > 0) {
        for(let item of lastSpikes) {
            
            item.classList.remove("spike");
        }
    }
    

    // If the spike is supposed to be generated on a cell with a player or an apple, it doesn't generate
    for(let i = min ; i < numSpikes; i++) {
        const positionSpike = Math.abs(Math.floor(Math.random() * (min - 24)) + 0);
        let newSpike = document.getElementById(positionSpike);
        if(!newSpike.classList.contains("player") && !newSpike.classList.contains("apple")) {
            newSpike.classList.add("spike");
        }


    }
}

export function createSpikes() {
    const min = 0; 
    const max =  5;
    const numSpikes = Math.floor(Math.random() * (max - min)) + min;
    generate(min, numSpikes);    
}