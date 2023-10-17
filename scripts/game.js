const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('rxc');
const verify = document.querySelector('.verify');
var blocks;
var rows = [];
var cols = [];

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
        block.classList.add(`n${numbers[j]}`);
        game.appendChild(block);
    }
}

blocks = Array.from(document.querySelectorAll('.block'));
for(let i = 0; i < value; i++){
    rows[i] = Array.from(document.querySelectorAll(`.${letters[i]}`));
    cols[i] = Array.from(document.querySelectorAll(`.n${numbers[i]}`));
}

verify.addEventListener('click', () => {
    var win;
    
    win = verifyInputs(win);

    if(win){
        window.alert('Parabéns, você venceu!');
    }
});

function verifyInputs(win){
    for(let i = 0; i < blocks.length; i++){
        if(blocks[i].value === '' || blocks[i].value === ' '){
            window.alert("OPS!\nParece que você não preencheu todos os espaços...");
            return false;
        }
    }

    var rxc = [rows, cols];
    for(let i = 0; i < 2; i++){
        win = verifyRC(rxc[i]);
        if(!win){
            window.alert(`OPS!\nParece que existem números iguais em uma mesma linha ou coluna`);
            return false;
        }
    }

    return true;
}

function verifyRC(array){
    let win;
    array.forEach(list => {
        for(let i = 0; i < list.length; i++){
            for(let j = i + 1; j < list.length; j++){
                if(list[i].value === list[j].value){
                    win = false;
                }
            }
        }
    });

    if(win === false){
        return false;
    } else {
        return true;
    }
}
