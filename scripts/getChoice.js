const title = document.querySelector('.title');
const qtd = document.querySelector('.rxc');
const main = document.querySelector('main');

qtd.addEventListener('focus', () => {
    title.classList.add('title_focus');
});

qtd.addEventListener('blur', () => {
    title.classList.remove('title_focus');
});

var flag = false;
var link;

setInterval(() => {
    if(qtd.value !== ''){
        if(!flag){  
            link = document.createElement('a');
            link.textContent = 'Play';
            link.href = `game.html?rxc=${qtd.value}`;
            link.classList.add('play');

            main.appendChild(link);
            flag = true;
        }
    }
}, 100);

setInterval(() => { 
    if(qtd.value >= 2){
        if(flag){
            link.classList.remove('play_unable');
            link.classList.add('play_able');
        }
    }

    if(qtd.value < 2){
        if(flag){
            link.classList.add('play_unable');
            link.classList.remove('play_able');  
        }
    } 

    if(qtd.value > 9){
        qtd.value = 9;
    } else if(qtd.value < 0){
        qtd.value = 0;
    }

    if(link){
        if(qtd.value >= 2){
            link.href = `game.html?rxc=${qtd.value}`;
        } else {
            link.href = 'javascript:void(0)';
        }

        link.addEventListener('mouseenter', () => {
            if(qtd.value >= 2){
                link.classList.add('play_focus');
            }
        });
        
        link.addEventListener('mouseout', () => {
            link.classList.remove('play_focus');
        });
    }
}, 100);
