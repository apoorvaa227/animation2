
// const canvas = document.getElementById('canvas1');

// const ctx = canvas.getContext('2d');
// console.log(ctx);
// Get a reference to the canvas element
const canvas = document.getElementById('canvas1');
const particlesArray = [];
let hue = 0;
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize' , function(){
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ctx.fillStyle ='white';

// ctx.fillRect( 10 , 20 ,   150  , 50 );
});
// Set the rectangle properties
// const x = 50; // X-coordinate of the top-left corner
// const y = 50; // Y-coordinate of the top-left corner
// const width = 200; // Width of the rectangle
// const height = 100; // Height of the rectangle

// // Draw the rectangle
// ctx.fillStyle = 'blue'; // Fill color
// ctx.fillRect(x, y, width, height);   

// ctx.fillStyle ='white';
// // x  y co ordinate width and height 
// ctx.fillRect( 10 , 20 ,   150  , 50 );

const mouse = {
    x: this.x,
    y: this.y,

}
// canvas.addEventListener('click' , function( event)
// {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     // drawCircle();
//     for( let i = 0; i  < 100 ; i++){
//        

//     }
// });

canvas.addEventListener('mousemove' , function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for( let i = 0; i  < 5; i++){
        particlesArray.push(new Particle());
    }
    // drawCircle();
})

// function drawCircle (){
// ctx.fillStyle ='red';
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.arc( mouse.x, mouse.y, 50 , 0 , Math.PI*2);
// // arc not not onliy draws a circle its used to create curved line or a smicircle 
// ctx.fill();
// ctx.stroke();
// }

class Particle{
    constructor()
    {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random()* canvas.width;
        // this.y = Math.random()* canvas.height;
        this.size = Math.random() * 15 +1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY  = Math.random() * 3 - 1.5;
    }
    update()
    {
       this.x +=  this.speedX;
       this.y += this.speedY;
       if( this.size > 0.2)
       this.size -= 0.1;
    }

       

     draw()
     {
        
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';

        // ctx.strokeStyle = 'blue';
        // ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.size , 0 , Math.PI * 2);
        // arc not not onliy draws a circle its used to create curved line or a smicircle 
        ctx.fill();
        // ctx.stroke();
     }

}
// function init(){
//     for( let i = 0; i < 100; i++)
//     {
//         particlesArray.push(new Particle());
//     }
// }
// init();
// console.log(particlesArray);
 function handleParticle(){
    for( let i = 0; i  < particlesArray.length; i++)
    {   
        particlesArray[i].update();
        particlesArray[i].draw();
        for( let j = i; j  < particlesArray.length; j++)
        {
           const dx = particlesArray[i].x - particlesArray[i].x;
            const dy = particlesArray[j].y - particlesArray[j].y;
            const distance =  Math.sqrt( dx*dx+ dy*dy);
        
            // if( distance  < 100)
            // {
            //   ctx.beginPath();
            //   ctx.strokeStyle = particlesArray[i].color;
            //   ctx.lineWidth = particlesArray[i].size;
            //   ctx.moveTo( particlesArray[i].x , particlesArray[i].y);
            //   ctx.lineTo( particlesArray[j].x, particlesArray[j].y);
            //   ctx.stroke();
            //   ctx.closePath();
              
            //  }
        }
        
        if(particlesArray[i].size <= 0.3)
        {
            particlesArray.splice(i , 1);
           
            console.log( particlesArray.length);
            i--;
        }

    }
 }
function animate()
{
// ctx.clearRect( 0 , 0 ,  canvas.width  , canvas.height);
ctx.fillStyle = 'rgba( 0 , 0 , 0  , 0.01)';
ctx.fillRect( 0  , 0 , canvas.width , canvas.height);
handleParticle();
 hue+=10;
//  drawCircle();
requestAnimationFrame( animate);


 // it just call function we pass it as in arguments it calls it only once 
}
animate();