function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
function playGame() {
    let player1Total = 0;
    let player2Total = 0;
  
for (let i = 0; i < 3; i++) {
      const player1Roll = rollDice();
      console.log(`Игрок 1 выбросил: ${player1Roll}`);
      player1Total += player1Roll;
  
      const player2Roll = rollDice();
      console.log(`Игрок 2 выбросил: ${player2Roll}`);
      player2Total += player2Roll;
    }
  
console.log(`Сумма бросков игрока 1: ${player1Total}`);
console.log(`Сумма бросков игрока 2: ${player2Total}`);
  
    if (player1Total > player2Total) {
      console.log("Игрок 1 выиграл!");
    } else if (player2Total > player1Total) {
      console.log("Игрок 2 выиграл!");
    } else {
      console.log("Ничья!");
    }
  }
  
playGame();
  