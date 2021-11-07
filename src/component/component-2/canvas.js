const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = '800';
canvas.height = '600';

const square = {
    positionX: canvas.width / 4 - 100,
    positionY: canvas.height / 4 - 100,
    translate: 0,
    translateX: 1
}

const rectangle = {
    positionX: 600 - 300 / 2,
    positionY: 150 - 200 / 2,
    translate: 0,
    translateY: 1
}

const circle = {
    positionX: 600,
    positionY: 450,
    angle: 0,
    angleSpeed: Math.PI * 0.01,
    radius: 120
}

const triangle = {
    positionX: 200,
    positionY: 450,
    angle: 0,
    angleSpeed: -Math.PI * 0.01,
    radius: 150,
    dAngle: (Math.PI * 2) / 3
}

animation({
    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    update() {
        triangle.angle += triangle.angleSpeed;
        circle.angle += circle.angleSpeed;
        square.translate += square.translateX;
        rectangle.translate += rectangle.translateY;
    },

    render() {
        ctx.shadowColor = "#000000";
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.shadowBlur = 5;
        
        ctx.fillStyle = '#FFFF00';
        ctx.fillRect(
            square.positionX + square.translate,
            square.positionY,
            200,
            200
        );

        if (square.translate === 50) square.translateX -= 1;
        if (square.translate === 0) square.translateX += 1;

        ctx.fillStyle = '#FF0000';
        ctx.fillRect(
            rectangle.positionX,
            rectangle.positionY + rectangle.translate,
            300,
            200
        );

        if (rectangle.translate === 30) rectangle.translateY -= 1;
        if (rectangle.translate === -30) rectangle.translateY += 1;
    
        ctx.beginPath();
        ctx.moveTo(
            triangle.positionX  + triangle.radius * Math.cos(triangle.angle),
            triangle.positionY + triangle.radius * Math.sin(triangle.angle)
        );
        ctx.lineTo(
            triangle.positionX + triangle.radius * Math.cos(triangle.angle + triangle.dAngle),
            triangle.positionY + triangle.radius * Math.sin(triangle.angle + triangle.dAngle)
        );
        ctx.lineTo(
            triangle.positionX + triangle.radius * Math.cos(triangle.angle + 2 * triangle.dAngle),
            triangle.positionY + triangle.radius * Math.sin(triangle.angle + 2 * triangle.dAngle)
        );
        ctx.closePath();
        ctx.fillStyle = '#0000FF';
        ctx.fill();
    
        ctx.beginPath();
        ctx.arc(
            550 + 30 * Math.cos(circle.angle),
            440 + 30 * Math.sin(circle.angle),
            circle.radius,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = '#008000';
        ctx.fill();
    }
})

function animation(obj) {
    const {clear, update, render} = obj;
    let prevTime = 0;
    
    requestAnimationFrame(tick);

    function tick(time) {
        requestAnimationFrame(tick);
        
        const diff = time - prevTime;
        prevTime = time;

        const params = {
            time,
            prevTime,
            diff
        }

        update(params);
        clear();
        render(params);
    }
}