const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('rxc');
const verify = document.querySelector('.verify');
const game = document.querySelector('.game');
game.style.width = `calc(74px * ${value})`;

if(value > 9 || value < 2){
    window.alert('OPS! Valores inválidos de linhas e colunas!');
    window.location.href = 'index.html';
}

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var blocks;
var rows = [];
var cols = [];

for(let i = 0; i < value; i++){
    for(let j = 0; j < value; j++){
        let block = document.createElement('input');
        block.type = 'number';
        block.classList.add('block');
        block.classList.add(`${letters[i]}`);
        block.classList.add(`n${numbers[j]}`);
        game.appendChild(block);
    }
}

createArrays();
setvalues();

setInterval(() => {
    blocks.forEach(element => {
        if(element.value < 1 && element.value != ''){
            element.value = 1;
        } else if(element.value > value && element.value != ''){
            element.value = value;
        } else if(element.value.length != 1){
            element.value = '';
        }
    });
}, 100);

verify.addEventListener('click', () => {
    var win = verifyInputs(win);

    if(win){
        window.alert('Parabéns, você venceu!');
    }
});

function createArrays(){
    blocks = Array.from(document.querySelectorAll('.block'));
    for(let i = 0; i < value; i++){
        rows[i] = Array.from(document.querySelectorAll(`.${letters[i]}`));
        cols[i] = Array.from(document.querySelectorAll(`.n${numbers[i]}`));
    }
}

function setvalues(){
    let atualNumbers = setAtualNumbers();
    let flag = Math.floor(Math.random() * 2);
    rows.forEach(row => {
        if(flag % 2 == 0){
            let position = Math.floor(Math.random() * value);
            let num = atualNumbers[Math.floor(Math.random() * atualNumbers.length)]; 
            atualNumbers = removeNumber(atualNumbers, num);
            
            row[position].disabled = true;
            row[position].value = num;
            row[position].classList.add('blocked');
            
            flag++;
        } else{
            flag++;
        }
        
    });
}

function setAtualNumbers(){
    let atualNumbers = [];
    for(let i = 0; i < value; i++){
        atualNumbers[i] = i+1;
    }

    return atualNumbers;
}

function removeNumber(array, value){
    let index = array.indexOf(value);

    if(index !== -1){
        array.splice(index, 1);
    }

    return array;
}

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
