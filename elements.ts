class Point {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    } 
}
class line {
    start: Point;
    end: Point;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    constructor(start: Point, end: Point, canvas: HTMLCanvasElement) {
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
