let colours = ['orange','blue','red','yellow','green'];
let numberOfCircleIcons = 0;

function drawIconCircle(){
    numberOfCircleIcons++;
    let circleSize = 64;
    
    addNewCanvas();
    drawCircle(circleSize);
    
}

function addNewCanvas(){
    let newCanvas = document.createElement("canvas");
    newCanvas.setAttribute('id','circleIcon'+numberOfCircleIcons);
    var canvasAltText = document.createTextNode("Circle using canvas tag");
    newCanvas.appendChild(canvasAltText);

    let mainDiv = document.getElementById("mainWrapper");
    mainDiv.appendChild(newCanvas);
}

function drawCircle(sizeOfCircle){
        
    let circleCanvas = document.getElementById('circleIcon'+numberOfCircleIcons);
    circleCanvas.width = sizeOfCircle;
    circleCanvas.height = sizeOfCircle;
    
    let ctx = circleCanvas.getContext('2d');
    
    let circleX = sizeOfCircle/2;
    let circleY = sizeOfCircle/2;
    let circleSize = (sizeOfCircle/2)-2;
    
    //default for full circle
    let circleStart = 0 * Math.PI;
    let circleEnd = 2 * Math.PI;
    let drawAntiClockwise = false;

    
    ctx.beginPath();
    ctx.arc(circleX,circleY,circleSize,circleStart,circleEnd,drawAntiClockwise);
    // circle fill
    ctx.fillStyle = 'orange';
    ctx.fill();
    
    // circle stroke
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    
}

drawIconCircle();

/*
function draw1000circles(){
    for (i=0;i<1000;i++){
        drawIconCircle();
    }
}

draw1000circles();
*/