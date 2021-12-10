let gruntCounter = 0;
let playerTurn = true;
let battleMessageCounter = 2;
let soundtrack = new Audio("/assets/sounds/soundtrack.mp3");
soundtrack.volume = 0.8;
let isPlaying = false;

function heroFist() {
    monsterAudio(8);
    let id = null;
    const elem = document.getElementById("herofist");  
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.1);
    function frame() {
      if (pos == 1600) {
        clearInterval(id);
      } else {
        pos+=2; 
        // elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
    setTimeout(function(){
        let punchDamage = getRandomValue(10,15);
        currentEnemy.hp -= punchDamage;
        newMessage(`${hero.name} punches with Karate Fist. <font color ="red">${punchDamage}</font> damage!`);
        monsterAudio(13);
        drawStats();
        if(currentEnemy.hp >=0){randomProjectile()}
    }, 3000); 
  }
function heroFoot() {
    monsterAudio(5);
    let id = null;
    const elem = document.getElementById("herofoot");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.1);
    function frame() {
      if (pos === 1600) {
        clearInterval(id);
        img.src = ' ';
      } else {
        pos+=2; 
        // elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
    setTimeout(function(){
        let kickDamage = getRandomValue(1,60);
        currentEnemy.hp -= kickDamage;
        newMessage(`${hero.name} performs Flying Kick-Punch! Fresh!! <font color ="red">${kickDamage}</font> damage!`);
        monsterAudio(4);
        if(currentEnemy.hp >=0){randomProjectile();}
        else if(currentEnemy.hp < 0){drawStats(); newBadGuy();}
    },3000)
}
  function heroBurger() {
    monsterAudio(16);
    monsterAudio(17);
    // let id = null;
    const burgerelem = document.getElementById("heroburger");   
    burgerelem.classList.toggle("move-ltr");
    setTimeout(function(){burgerelem.classList.toggle("move-ltr")},5000)
    setTimeout(function(){
        let healDamage = getRandomValue(20,30);
        hero.hp += healDamage;
        newMessage(`${hero.name} eats a Burger. It's All-American! Gained <font color ="green">${healDamage}</font> of health!`);
        if(hero.hp > hero.maxHp) {
            hero.hp = hero.maxHp;
        }
        drawStats();
        if(currentEnemy.hp >=0){randomProjectile()}
        else if(currentEnemy.hp < 0){drawStats(); newBadGuy();}
    }, 1000); 
    
}

    function enemyBullet() {
        monsterAudio(5);
        let id = null;
        const elem = document.getElementById("enemybullet");   
        let pos = 250;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
          if (pos === 1990) {
            clearInterval(id);
            img.src = ' ';
          } else {
            pos+=2; 
            elem.style.right = pos + "px"; 
          }
        }
        setTimeout(function(){
            let AKdamage = getRandomValue(1,9);
            hero.hp -= AKdamage;
            if(hero.hp < 0){hero.hp =0}
            newMessage(`${currentEnemy.name} shoots with AK-47. <font color ="red">${AKdamage}</font> damage!`);
            monsterAudio(12);
            drawStats();
            setTimeout(function(){handleGameOver();},300)
        }, 3100);    

      }
      function enemyBook() {
        monsterAudio(10);
        let id = null;
        const elem = document.getElementById("enemybook");   
        let pos = 250;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
          if (pos === 1990) {
            clearInterval(id);
            img.src = ' ';
          } else {
            pos+=2; 
            elem.style.right = pos + "px"; 
          }
        }
        setTimeout(function(){
            let bookDamage = getRandomValue(1,2);
            hero.hp -= bookDamage;  
            if(hero.hp < 0){hero.hp =0}
            newMessage(`${currentEnemy.name} uses Propaganda! Not in my book club! <font color ="red">${bookDamage}</font> damage!`);
            monsterAudio(12);
            drawStats();
            setTimeout(function(){handleGameOver();},300)
        }, 3100); 
      }
      function enemyMolotov() {
        monsterAudio(6);
        let id = null;
        const elem = document.getElementById("enemymolotov");   
        let pos = 250;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
          if (pos === 1990) {
            clearInterval(id);
            img.src = ' ';
          } else {
            pos+=2; 
            elem.style.right = pos + "px"; 
          }
        }
        setTimeout(function(){
            let molotovDamage = getRandomValue(1,25);
            hero.hp -= molotovDamage;
            newMessage(`${currentEnemy.name} tosses a Molotov Cocktail. Watch out! <font color ="red">${molotovDamage}</font> damage!`);
            monsterAudio(14);
            if(hero.hp < 0){hero.hp =0}
            drawStats();
            setTimeout(function(){handleGameOver();},300)
        }, 3100); 
      }
      function enemySkull() {
        monsterAudio(7);
        let id = null;
        const elem = document.getElementById("enemyskull");   
        let pos = 250;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
          if (pos === 1990) {
            clearInterval(id);
            img.src = ' ';
          } else {
            pos+=2; 
            elem.style.right = pos + "px"; 
          }
        }
        let skullDamage = getRandomValue(10,30);
        hero.hp -= skullDamage;
        setTimeout(function(){
            newMessage(`${currentEnemy.name} tosses a Terminator Skull. It's alive! <font color ="red">${skullDamage}</font> damage!`);
            monsterAudio(11);
            if(hero.hp < 0){hero.hp =0}
            drawStats();
            setTimeout(function(){handleGameOver();},300)
        }, 3100); 
      }
      function enemyNuke() {
        monsterAudio(8);
        let id = null;
        const elem = document.getElementById("enemynuke");   
        let pos = 250;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
          if (pos === 1990) {
            clearInterval(id);
            img.src = ' ';
          } else {
            pos+=2; 
            elem.style.right = pos + "px"; 
          }
        }
        setTimeout(function(){
            let nukeDamage = getRandomValue(30,40);
            hero.hp -= nukeDamage;
            if(hero.hp < 0){hero.hp =0}
            newMessage(`${currentEnemy.name} tosses a Tactical Nuke. Pow! <font color ="red">${nukeDamage}</font> damage!`);
            monsterAudio(5);
            drawStats();
            setTimeout(function(){handleGameOver();},300)
        }, 3100); 
      }


let enemiesList = [
    {
        id: 1,
        name: "Vlomdinir Prootim",
        weapon: "Propaganda",
        image_source: "/assets/storylineassets/badguy1.jpg",
        hp: 20,
        maxHp: 20,
        level: 1
    },
    {
        id: 2,
        name: "Igor SkullCrusher",
        weapon: "Badassery",
        image_source: "/assets/storylineassets/badguy2.jpg",
        hp: 80,
        maxHp: 80,
        level: 1
    },
    {
        id: 3,
        name: "Traitor Hulk Hogan",
        weapon: "Traitorousness",
        image_source: "/assets/storylineassets/badguy3.jpg",
        hp: 500,
        maxHp: 500,
        level: 1
    },
    {
        id: 4,
        name: "Voldemort Putin",
        weapon: "Evil",
        image_source: "/assets/storylineassets/badguy4.jpg",
        hp: 400,
        maxHp: 500,
        level: 1
    },
    {
        id: 5,
        name: "Double Agent Jimson",
        weapon: "Treachery",
        image_source: "/assets/storylineassets/badguy5.jpg",
        hp: 400,
        maxHp: 500,
        level: 1
    },
    {
        id: 6,
        name: "Chris Rock",
        weapon: "Laughter",
        image_source: "/assets/storylineassets/badguy6.jpg",
        hp: 400,
        maxHp: 500,
        level: 1
    },
    {
        id: 7,
        name: "Predator",
        weapon: "Alien Stuff",
        image_source: "/assets/storylineassets/badguy7.jpg",
        hp: 400,
        maxHp: 500,
        level: 10
    },
    {
        id: 8,
        name: "Orc Putin",
        weapon: "Orcish Stuff",
        image_source: "/assets/storylineassets/badguy8.jpg",
        hp: 400,
        maxHp: 500,
        level: 1
    },
    {
        id: 9,
        name: "Sub-Zero",
        weapon: "Ice Stuff",
        image_source: "/assets/storylineassets/badguy4.jpg",
        hp: 1500,
        maxHp: 1500,
        level: 30
    }
]

let isGameRunning = false;
let turnsLog = 0;
let currentEnemy = enemiesList[0];
let enemyCounter = 0;



document.addEventListener('DOMContentLoaded', function(){
    let startUpSound = new Audio("")
    startUpSound.play();
    fetch("http://localhost:3000/scores")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        document.querySelector('#fronttopscore').innerHTML ="";
        bblSort(data,"Enemies_killed");
        for(i=0;i<9;i++){
        let li = document.createElement('ol'); 
        li.innerText = `${[i+1]}. ${data[i].Name} ------------- ${data[i].Enemies_killed} `;
        
        document.querySelector('#fronttopscore').appendChild(li);  
        }
    })
    newFighter.addEventListener('submit', e => {
        e.preventDefault();
        let btnAudio = new Audio('/assets/sounds/navigatemenu3.wav')
        btnAudio.volume = 0.4;
        btnAudio.play();
        console.log(e.target.name.value);
        let heroName = e.target.name.value;
        storylineName = e.target.name.value;
        console.log(e.target.selectWeapon.value)
        let heroWeapon = e.target.selectWeapon.value;
        setHeroInfo(heroName, heroWeapon);
        newFighter.reset();
        document.querySelector('#container').innerHTML = "";
        newFetch();
        testStoryline();
        // runBattle(heroName,heroWeapon);
    })
})


let newFighter = document.querySelector('#new-fighter')



function runBattle(){
    let startAudio = new Audio('/assets/sounds/gamestart.wav')
    startAudio.volume = 0.9;
    startAudio.play();
    let container = document.querySelector('#container');
    //Consider fixing innerHTML vs. Index.html to simplify life
    console.log(currentEnemy)
    container.innerHTML =
    `<div id="animations"></div>
    <div id="backgroundcity"></div>
    <div class="herostats" id="herostats"></div>
    <p></p>
    <div class="enemystats"id="enemystats"></div>
    <div class="battleoptions" id="battleoptions"></div>
     
     <ul class="battleMessage" id ="battleMessage">  
        </ul>
   
    <div id="controllercomplete"></div>`



    let battleMenu = document.createElement('div');
    container.append(battleMenu);
    let battleMessage = document.createElement('ul');
    drawStats();
    fetchData();
    newFetch();
    setTimeout(()=>startGame(),1000)
}


function fetchData(){
fetch("http://api.open-notify.org/astros.json")
.then(res => (res.json())
.then(data => {
    let random = getRandomValue(0,10);
    let randomPerson = data.people[random].name;
    setTimeout(function(){
        newMessage(`<strong>${randomPerson}</strong> sent me! Prepare for your doom!`)
    },1500);
    data.people[2].name
})
)}

/// <p>Level: ${hero.level}</p> <p>Level: ${currentEnemy.level}</p>
function drawStats(){
    if(currentEnemy.hp < 0) {currentEnemy.hp = 0}
    let herostats = document.querySelector('#herostats');
    herostats.innerHTML = ` <p> Your Hero's Name:<br></br> ${hero.name}  </p>
                            <img id="heropic" width="200" height="200" src= ${hero.image_source} >
                            <p> Your Hero's Weapon: ${hero.weapon}  </p>
                            <p>Hitpoints: ${hero.hp} / ${hero.maxHp} </p>
                            <p> <progress id="heroHealthBar" value=${hero.hp} max=${hero.maxHp}></progress> </p>
                            
                            `
    let enemystats = document.querySelector('#enemystats');
    enemystats.innerHTML = `                       
                            <p> Enemy:<br></br> ${currentEnemy.name}  </p>
                            <img id="enemypic"  width="200" height="200" src= ${currentEnemy.image_source} >
                            <p> The Enemy's Weapon: ${currentEnemy.weapon}  </p>
                            <p>Hitpoints: ${currentEnemy.hp} / ${currentEnemy.maxHp} </p>
                            <p> <progress id="enemyHealthBar" value=${currentEnemy.hp} max= ${currentEnemy.maxHp}></progress> </p>
                            `
    let battleoptions = document.querySelector('#battleoptions');
    battleoptions.innerHTML = ` <div>                       
                            
   <img id="legend" src="./assets/controller/redbutton.png"></br></br>        <button id="soundtrack">ATTACK</button>
   <img id="legend" src="./assets/controller/yellowbutton.png"></br></br>        <button id="soundtrack">HEAL</button>
   <img id="legend" src="./assets/controller/bluebutton.png"></br></br>        <button id="soundtrack">KICK-PUNCH</button>
   <img id="legend" src="./assets/controller/greenbutton.png"></br></br>        <button id="soundtrack">GIVE-UP</button>
                                `
    controllercomplete.innerHTML=  `
                                <img class="controller" src="./assets/controller/gamecontroller.png">
                                <img id="bluebutton" onClick= "heroFoot()"src="./assets/controller/bluebutton.png">
                                <img id="greenbutton" onClick= "giveUp()" src="./assets/controller/greenbutton.png">
                                <img id="redbutton" onClick= "heroFist()"src="./assets/controller/redbutton.png">
                                <img id="yellowbutton" onClick= "heroBurger()"src="./assets/controller/yellowbutton.png">
                            `
    animations.innerHTML = `<div id ="animationcontainer">
    <img id ="herofist" src="./assets/fist.png">
    <img id="herofoot" src="./assets/dismemberedfoot.png">
    <img id="heroburger" src="./assets/burger.png">
    <img id="enemybullet" src="./assets/bullet.png">
    <img id="enemybook" src="./assets/enemybook.png">
    <img id="enemymolotov" src="./assets/enemymolotov.png">
    <img id="enemyskull" src="./assets/enemyskull.png">
    <img id="enemynuke" src="./assets/enemynuke.png">

  </div>`
                        }


function newMessage(text){
    battleMessageCounter++;
    if(battleMessageCounter === 10){
        console.log("BattleMessageCounter reached 10!")
        document.querySelector('#battleMessage').removeChild(document.querySelector('#battleMessage').childNodes[12]);
        document.querySelector('#battleMessage').removeChild(document.querySelector('#battleMessage').childNodes[11]);
        battleMessageCounter --;
    }
    let newspace = document.createElement('p');
    newspace.innerHTML = "";
    let li = document.createElement('li');
    li.innerHTML = text;
    document.querySelector('#battleMessage').prepend(newspace)
    document.querySelector('#battleMessage').prepend(li);
    console.log(text);

}


function setHeroInfo(text,weapon){
    hero.name = text;
    hero.weapon = weapon;
}
///Build stats of Hero and Enemy as Objects
const hero = {
    name: "Edwin",
    weapon: "Butterknife",
    image_source: "/assets/kickpuncher.png",
    hp: 50,
    maxHp:50,
    level: 1
}

///Trying to fit in other code

function startGame (){
    console.log("startGame has started!");    
    isGameRunning = true;
        resetGame();
        listeningState();
    }

function listeningState(){
    const attackarea = document.querySelector('#attack')
    attackarea.addEventListener('click',attack);
    const specialarea = document.querySelector('#special-attack')
    specialarea.addEventListener('click',specialAttack);
    const healarea = document.querySelector('#heal')
    healarea.addEventListener('click',heal);
    const giveuparea = document.querySelector('#give-up')
    giveuparea.addEventListener('click',giveUp);
    
    const heropicture = document.querySelector('#heropic')
    attackarea.addEventListener('click', function(){
        heropicture.addClass('shake');
        })
    }

function attack () {heroFist()}
//     let attackAudio = new Audio('/assets/sounds/explosion4.wav')
//     attackAudio.volume = 0.3;
//     let reactionAudio = new Audio('/assets/sounds/hit3.wav')
//     reactionAudio.volume = 0.8;
//     attackAudio.play();
//     reactionAudio.play();
//     playerTurn=false;
    
//         //make random value generator
//         console.log("Attack is Run")
//         let damage = getRandomValue(2,8);
//         currentEnemy.hp -= damage;
//         newMessage(`<strong>${hero.name}</strong> inflicted <font color ="red">${damage}</font> damage! All right!`);
//         handleGameOver();

// }

// function specialAttack () {
//     console.log('is special attack called?')
//     let attackAudio = new Audio('/assets/sounds/explosion1.wav')
//     attackAudio.volume = 0.6;
//     let reactionAudio = new Audio('/assets/sounds/hit3.wav')
//     reactionAudio.volume = 0.3;
//     attackAudio.play();
//     reactionAudio.play();
//     playerTurn=false;
//     if(isGameRunning === true){
//         //make random value generator
//         console.log("Special KickPunch Attack")
//         let damage = getRandomValue(1000,2000);
//         currentEnemy.hp -= damage;
//         newMessage(`<strong>${hero.name}</strong> inflicted <font color ="red">${damage}</font> damage! So cool!`);
//         handleGameOver();
//     }
// }
// function heal () {
//     console.log('Is Heal called?')
//     let eatAudio = new Audio('/assets/sounds/pickup0.wav')
//     eatAudio.volume = 0.6;
//     let healingAudio = new Audio('/assets/sounds/start.wav')
//     healingAudio.volume = 0.3;
//     eatAudio.play();
//     healingAudio.play();
//     playerTurn=false;
//     if(isGameRunning === true){
//         //make random value generator
//         console.log("You eat an American Burger. Oo-Rah!")
//         let heal = 20;
//         hero.hp += heal;
//         if(hero.hp > hero.maxHp) {
//             hero.hp = hero.maxHp;
//         }
//         newMessage(`<strong>${hero.name}</strong> ate burger and healed <font color ="green">${heal}</font> health points! America, <strong>oh yeah!</strong>`);
//         handleGameOver();
//     }
// }
function giveUp() {
    console.log('is giveup called?')
    let reactionAudio = new Audio('/assets/sounds/lose0.wav')
    reactionAudio.volume = 0.8;
    reactionAudio.play();
    isGameRunning = false;
    resetGame();
    newMessage(`You run away.`);
    highScore();
}

function handleTurnMonster(){
    handleGameOver();
    randomProjectile();
    handleGameOver();
    playerTurn=true;
    
    if(isGameRunning === true){
        //add randomizer function
        if(currentEnemy.hp >= 0){
        }
    }
    drawStats();
    listeningState();
}

function getRandomValue(min,max) {
    return Math.max(Math.floor(Math.random() * max) + 1,min);
}

function handleGameOver(){
    setTimeout(function() {
        if(currentEnemy.hp <= 0) {
        
            let reactionAudio = new Audio('/assets/sounds/badguydeath.mp3')
            reactionAudio.volume = 1;
            reactionAudio.play();
            newMessage('Victory! This Agent is eliminated!');
        isGameRunning = false;
        gruntCounter = 0;
        setTimeout(function() {
            newBadGuy();
            listeningState()
            startGame()}
            ,1000)
    }
    else if(hero.hp <=0) {
        let losingAudio = new Audio('./assets/sounds/lose0.wav')
        losingAudio.volume = 0.5;
        losingAudio.play();
        newMessage('Defeat! You have failed all of America and Ronald Reagan!');
        isGameRunning = false;
        highScore(); 
        }    
    if(playerTurn === false){
        setTimeout(function(){
            handleTurnMonster();
        }, 1000);
    }
},2000);
}

function resetGame(){
    // hero.hp = hero.maxHp;
    currentEnemy.hp = currentEnemy.maxHp;
}

function newBadGuy(){
    if(enemyCounter === 9) {
        highScore();
    }else{
        setTimeout(function(){
        let startAudio = new Audio('/assets/sounds/enemyentry.wav')
        startAudio.volume = 0.9;
        startAudio.play();
        }, 2000)
        enemyCounter++;
        currentEnemy = enemiesList[enemyCounter];
        console.log("switching to new bad guy");
        console.log(currentEnemy)
        setTimeout(function(){
            drawStats();
            for(i=0;i<10;i++){newMessage(`                               `);}
            newMessage(`A new challenger approaches... `);
            newMessage(`<strong>${currentEnemy.name}</strong>! What a jerk!`)
        }, 2000)
        debugger;
        setTimeout(function(){startGame();},3000)
    listeningState();
}
}
//////////////////////////////////////////////////////High Score Area///////////////////////////
function highScore(){
    container.innerHTML = '<div class= "gameover"> <h1>GAME OVER</h1></div>'
    
    setTimeout(function(){
    console.log(`You successfully killed: ${enemyCounter} enemies of America.`)
    // submitData(hero.name,enemyCounter);
    container.innerHTML = `
                            <span> ------HIGH SCORE------ </span>
                            <br></br>
                            <span> Name    Enemies Killed </span>
                            <ol class= "numbers" id="topscore"></ol>
                            
                            <p>You successfully killed:<strong> ${enemyCounter} enemies of America.</strong> Enter your initials below to save your score. Reload Page to Try Again!</p>
                            <form id="highscoresurvey">
                            <form action="http://localhost:3000/" method="POST" >
                            <label> Your Initials: <input type="text" name="initials" id="initials" /></label
                            ><br />
                            <input type="submit" onClick= "playSound()"id="submit" value="Submit" />
                            </form>
                            `

    fetchHighScores();

let form = document.getElementById('highscoresurvey');
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.preventDefault());
    debugger; 
    let initial = e.target.initials.value;
    console.log(initial)
    debugger;
    submitData(initial,enemyCounter);
    highScore();
    // window.onbeforeunload = function(){
    //     return "string";
    
});
},1940)
}


function fetchHighScores() {

    debugger;
    fetch("http://localhost:3000/scores")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        debugger;
        document.querySelector('#topscore').innerHTML ="";
        bblSort(data,"Enemies_killed");
        for(i=0;i<9;i++){
           let li = document.createElement('ol'); 
         li.innerText = `${[i+1]} ${data[i].Name} ------- ${data[i].Enemies_killed} `;
         
         document.querySelector('#topscore').append(li);  
        }
    })
}


function submitData(initial,EnemyCounter){
    const formData={
      Name:initial,
      Enemies_killed: EnemyCounter  
    };
    const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify (formData),
};
debugger;
fetch("http://localhost:3000/scores",configurationObject);
}

//Sleep function from tutorial
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

//Random Enemy Projectile (help from w3Schools for Switch Statement)


function randomProjectile(){
    let projectile = Math.floor(Math.random() * 6) + 1;//Make random value generator for projectile array
    console.log(projectile);
    switch(projectile) {
        case 1:
          enemyBullet();
          break;
        case 2:
          enemyBook();
          break;
        case 3:
            enemySkull();
            break;
        case 4:
            enemyNuke();
            break;
        default:
          enemyMolotov();
            break;
        }
    handleGameOver();
    return projectiles[projectile]
}
///Random Enemy Sound
const sounds = [
    "./assets/sounds/shoot0.wav", //0
    "./assets/sounds/shoot1.wav", 
    "./assets/sounds/shoot2.wav",
    "./assets/sounds/shoot3.wav",
    "./assets/sounds/explosion0.wav",
    "./assets/sounds/explosion1.wav",
    "./assets/sounds/explosion2.wav",
    "./assets/sounds/explosion3.wav",
    "./assets/sounds/explosion4.wav",
    "./assets/sounds/open1.wav", //9
    "./assets/sounds/book.wav",
    "./assets/sounds/hit00.wav", //11
    "./assets/sounds/hit01.wav", //12
    "./assets/sounds/hit02.wav", //13
    "./assets/sounds/hit3.wav",  //14
    "./assets/sounds/achievement01.wav", //15
    "./assets/sounds/pickup0.wav", //16
    "./assets/sounds/start.wav" //17
]

function monsterAudio(element){
    let sound = new Audio(sounds[element])
    sound.play();
}


///BubbleSort with help from GeeksforGeeks.com tutorial for function 
function bblSort(a, par)
{
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i][par] < a[i + 1][par]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
///taken from StackOverflow
function togglePlay() {
    if (isPlaying) {
      soundtrack.pause()
    } else {
      soundtrack.play();
    }
  };
  soundtrack.onplaying = function() {
    isPlaying = true;
  };
  soundtrack.onpause = function() {
    isPlaying = false;
  };