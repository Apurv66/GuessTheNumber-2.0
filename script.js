let btn = document.querySelector("#btn");
let userInput = document.querySelector("#box");
let prev = document.querySelector("#c1");
let rem = document.querySelector("#c2");
let msg = document.querySelector('#msg');
let correct = document.querySelector('#correct');
let losemsg = document.querySelector('#lose');
let btn2 = document.querySelector('#btn2');
correct.hidden = true;
losemsg.hidden = true;
btn2.hidden = true;

let randomNumGen = () => {
    return Math.floor((Math.random() * 100) + 1);
}

let ans = randomNumGen();
console.log(ans);
let playGame = true;
remGuess = 10;



if(playGame){
    btn.addEventListener('click', ()=>{
        let guess = userInput.value;
        isvalid(guess);
        userInput.value = "";
    })
}

let isvalid = (guess) => {
    if(isNaN(guess)){
        msg.innerHTML = "Please enter valid number.";
        msg.style.color = "red";
    }

    else if(guess < 1){
        msg.innerHTML = "Please enter number between 1 to 100.";
        msg.style.color = "orange";
    }

    else if(guess > 100){
        msg.innerHTML = "Please enter number between 1 to 100.";
        msg.style.color = "orange";
    }

    else {
        msg.innerHTML = "";
        prev.innerHTML += guess + " ";
        checkGuess(guess);
    }
}

let checkGuess = (guess) => {
    if(guess == ans){
        endGame();
    }
    else if(guess < ans){
        msg.innerHTML = "Try Bigger number please.";
        msg.style.color = "#133e87";
        remGuess--;
        rem.innerHTML = remGuess;
        if(remGuess == 0){
            lose();
        }
    }
    else if(guess > ans){
        msg.innerHTML = "Try Smaller number please.";
        msg.style.color = "#133e87";
        remGuess--;
        rem.innerHTML = remGuess;
        if(remGuess == 0){
            lose();
        }
    }
}

let endGame = () => {
    playGame = false;
    userInput.disabled = true;
    btn.disabled = true;
    correct.hidden = false;
    newGame();
}

let newGame = () => {
    btn2.hidden = false;
    btn2.addEventListener('click', ()=>{
        playGame = "true";
        userInput.disabled = false;
        btn.disabled = false;
        ans = randomNumGen();
        console.log(ans)
        btn2.hidden = true;
        correct.hidden = true;
        losemsg.hidden = true;
        remGuess = 10;
        rem.innerHTML = "10";
        prev.innerHTML = "";
        msg.innerHTML = "";
    })
}

let lose = () =>{
    playGame = false;
    userInput.disabled = true;
    btn.disabled = true;
    losemsg.hidden = false;
    newGame();
}