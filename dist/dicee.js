"use strict";
let dices = [
    ['../dice-images/dice1.png', 1, 'dice1'],
    ['../dice-images/dice2.png', 2, 'dice2'],
    ['../dice-images/dice3.png', 3, 'dice3'],
    ['../dice-images/dice4.png', 4, 'dice4'],
    ['../dice-images/dice5.png', 5, 'dice5'],
    ['../dice-images/dice6.png', 6, 'dice6']
];
castTheDie();
let dieButton = document.querySelector('.dices__button');
dieButton.addEventListener('click', castTheDie);
function castTheDie() {
    let firstDice = document.querySelector('.dices__first-div img');
    let secondDice = document.querySelector('.dices__second-div img');
    let firstIndex = Math.floor(Math.random() * 6);
    let secondIndex = Math.floor(Math.random() * 6);
    firstDice.setAttribute('src', dices[firstIndex][0]);
    firstDice.setAttribute('alt', dices[firstIndex][2]);
    secondDice.setAttribute('src', dices[secondIndex][0]);
    secondDice.setAttribute('alt', dices[secondIndex][2]);
    firstDice.setAttribute('src', dices[firstIndex][0]);
    firstDice.setAttribute('alt', dices[firstIndex][2]);
    secondDice.setAttribute('src', dices[secondIndex][0]);
    secondDice.setAttribute('alt', dices[secondIndex][2]);
    let winnerH2 = document.querySelector('.winner-h1');
    if (dices[firstIndex][1] > dices[secondIndex][1]) {
        winnerH2.innerHTML = 'First Player Wins!';
    }
    else if (dices[firstIndex][1] < dices[secondIndex][1]) {
        winnerH2.innerHTML = 'Second Player Wins!';
    }
    else if (dices[firstIndex][1] === dices[secondIndex][1]) {
        winnerH2.innerHTML = 'Draw!';
    }
}
//# sourceMappingURL=dicee.js.map