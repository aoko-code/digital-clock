const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
var radius = canvas.height/2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000)
drawClock();
function drawClock(){
    // ctx.arc(0, 0, radius, 0, 2 *Math.PI);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    updateClock(ctx, radius);
}
function updateClock(ctx, radius){
    //get hours, minutes and seconds from the computer
    // let now = new Date();
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    

    h = (h * Math.PI/6) + (m*Math.PI/ (6*60)) +(s*Math.PI/(360*60));
    drawHand(ctx, h, radius * 0.5, radius * 0.07)
    m = (m * Math.PI/30) + (s * Math.PI/ (30*60));
    drawHand(ctx, m, radius * 0.8, radius * 0.07)
    s = (s * Math.PI/30);

    drawHand(ctx, s, radius * 0.9, radius * 0.02)

}
function drawFace(ctx, radius){
    var grad;
    //draw outer circle
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'darkkhaki';
    ctx.fill();
    //gradient
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    //create 3d effect with colorstop
    grad.addColorStop(0, 'black');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, 'darkgoldenrod');
    ctx.strokeStyle = grad;
    //radius of the outer stroke
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    //draw the center dot
    ctx.beginPath();
    ctx.arc(0, 0, radius *0.1, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill();
}
function drawNumbers(ctx, radius){
    var angle;
    var num;
    ctx.font = radius * 0.15 + 'px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    //calculate print position
    for(num = 1; num < 13; num++){
        angle = num * Math.PI / 6;
        ctx.rotate(angle);
        ctx.translate(0, -radius *0.85)
        ctx.rotate(-angle);

        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-angle)
    }
}

function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos)
}
