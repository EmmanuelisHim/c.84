canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
width=100;
height = 90;
roverX = 10;
roverY = 10;
background_image = "mars.jpeg";
rover_image = "rover.png";
function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, cnavas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, roverX, roverY, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38');{
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37');{
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    
}
