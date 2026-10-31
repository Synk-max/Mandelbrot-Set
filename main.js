let centerX = -0.5;
let centerY = 0;
let size = 3    // the pictuer shows 3 math units
let maxIterations =255;   //how long we test each point
const width = 800;
const height =800;


function setup(){
    createCanvas(width,height);
    pixelDensity(1);
    noLoop();

    let reset = createButton('Reset');
    reset.mousePressed(resetView);
    createButton('CLick To travel').mousePressed(randomSpot);
}

function resetView(){
    centerX=-0.5
    centerY=0;
    size=3;
    maxIterations=255;
    redraw();


}

function draw(){
    loadPixels();
    for(let x=0;x<width;x++){
        for(let y=0;y<height;y++){
            let cx = centerX + (x / width - 0.5) * size;
            let cy = centerY + (y / height - 0.5) * size;

            let a=0,ib=0;
            var n=0;
            while(n<maxIterations){
                let za = a*a - ib*ib +cx;
                let zb = 2*a*ib +cy;
                a=za;
                ib=zb;
                if(za*za+zb*zb>4){
                    break;
                }
                n++;
            
            }

    

            let r=0,g=0,b=0;
            if(n<maxIterations){
                r=(n*0)%256;
                g=(n*9)%256;
                b=(n*20)%256;
            }
            //color for the pixel,width or height can be used
            let spot = (x+y*width) *4;
            pixels[spot]=r;
            pixels[spot+1]=g;
            pixels[spot+2]=b;
            pixels[spot +3]=255;
        }
    }    

updatePixels();
console.log('done drawing');
}

function countSteps(cx, cy) {
    // shortcut: these two big shapes are always inside
    let q = (cx - 0.25) * (cx - 0.25) + cy * cy;
    if (q * (q + (cx - 0.25)) <= 0.25 * cy * cy) {
        return maxIterations;
    }
    if ((cx + 1) * (cx + 1) + cy * cy <= 0.0625) {
        return maxIterations;
    }

    let a = 0;
    let ib = 0;
    let n = 0;
    while (n < maxIterations) {
        let za = a * a - ib * ib + cx;
        let zb = 2 * a * ib + cy;
        a = za;
        ib = zb;
        if (za * za + zb * zb > 4) {
            return n;          // flew away: give back the count
        }
        n = n + 1;
    }
    return n;                  // never flew away
}

function mousePressed(){
    console.log('clicked', mouseX, mouseY);     // add this line
    if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height) {
        return;
    }

    let clickX = centerX + (mouseX / width - 0.5) * size;
    let clickY = centerY + (mouseY / height - 0.5) * size;

    size /= 2;
    maxIterations += 30;

    centerX = clickX;
    centerY = clickY;
    console.log('click', mouseX, mouseY, '-> center', centerX, centerY, 'size', size);
    
    redraw();

}
function randomSpot() {
    maxIterations = 200;       // test with 200, and keep it if we find a spot
    for (let tries = 0; tries < 200; tries++) {
        let x = random(-2, 1);
        let y = random(-1.2, 1.2);
        let newSize = random(0.02, 0.5);

        let colored = 0;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let px = x + (i / 10 - 0.5) * newSize;
                let py = y + (j / 10 - 0.5) * newSize;
                if (countSteps(px, py) < maxIterations) {
                    colored = colored + 1;
                }
            }
        }

        if (colored >= 20 && colored <= 80) {
            centerX = x;
            centerY = y;
            size = newSize;
            redraw();
            return;
        }
    }
}