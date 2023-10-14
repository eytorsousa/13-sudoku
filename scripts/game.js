const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('rxc');

const game = document.querySelector('.game');


game.style.width = `calc(74px * ${value})`;


var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for(let i = 0; i < value; i++){
    for(let j = 0; j < value; j++){
        let block = document.createElement('input');
        block.type = 'number';
        block.max = '9';
        block.min = '1';
        block.classList.add('block');
        block.classList.add(`${letters[i]}`);
        block.classList.add(`${numbers[j]}`);
        game.appendChild(block);
    }
}

