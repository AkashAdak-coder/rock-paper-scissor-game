let score =  
    {
        win : 0,
        lose : 0,
        draw : 0
    };
        
    function computerMove(){
        let n = Math.floor((Math.random() * 3)) + 1;
        let pick = '';
        
        if(n === 1){
            pick = 'rock';
        } else if (n === 2) {
            pick = 'paper';
        } else {
            pick = 'scissor';
        }

        return pick;
    }
        
    function restart() {
        let spans = document.getElementsByTagName('span');
        
        for (let span of spans) {
            span.innerText = 0;
        }

        score.win = 0;
        score.lose = 0;
        score.draw = 0;
    }

    let intervalId;
    let isAutoPlaying = false;

    function autoPlay(){
        const autoPlayBtn = document.querySelector('.js-auto-play-btn');
        if(!isAutoPlaying){
            intervalId = setInterval(() => {
                const playerMove = computerMove();
                countWinning(playerMove);
                displayBoardResult(playerMove);
            },1000);
            isAutoPlaying = true;
            autoPlayBtn.innerText = 'stop-auto-play'; 
        } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
            autoPlayBtn.innerHTML = 'auto-play';
        }
    }

    function countWinning(user_move) {
        let spans = document.getElementsByTagName('span');
        let compter_move = computerMove();
        
        if(compter_move === user_move){
            score.draw++;
            spans[1].innerText = score.draw;
        } else if ((compter_move === 'rock' && user_move === 'paper') || (compter_move === 'paper' && user_move === 'scissor') || (compter_move === 'scissor' && user_move === 'rock')) {
            score.win++;
            spans[0].innerText = score.win;
        } else {
            score.lose++;
            spans[2].innerText = score.lose;
        }
    }

    function displayBoardResult(user_move){
        document.querySelector('.invisible').style.display = 'flex';
        let userMoveImg = `images/${user_move}.webp`;
        let computerMoveImg = `images/${computerMove()}.webp`;

        document.querySelector('.move-image1').src = userMoveImg;
        document.querySelector('.move-image2').src = computerMoveImg;
    }

    document.querySelectorAll('.game-buttons').forEach( (button) =>{
        button.addEventListener('click', () =>{
            let user_move = button.dataset.move;
            countWinning(user_move); 
            displayBoardResult(user_move);   
        });
    });

    document.querySelector('.js-reset-btn').addEventListener('click', () =>{
        restart();
    });

    document.querySelector('.js-auto-play-btn').addEventListener('click', () =>{
        autoPlay();
    });        