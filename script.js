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
    result = "lose";
    scores.lose += 1;
    alert(`Computer choose ${computerMove}, User choose ${userMove}, User ${result}
win : ${scores.win}  lose : ${scores.lose}  tie : ${scores.tie}`);
    } else if((userMove === 'rock' && computerMove === 'scissor')|| (userMove === 'scissor' && computerMove === 'paper') || (userMove === 'paper' && computerMove === 'rock')){
    result = 'win';
    scores.win += 1;
    alert(`Computer choose ${computerMove}, User choose ${userMove}, User ${result}
win : ${scores.win}  lose : ${scores.lose}  tie : ${scores.tie}`);
    } else {
    result = 'Tie';
    scores.tie += 1;
    alert(`Computer choose ${computerMove}, User choose ${userMove}, It's ${result}
win : ${scores.win}  lose : ${scores.lose}  tie : ${scores.tie}`);
    }

    localStorage.setItem('score',JSON.stringify(scores));
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