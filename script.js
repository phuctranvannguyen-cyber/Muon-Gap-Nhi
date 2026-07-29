const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);

let hearts = [];

class Heart{

    constructor(){

        this.x = window.innerWidth/2 + 30;

        this.y = window.innerHeight - 120;

        this.size = Math.random()*10 + 8;

        this.speedY = Math.random()*2 + 2;

        this.speedX = (Math.random()-0.5)*2;

        this.alpha = 1;

    }

    update(){

        this.y -= this.speedY;

        this.x += this.speedX;

        this.alpha -= 0.005;

    }

    draw(){

        ctx.save();

        ctx.globalAlpha = this.alpha;

        ctx.fillStyle="#ff5c9d";

        drawHeart(this.x,this.y,this.size);

        ctx.restore();

    }

}

function drawHeart(x,y,size){

    ctx.beginPath();

    ctx.moveTo(x,y);

    ctx.bezierCurveTo(
        x-size,
        y-size,
        x-size*2,
        y+size/2,
        x,
        y+size*2
    );

    ctx.bezierCurveTo(
        x+size*2,
        y+size/2,
        x+size,
        y-size,
        x,
        y
    );

    ctx.fill();

}
function createHeart(){

    hearts.push(new Heart());

}

setInterval(createHeart,80);

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    hearts.forEach((heart,index)=>{

        heart.update();

        heart.draw();

        if(heart.alpha<=0){

            hearts.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();