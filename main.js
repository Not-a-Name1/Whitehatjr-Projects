var mouseevent = "empty";
var last_position_X, last_position_Y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseevent = "mouseDown";
   
}
 canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_X = e.clientX - canvas.offsetLeft;
    current_Y = e.clientY - canvas.offsetTop;
    if (mouseevent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("last position of X & Y Coordinates = ");
    console.log("X = " + last_position_X + "Y = " + last_position_Y);
    ctx.moveTo(last_position_X, last_position_Y);
    console.log("Current position of X & Y Coordinates=");
    console.log("X = " + current_X + "Y = " + current_Y);
    ctx.lineTo(current_X, current_Y);
    ctx.stroke();
    }
    last_position_X = current_X;
    last_position_Y = current_Y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent = "mouseUp";
}
 
canvas.addEventListener("mouseleave", my_mouseleft);
function my_mouseleft(e){
    mouseevent = "mouseleave";
}
function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;
    if(width < 992)
    {
     document.getElementById("mycanvas").width = new_width;
     document.getElementById("mycanvas").height = new_height;
     document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        console.log("my_touchstart");
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
         last_position_of_x = e.touches[0].clientX - canvasoffsetLeft;
         last_position_of_y = e.touches[0].clientY - canvasoffsetTop;
        
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
 console.log("my_touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

