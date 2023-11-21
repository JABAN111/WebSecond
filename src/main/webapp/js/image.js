const canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext('2d');

let w = canvas.width,
    h = canvas.height;

const hatchWidth = 20 / 2;
const hatchGap = 56;

let currentRadius = null;

let sections = [
    {
        name: "first_quarter",
        draw: () => {
            ctx.beginPath();
            ctx.fillStyle = "#0B04D5";
            ctx.moveTo(w / 2, h / 2 - hatchGap * 2);
            ctx.lineTo(w / 2 + hatchGap * 2, h / 2);
            ctx.lineTo(w/2,h/2);
            ctx.lineTo(w/2,h/2-hatchGap*2);
            ctx.fill();
            ctx.stroke();
        }
    },
    {
        name: "second_quarter",
        draw: () => {
            ctx.beginPath();
            ctx.fillStyle = "#0B04D5";
            ctx.moveTo(w / 2, h / 2);
            ctx.fillRect(w / 2, h / 2, -hatchGap * 2, -hatchGap * 2);
            // ctx.stroke(); // Убрал эту строку
            ctx.closePath();
        }
    },
    {
        name: "fourth_quarter",
        draw: () => {
            ctx.beginPath();
            ctx.fillStyle = "#0B04D5";
            ctx.moveTo(w/2+hatchGap,h/2);
            ctx.lineTo(w/2,h/2+hatchGap);
            ctx.lineTo(w/2,h/2);
            ctx.lineTo(w/2,h/2-hatchGap*2);
            ctx.arc(w / 2, h / 2, hatchGap, 0, Math.PI / 2);
            ctx.fill();
            ctx.closePath();
        }
    }
];

function redrawGraph() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    for (const section of sections) {
        section.draw();
    }
    drawAxesAndHatch();
}
function setRadius(newRadius) {
    currentRadius = newRadius;
    redrawGraph();
}
function drawAxesAndHatch() {
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
    numCoord();
}
/*Ставит числа рядом со штрихами в соответствии с выбранным R*/
function numCoord(){
    if(currentRadius === null)
        return;
    ctx.font = "20px Segue UI";
    ctx.fillStyle = "black";
    const indent = 20;
    //ось x, положительная часть
    ctx.fillText(`${currentRadius/2}`, w/2+hatchGap,h/2+indent);
    ctx.fillText(`${currentRadius}`, w/2+hatchGap*2,h/2+indent);

    //ось x, отрицательная часть
    ctx.fillText(`${-currentRadius/2}`, w/2-hatchGap,h/2+indent);
    ctx.fillText(`${-currentRadius}`, w/2-hatchGap*2,h/2+indent);

    //ось y, положительная часть
    ctx.fillText(`${currentRadius/2}`, w/2+indent,h/2-hatchGap);
    ctx.fillText(`${currentRadius}`, w/2+indent,h/2-hatchGap*2);

    //ось y, отрицательная часть
    ctx.fillText(`${currentRadius/2}`, w/2+indent,h/2+hatchGap);
    ctx.fillText(`${currentRadius}`, w/2+indent,h/2+hatchGap*2);
}
function printDotOnGraph(xCenter, yCenter, isHit) {
    redrawGraph();
    ctx.fillStyle = isHit ? '#1AFF00' : '#ff0000'
    let x = w / 2 + xCenter * hatchGap * (2 / currentRadius);
    let y = h / 2 - yCenter * hatchGap * (2 / currentRadius);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

redrawGraph();

const mouse = {
    x: 0,
    y: 0
    //возможно стоит назначить статусы над координатной плоскостью или нет
}
// canvas.addEventListener("click",mouseHandler);
// function mouseHandler(event){
//     if(currentRadius === null){
//         return;
//     }
//     const rect = canvas.getBoundingClientRect();
//     mouse.x = event.clientX - rect.left;
//     mouse.y = event.clientY - rect.top;
//
//     // ctx.beginPath();
//     // ctx.arc(w/2+hatchGap,h/2 - hatchGap,3,0,Math.PI*2);
//     // ctx.fillStyle = "red"
//     // ctx.fill();
//
//     // animation.render();
//     // animation.clear();
//     return clickingProcessing(mouse.x, mouse.y);
// }
// function clickingProcessing(clicked_x,clicked_y) {
//     let x = (((clicked_x - w / 2) / hatchGap) / 2) * currentRadius;
//     let y = -(((clicked_y - h / 2) / hatchGap) / 2) * currentRadius;
//     console.log(x, y);
//     return {
//         x: x,
//         y: y,
//     }
// }
    // const rect = canvas.getBoundingClientRect();
    // ctx.fillStyle = '#ff0000';
    // ctx.beginPath();
    // ctx.arc(clicked_x, clicked_y, 1, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.closePath();

// let Rpicked = function(radius) {
//     // const canvas = document.getElementById('myCanvas');
//     // const ctx = ca   nvas.getContext('2d');
//
//     canvas.addEventListener('click', function(event) {
//         const rect = canvas.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;
//
//         // ctx.beginPath();
//         // ctx.arc(200, 75, radius, 0, 2 * Math.PI);
//         // ctx.fill();
//         // ctx.closePath();
//
//         // console.log(`X: ${x}, Y: ${y}, Radius: ${radius}\nIs Point In Path: ${ctx.isPointInPath(x, y)}`);
//
//         if (ctx.isPointInPath(x, y)) {
//
//             alert("You clicked inside the filled area");
//         }
//     });
// }