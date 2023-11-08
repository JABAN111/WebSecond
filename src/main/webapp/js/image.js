const canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext('2d');

let w = canvas.width,
    h = canvas.height;

const hatchWidth = 20 / 2;
const hatchGap = 56;

function redrawGraph() {
    ctx.clearRect(0, 0, w, h);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';

    // y ось
    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2 - 10, 15);
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2 + 10, 15);
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();
    ctx.closePath();

    // x ось
    ctx.beginPath();
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - 15, h / 2 - 10);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - 15, h / 2 + 10);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(0, h / 2);
    ctx.stroke();
    ctx.closePath();
    //штрихи
    ctx.beginPath();
    ctx.moveTo(w / 2 - hatchWidth, h / 2 - hatchGap);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 - hatchGap);
    ctx.moveTo(w / 2 - hatchWidth, h / 2 - hatchGap * 2);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 - hatchGap * 2);
    ctx.moveTo(w / 2 - hatchWidth, h / 2 + hatchGap);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 + hatchGap);
    ctx.moveTo(w / 2 - hatchWidth, h / 2 + hatchGap * 2);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 + hatchGap * 2);
    ctx.moveTo(w / 2 - hatchGap, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 - hatchGap, h / 2 + hatchWidth);
    ctx.moveTo(w / 2 - hatchGap * 2, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 - hatchGap * 2, h / 2 + hatchWidth);
    ctx.moveTo(w / 2 + hatchGap, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 + hatchGap, h / 2 + hatchWidth);
    ctx.moveTo(w / 2 + hatchGap * 2, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 + hatchGap * 2, h / 2 + hatchWidth);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#0B04D5";
    // 2 четверть
    ctx.moveTo(w / 2, h / 2);
    ctx.fillRect(w / 2, h / 2, -hatchGap * 2, -hatchGap * 2);
    // 1 четверть
    ctx.fillStyle = "#0B04D5";
    ctx.moveTo(w / 2, h / 2 - hatchGap * 2);
    ctx.lineTo(w / 2 + hatchGap * 2, h / 2)
    //4 четверть
    ctx.arc(w / 2, h / 2, hatchGap, 0, Math.PI / 2);
    ctx.fill();
    ctx.stroke();
}
redrawGraph()
function printDotOnGraph(xCenter, yCenter, R, isHit) {
    redrawGraph();
    ctx.fillStyle = isHit ? '#1AFF00' : '#ff0000'
    let x = w / 2 + xCenter * hatchGap * (2 / R);
    let y = h / 2 - yCenter * hatchGap * (2 / R);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
