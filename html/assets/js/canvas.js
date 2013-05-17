var c=document.getElementById("miImagenCanvas");
var ctx=c.getContext("2d");

ctx.moveTo(50,50); ctx.lineTo(0,50); ctx.stroke();
ctx.moveTo(50,50); ctx.lineTo(50,0); ctx.stroke();
ctx.moveTo(50,50); ctx.lineTo(100,50); ctx.stroke();
ctx.moveTo(50,50); ctx.lineTo(50,100); ctx.stroke();

var c=document.getElementById("miTextoCanvas");
var ctx=c.getContext("2d");
ctx.font="30px Arial";
ctx.fillText("Hola mundo!",10,50);

var c=document.getElementById("miImagenCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(50,50,50,0,2*Math.PI);
ctx.stroke();