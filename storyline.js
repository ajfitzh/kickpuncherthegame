let storylineName = "Test Storyline"
let weaponName = "Burgers"
let dialogueCounter = 0;
let presidentFact = "Bunnies"; 
let introCounter = 0;

function testStoryline(){
    console.log("Storyline function!")
    let dialogueList = [
        {
            id: 1,
            image_source: "/assets/storylineassets/police-station-background-image.jpg",
            text: "You arrive at the Police Station."
        },
        {
            id: 2,
            image_source: "/assets/storylineassets/captainsoffice.jpg",
            text: `You come to the door of your Police Captain, Captain McKickles. He's tough. But you're tougher. You sheath your <font color= "red"><strong>${weaponName}</strong></font>.`  
        },
        {
            id: 3,
            image_source: "/assets/storylineassets/TheCaptain.jpg",
            text: `<strong>McKickles</strong>: Dag-blammit, ` + storylineName + `! You cost the city a billion dollars with your latest stunt! You detonated the aquarium!`  
        },
        {
            id: 4,
            image_source: "./assets/storylineassets/KickPuncher.jpg",
            text: `<strong>${storylineName}</strong>: "I don't play by the rules, McKickles. I'm a renegade."`  
        },
        {
            id: 5,
            image_source: "/assets/storylineassets/TheCaptain.jpg",
            text: `<strong>McKickles</strong>: "I would fire you, but you're the best dang cop we've got.  The President of the United States is here for you."`  
        },
        {
            id: 6,
            image_source: "./assets/storylineassets/KickPuncher.jpg",
            text: `<strong>${storylineName}</strong>: "But I don't wanna."`  
        },
        {
            id: 7,
            image_source: "/assets/storylineassets/TheCaptain.jpg",
            text: `<strong>McKickles</strong>: "Please. It's for the Country of America."`  
        },
        {
            id: 8,
            image_source: "./assets/storylineassets/KickPuncher.jpg",
            text: `<strong>${storylineName}</strong>: "OK."`  
        },
        {
            id: 9,
            image_source: "/assets/storylineassets/ThePresident.jpg",
            text: `<strong>The President</strong>: "Thank God you're here, ${storylineName}. I got a terrorist message, it says...'<font color="red"> ${presidentFact}</font>'`
        },
        {
            id: 10,
            image_source: "/assets/storylineassets/TheCaptain.jpg",
            text: `<strong>McKickles:</strong>: "It means the terrorists will attack the SuperBowl at Central Park."`  
        },
        {
            id: 11,
            image_source: "./assets/storylineassets/KickPuncher.jpg",
            text: `<strong>${storylineName}</strong>: "Ok. I'll do it."`  
        },
        {
            id:12,
            image_source: "/assets/storylineassets/pixelcycle.jpg",
            text: `You get on your motorcycle and ride to Central Park...`
        }
    ]
    storylineName = hero.name;
    weaponName = hero.weapon;
container.innerHTML = `<span> ${dialogueList[dialogueCounter].text}</span>
                            <p></p>
                            <img class="dialogueimage" id="dialogueimage" src= ${dialogueList[dialogueCounter].image_source}>
                            <p></p>
                            <button id="submitstyle" onClick="newDialogue(1);playSound()">Back</button>
                            <button id="submitstyle" onClick="newDialogue(2); playSound()">Forward</button>
                            <p></p>
                            <button id="submitstyle" onClick="runBattle(); playSound()">Skip to Fighting Like A Badass</button>`
}


function newDialogue(increment){
                  
    if(dialogueCounter === 11){
        runBattle();
    }
    if(increment === 1){
        dialogueCounter--;
        testStoryline();
    }
    if(increment === 2){
        dialogueCounter++;
        testStoryline();
} 
}
function newFetch(){
    fetch('https://asli-fun-fact-api.herokuapp.com')
    .then(res => (res.json())
    .then(info => {
        console.log("Trying new API...Fun Fact?")
        console.log(info.data.fact)
        presidentFact = info.data.fact;
        console.log("President Fact?")
        console.log(presidentFact)
    })
    )}

 function playSound(){
        let btnAudio = new Audio('./assets/sounds/navigatemenu3.wav')
        btnAudio.volume = 0.4;
        btnAudio.play();
    };