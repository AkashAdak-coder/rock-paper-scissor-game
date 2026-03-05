let score = JSON.parse(localStorage.getItem('score')) || {
            win : 0,
            lose : 0,
            draw : 0
        }
        
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

            localStorage.removeItem('score');
        }

        function countWinning(user_move) {
            let spans = document.getElementsByTagName('span');
            let compter_move = computerMove();
            
            if(compter_move === user_move){
                score.draw++;
                spans[1].innerText = score.draw;
                showMove(user_move,compter_move);

            } else if ((compter_move === 'rock' && user_move === 'paper') || (compter_move === 'paper' && user_move === 'scissor') || (compter_move === 'scissor' && user_move === 'rock')) {
                score.win++;
                spans[0].innerText = score.win;
                showMove(user_move,compter_move);
            } else {
                score.lose++;
                spans[2].innerText = score.lose;
                showMove(user_move,compter_move);
            }

            localStorage.setItem('score',JSON.stringify(score));
        }

        function showMove(user_move , compter_move) {
            const result = document.querySelector('.result');

            let path1 = "./images/" + user_move + ".webp";
            let path2 = "./images/" + compter_move + ".webp";

            let html = `<div class="showing-move">You choose <img src="${path1}"><img src="${path2}"> Computer choose</div>
            <div class="restart-btn"><button onclick="restart()">Reset score</button></div>`;

            result.innerHTML = html;
        }