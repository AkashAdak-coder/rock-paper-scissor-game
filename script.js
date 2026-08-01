let result = '';
const scores = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    lose : 0,
    tie : 0
};

function game(userMove){

    const count = Math.floor(Math.random() * 3);
    const move = ['rock','paper','scissor'];
    const computerMove = move[count];

    if((userMove === 'rock' &&  computerMove === 'paper')|| (userMove === 'scissor' && computerMove === 'rock') || (userMove === 'paper' && computerMove === 'scissor')){
    result = "Lose";
    scores.lose += 1;
    alert(`User choose ${userMove}, Computer choose ${computerMove}, It's ${result}
win : ${scores.win}  lose : ${scores.lose}  tie : ${scores.tie}`);
    } else if((userMove === 'rock' && computerMove === 'scissor')|| (userMove === 'scissor' && computerMove === 'paper') || (userMove === 'paper' && computerMove === 'rock')){
    result = 'Win';
    scores.win += 1;
    alert(`User choose ${userMove}, Computer choose ${computerMove}, It's ${result}
win : ${scores.win}  lose : ${scores.lose}  tie : ${scores.tie}`);
    } else {
    result = 'Tie';
    scores.tie += 1;
    alert(`User choose ${userMove}, Computer choose ${computerMove}, It's ${result}
win : ${scores.win}  lose : ${scores.lose}  tie : ${scores.tie}`);
    }

    localStorage.setItem('score',JSON.stringify(scores));
    displayResult(result);
    showMoves(userMove,computerMove);
}

// function pickComputerMove(count){
//   if(count === 1){
//     return 'rock';
//   } else if(count === 2){
//     return 'paper';
//   } else{
//     return 'scissor';
//   }
// }

function resetScore(){
    scores.win = 0;
    scores.lose = 0;
    scores.tie = 0;
    localStorage.removeItem('score');
    alert('score has been reset!');
}

function displayResult(result){
    const displayResult = document.querySelector('.js-result');

    displayResult.textContent = `${result}`;
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
    }else{
        showMove.innerHTML = `
            <i class="fa-regular fa-hand-scissors"></i>
            <i class="fa-regular fa-hand"></i>
        `;
    }
       console.log(move1, move2);

}