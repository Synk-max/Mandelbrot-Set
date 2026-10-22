const c = document.getElementById('canvas')
const ctx = c.getContext("2d")
const imgData = ctx.createImageData(360, 360)
const startView = { x: -0.5, y: 0, scale: 3/360 }
let view = { ...startView };
c.style.border = "1px solid black"

function MathScale(px,py){
    return {
        x: view.x +(px-360/2)*view.scale,
        y: view.y +(py-360/2)*view.scale,
    }
}

function imaginary(x1,y1){
    var z=[0,0]
    var c=[x1,y1]
    for(var i=0;i<255;i++){
        var z2 = [
        z[0]*z[0] - z[1]*z[1],
        z[0]*z[1]+z[0]*z[1]
    ]
        z=[z2[0]+c[0],
        z2[1]+c[1]]

        if(Math.sqrt(z[0]*z[0]+z[1]*z[1])>4){
            return i
         }
        
}
    return -1
}
var imgdata = ctx.createImageData(360, 360);
for(var y=0;y<360;y++){
    for(var x=0;x<360;x++){
        var i = (x + y * 360) * 4;

        var x1 = (x/360)*4-2;
        var y1 = (y/360)*4-2;
        var distance = Math.floor(Math.sqrt(x1*x1+y1*y1) * (255/2));
        
        const a = imaginary(x1,y1);
        if(a===-1){
            imgData.data[i+0] = 0
            imgData.data[i+1] = 0
            imgData.data[i+2] = 0
           
        } else{
            imgData.data[i+0] = 0
            imgData.data[i+1] = Math.min(a*20,255)
            imgData.data[i+2] = 0
            
        }
        imgData.data[i+3] = 255

    }
}
       
function zoom_in(){
    const m = MathScale(px,py)
    view.scale *= factor
    view.x = m.x - (px-180)*view.scale
    view.y = m.y - (py-180)*view.scale
    imaginary();
    


}





