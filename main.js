canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_position_x,last_position_y;
  
color="pink";
width_of_line=4;

canvas.addEventListener("mousedown",my_mousedown);

canvas.addEventListener("mouseup",my_mouseup);

canvas.addEventListener("mouseleave",my_mouseleave);

canvas.addEventListener("mousemove",my_mousemove);

function my_mousedown (e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    
    mouseEvent="mousedown";
}
function my_mouseup (e){
    mouseEvent="mouseup";
}
function my_mouseleave (e){
    mouseEvent="mouseleave";
}
function my_mousemove (e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
        console.log("last position x "+last_position_x);
        console.log("last position y "+last_position_y);
        console.log("current position x "+current_position_x);
        console.log("current position y "+current_position_y);

    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;
}
