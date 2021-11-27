document.querySelector('.package').addEventListener('click', debounce(showElement, 1000));
const imgContainer = document.querySelector('.img-container');

function showElement() {
    imgContainer.classList.contains('hide') ?
    imgContainer.classList.remove('hide') :
    imgContainer.classList.add('hide');
};

function debounce(func, ms) {
    let timeout;

    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, ms);
    }
};
