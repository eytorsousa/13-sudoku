const title = document.querySelector('.title');
const qtd = document.querySelector('.rxc');
const btnPlay = document.querySelector('.play');

qtd.addEventListener('focus', () => {
    title.classList.add('title_focus');
});

qtd.addEventListener('blur', () => {
    title.classList.remove('title_focus');
});

btnPlay.addEventListener('mouseenter', () => {
    btnPlay.classList.add('play_focus');
});

btnPlay.addEventListener('mouseout', () => {
    btnPlay.classList.remove('play_focus');
});