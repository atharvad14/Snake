class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class line {
    constructor(start, end, canvas) {
        this.start = start;
        this.end = end;
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }
    draw() {
        this.context.beginPath();
        this.context.moveTo(this.start.x, this.start.y);
        this.context.lineTo(this.end.x, this.end.y);
        this.context.lineWidth = 2;
        this.context.strokeStyle = "black";
        this.context.stroke();
    }
}
//# sourceMappingURL=elements.js.map