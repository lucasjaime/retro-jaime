const open = document.getElementById('open');
const modal_map1 = document.getElementById('modal_map1');
const close = document.getElementById('close');
const open2 = document.getElementById('open2');
const modal_map2 = document.getElementById('modal_map2');
const close2 = document.getElementById('close2');

open.addEventListener('click', () => {
    modal_map1.classList.add ('show');
});
close.addEventListener('click', () => {
    modal_map1.classList.remove('show');
});

open2.addEventListener('click', () => {
    modal_map2.classList.add('show2');
});

close2.addEventListener('click', () => {
    modal_map2.classList.remove('show2');
});