const title = document.querySelector('.title');
const qtd = document.querySelector('.rxc');
const main = document.querySelector('main');
const link = document.querySelector('.play');

setInterval(() => { 
    if(qtd.value >= 2){
        link.classList.remove('play_unable');
        link.classList.add('play_able');
    } else if(qtd.value < 2){
        link.classList.add('play_unable');
        link.classList.remove('play_able');  
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

qtd.addEventListener('focus', () => {
    title.classList.add('title_focus');
});

qtd.addEventListener('blur', () => {
    title.classList.remove('title_focus');
});