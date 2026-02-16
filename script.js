let score = JSON.parse(localStorage.getItem('score')) || {
            win : 0,
            lose : 0,
            draw : 0
        }
        
        function gamePlay(user_move){
            let compter_move = computerMove();
            let output = document.querySelector('.play-output');
            let display_result = document.querySelector('.display-result');

            if(user_move === 'rock'){
                if(compter_move === 'rock'){
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, it's draw!`);
                    output.innerText = "It's Draw!";
                    output.classList.add("play-output");
                } else if (compter_move === 'paper') {
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, compter won`);
                    output.innerText = "You Lose";
                    output.classList.add("play-output");
                } else {
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, you win`);
                    output.innerText = "You Win";
                    output.classList.add("play-output");
                }
                ShowResult(user_move,compter_move);
                display_result.classList.add("display-result-id");
            }

            if(user_move === 'paper'){
                if(compter_move === 'rock'){
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, you win`);
                    output.innerText = "You Win";
                } else if (compter_move === 'paper') {
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, it draw!`);
                    output.innerText = "It's Draw!";
                } else {
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, computer win`);
                    output.innerText = "You Lose";
                }
                ShowResult(user_move,compter_move);
                display_result.classList.add("display-result-id");
            }

            if(user_move === 'scissor'){
                if(compter_move === 'rock'){
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, computer win`);
                    output.innerText = "You Lose";
                } else if (compter_move === 'paper') {
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, you win`);
                    output.innerText = "You Win";
                } else {
                    // alert(`You choose ${user_move}, Computer choose ${compter_move}, it's draw!`);
                    output.innerText = "It's Draw!";
                }
                ShowResult(user_move,compter_move);
                display_result.classList.add("display-result-id");
            }

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

        function ShowResult(user_move ,compter_move) {
            let spans = document.getElementsByTagName('span');
            
            if(compter_move === user_move){
                score.draw++;
                spans[2].innerText = score.draw;
                showMove(user_move,compter_move);

            } else if ((compter_move === 'rock' && user_move === 'paper') || (compter_move === 'paper' && user_move === 'scissor') || (compter_move === 'scissor' && user_move === 'rock')) {
                score.win++;
                spans[0].innerText = score.win;
                showMove(user_move,compter_move);
            } else {
                score.lose++;
                spans[1].innerText = score.lose;
                showMove(user_move,compter_move);
            }

            localStorage.setItem('score',JSON.stringify(score));
        }

        function showMove(user_move , compter_move) {
            let player_move_img = document.querySelector('.player-move-img');
            let computer_move_img = document.querySelector('.computer-move-img');
            const display = document.querySelector('.display-moves');
            
            let path1 = user_move + ".webp";
            let path2 = compter_move + ".webp";
            player_move_img.setAttribute('src',path1);
            computer_move_img.setAttribute('src',path2);
            display.classList.add("seen");
        }