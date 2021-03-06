var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


var radius=10;
var dragging=false;
context.lineWidth=radius*2;


var putPoint=function(e){
	if(dragging){
		context.lineTo(e.clientX,e.clientY);
		context.stroke();
	context.beginPath();
	context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
context.fill();
context.beginPath();
context.moveTo(e.clientX,e.clientY);
	}
}
	
	var engage=function()
	{
		dragging=true;
		putPoint(e);
	}
	var disengage=function()
	{
		dragging=false;
		context.beginPath();
	}
	

canvas.addEventListener('mousemove',putPoint); 
canvas.addEventListener('mouseup',engage);
canvas.addEventListener('mousedown',disengage);