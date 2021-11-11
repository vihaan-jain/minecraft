var canvas = new fabric.Canvas("my_canvas");

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_img_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == "80"){
        console.log("shift and p pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("Current_width").innerHTML=block_img_width;
        document.getElementById("Current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey == true && keypressed == "77"){
        console.log("shift and m pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("Current_width").innerHTML=block_img_width;
        document.getElementById("Current_height").innerHTML=block_img_height;
    }
 
    if(keypressed == "38"){
        up();
        console.log("up");
    }

    if(keypressed == "40"){
        down();
        console.log("down");
    }

    if(keypressed == "39"){
        right();
        console.log("right");
    }

    if(keypressed == "37"){
        left();
        console.log("left");
    }

    if(keypressed == "67"){
        new_image("cloud.jpg");
        console.log("c");
    }

    if(keypressed == "68"){
        new_image("dark_green.png");
        console.log("d");
    }

    if(keypressed == "71"){
        new_image("ground.png");
        console.log("g");
    }

    if(keypressed == "76"){
        new_image("light_green.png");
        console.log("l");
    }

    if(keypressed == "80"){
        new_image("player.png");
        console.log("p");
    }

    if(keypressed == "82"){
        new_image("roof.jpg");
        console.log("r");
    }

    if(keypressed == "84"){
        new_image("trunk.jpg");
        console.log("t");
    }

    if(keypressed == "85"){
        new_image("unique.png");
        console.log("u");
    }

    if(keypressed == "87"){
        new_image("wall.jpg");
        console.log("w");
    }

    if(keypressed == "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
}

function up(){

    if(player_y>=0){
        player_y=player_y-block_img_height;
        console.log("height of blocks=" + block_img_height);
        console.log("when up arrow is pressed x="+player_x +",y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function down(){

    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("height of blocks=" + block_img_height);
        console.log("when down arrow is pressed x="+player_x +",y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function left(){

    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("width of blocks=" + block_img_width);
        console.log("when left arrow is pressed x="+player_x +",y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function right(){

    if(player_x<=900){
        player_x=player_x+block_img_width;
        console.log("width of blocks=" + block_img_width);
        console.log("when right arrow is pressed x="+player_x +",y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}