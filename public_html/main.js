
function addNewCanvas(){
    let newCanvas = document.createElement("canvas");
    newCanvas.setAttribute('id','circle-canvas');

    var canvasAltText = document.createTextNode("Circle using canvas tag");
    newCanvas.appendChild(canvasAltText);

    let mainDiv = document.getElementById("mainWrapper");
    mainDiv.appendChild(newCanvas);
}

function drawCircle(sizeOfCanvas){
    addNewCanvas();
    
    let circleCanvas = document.getElementById('circle-canvas');
    circleCanvas.width = sizeOfCanvas;
    circleCanvas.height = sizeOfCanvas;
    
    let ctx = circleCanvas.getContext('2d');
    
    let circleX = sizeOfCanvas/2;
    let circleY = sizeOfCanvas/2;
    let circleSize = (sizeOfCanvas/2)-2;
    
    //default for full circle
    let circleStart = 0 * Math.PI;
    let circleEnd = 2 * Math.PI;
    let drawClockwise = true;
    
    ctx.beginPath();
    ctx.arc(circleX,circleY,circleSize,circleStart,circleEnd,drawClockwise);
    
    // circle fill
    ctx.fillStyle = 'orange';
    ctx.fill();
    
    // circle stroke
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    
}

drawCircle(64);


