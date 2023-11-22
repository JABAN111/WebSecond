// let Rpicked = function(radius) {
//     const canvas = document.getElementById('myCanvas');
//     const ctx = canvas.getContext('2d');
//
//     canvas.addEventListener('click', function(event) {
//         const rect = canvas.getBoundingClientRect();
//         console.log(rect.toJSON());
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;
//
//         // ctx.beginPath();
//         // ctx.arc(200, 75, radius, 0, 2 * Math.PI);
//         // ctx.fill();
//         // ctx.closePath();
//
//         console.log(`X: ${x}, Y: ${y}, Radius: ${radius}\nIs Point In Path: ${ctx.isPointInPath(x, y)}`);
//
//         if (ctx.isPointInPath(x, y)) {
//             alert("You clicked inside the filled area");
//         }
//     });
// }
//
// // Example Usage

