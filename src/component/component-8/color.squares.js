function getRandomSquare() {
    setInterval(() => {
        const box = document.querySelector('.box-color');
        let numSquares = Math.floor(Math.random() * 100);
        numSquares < 10 ? numSquares = 10 : numSquares;
        for (let i = 0; i < numSquares; i++) {
            let smBox = document.createElement('div');
            smBox.className = 'small-box';
            box.append(smBox);
            getRandomColor(smBox);
            setTimeout(() => smBox.remove(), 1000);
        }                       
    }, 1000);
}
getRandomSquare()

function getRandomColor(el) {                                
    let color = '';
    let colors = '0123456789abcdef';
    for (let j = 0; j < 6; j++) {
        color += colors[Math.floor(Math.random() * 16)];
        el.style.backgroundColor = '#' + color;
    }
}


