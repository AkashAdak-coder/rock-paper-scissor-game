let result = '';
let intervalId;
let isAutoPlay = false;

const scores = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    lose : 0,
    tie : 0
};

const buttons = document.querySelectorAll('.js-rock-paper-scissor-btn');
const resetScoreBtn = document.querySelector('.js-reset-score-btn');
const autoPlayBtn = document.querySelector('.js-auto-play-btn');

buttons.forEach((button, index) =>{
    button.addEventListener('click', () =>{
        if(button.getAttribute('title') === 'rock'){
            game('rock');
        } else if(button.getAttribute('title') === 'paper'){
            game('paper');
        } else if(button.getAttribute('title') === 'scissor'){
            game('scissor');
        }
    });
});

resetScoreBtn.addEventListener('click', () => {
    resetScore();
});

autoPlayBtn.addEventListener("click", () => {
    autoPlay;
});



function game(userMove){
    const computerMove = pickRandomMove();

    if((userMove === 'rock' &&  computerMove === 'paper')|| (userMove === 'scissor' && computerMove === 'rock') || (userMove === 'paper' && computerMove === 'scissor')){

        result = "Lose";
        scores.lose += 1;

    } else if((userMove === 'rock' && computerMove === 'scissor')|| (userMove === 'scissor' && computerMove === 'paper') || (userMove === 'paper' && computerMove === 'rock')){

        result = 'Win';
        scores.win += 1;

    } else {

        result = 'Tie';
        scores.tie += 1;

    }

    localStorage.setItem('score',JSON.stringify(scores));
    displayResult();
    showMoves(userMove,computerMove);
    displayScoreResult();   
}

function pickRandomMove(){
    const count = Math.floor(Math.random() * 3);
    const move = ['rock','paper','scissor'];
    return move[count];
}

function resetScore(){   
    scores.win = 0;
    scores.lose = 0;
    scores.tie = 0;
    localStorage.removeItem('score');
    displayScoreResult();

    alert('score has been reset!');
}

function displayResult(){
    const displayResult = document.querySelector('.js-result');

    displayResult.textContent = `${result}`;
}

function displayScoreResult(){
    let scoreDisplay = document.querySelector('.js-count-result');

    scoreDisplay.innerHTML = `Win: ${scores.win}  Lose: ${scores.lose}  Tie: ${scores.tie}`;
}

function showMoves(move1,move2){
    const showMove = document.querySelector('.js-show-moves');

    if (move1 === 'rock' && move2 === 'paper'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand-back-fist"></i>
            <i class="fa-regular fa-hand"></i>
        `;
    } else if(move1 === 'rock' && move2 === 'scissor'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand-back-fist"></i>
            <i class="fa-regular fa-hand-scissors"></i>
        `;
    }else if(move1 === 'paper' && move2 === 'scissor'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand"></i>
            <i class="fa-regular fa-hand-scissors"></i>
        `;
    }else if(move1 === 'paper' && move2 === 'rock'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand"></i>
            <i class="fa-regular fa-hand-back-fist"></i>
        `;
    }else if(move1 === 'scissor' && move2 === 'rock'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand-scissors"></i>
            <i class="fa-regular fa-hand-back-fist"></i>
        `;
    }else if(move1 === 'scissor' && move2 === 'paper'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand-scissors"></i>
            <i class="fa-regular fa-hand"></i>
        `;
    }else if(move1 === 'scissor' && move2 === 'scissor'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand-scissors"></i>
            <i class="fa-regular fa-hand-scissors"></i>
        `;
    }else if(move1 === 'paper' && move2 === 'paper'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand"></i>
            <i class="fa-regular fa-hand"></i>
        `;
    }else if(move1 === 'rock' && move2 === 'rock'){
        showMove.innerHTML = `
            <i class="fa-regular fa-hand-back-fist"></i>
            <i class="fa-regular fa-hand-back-fist"></i>
        `;
    }
}

function autoPlay(){
    if(!isAutoPlay){
        intervalId = setInterval(() =>{
            let userMove = pickRandomMove();
            game(userMove);
        },1000);
        autoPlayBtn.textContent = 'stop playing';
        isAutoPlay = true;
    } else{
        clearInterval(intervalId);
        autoPlayBtn.textContent = 'auto-play';
        isAutoPlay = false;
    }
}