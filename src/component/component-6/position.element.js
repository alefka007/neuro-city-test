const box = document.querySelector('.box-1');
const boxInner = document.querySelector('.box-inner-1');

box.style.position = 'relative';
boxInner.style.position = 'absolute';

boxInner.style.left = box.clientWidth / 2 - boxInner.offsetWidth / 2 + 'px';
boxInner.style.top = box.clientHeight /  2 - boxInner.offsetHeight / 2 + 'px';

