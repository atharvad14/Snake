var canvas = document.getElementById('canvas');
var simulate = new simulation(canvas);
var isStarted = false;
var pressedKey;
// simulate.canvasGrid.drawgrid();
function key(keyCode) {
    pressedKey = keyCode;
    if (!isStarted) {
        isStarted = true;
        start();
    }
    // simulate.computeNextCoordinate(pressedKey);
}
function start() {
    animate();
}
function animate() {
    simulate.computeNextCoordinate(pressedKey);
    console.log(simulate.snakeCoordinates.length);
    for (var q = 0; q < 14000; q++)
        for (var w = 0; w < 10000; w++)
            ;
    if (simulate.animationIsOn) {
        window.requestAnimationFrame(animate);
    }
}
simulate.drawall();
//# sourceMappingURL=app.js.map