var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
var context: CanvasRenderingContext2D = canvas.getContext('2d');
window.addEventListener("keydown",moveSomething,false);
// alert("key")
function moveSomething(e)
{
    key(e.keyCode);
    e.preventDefault();
}