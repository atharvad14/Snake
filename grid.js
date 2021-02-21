class cell {
    constructor(border0, length, height, i, j, canvas) {
        this.border = []; //Border points
        this.choice = 0;
        this.context = canvas.getContext("2d");
        this.i = i;
        this.j = j;
        this.canvas = canvas;
        //Imaginary bounding square used to calculate isinside function
        this.border.push(new Point(border0.x, border0.y)); //Min x,y
        this.border.push(new Point(border0.x + length, border0.y));
        this.border.push(new Point(border0.x, border0.y + height));
        this.border.push(new Point(border0.x + length, border0.y + height)); //Max x,y
        this.centre = new Point(border0.x + length / 2, border0.y + height / 2);
    }
    drawborder() {
        var l = new line(this.border[0], this.border[1], this.canvas);
        l.draw();
        var l = new line(this.border[1], this.border[3], this.canvas);
        l.draw();
        var l = new line(this.border[2], this.border[0], this.canvas);
        l.draw();
        var l = new line(this.border[3], this.border[2], this.canvas);
        l.draw();
    }
    fillborder(color) {
        this.context.save();
        this.context.beginPath();
        // this.context.fillStyle = "#42adc0";
        this.context.fillStyle = color;
        this.context.fillRect(this.border[0].x, this.border[0].y, 10, 10);
        this.context.fill();
        this.context.closePath();
        this.context.restore();
    }
    fillhead(color, backward, isHorizontalMotion) {
        this.context.save();
        this.context.beginPath();
        // this.context.fillStyle = "#42adc0";
        this.context.fillStyle = color;
        if (isHorizontalMotion) {
            if (backward) {
                this.context.fillRect(this.border[0].x + 5, this.border[0].y, 10, 10);
                this.context.arc(this.centre.x, this.centre.y, 5, Math.PI / 2, 3 * Math.PI / 2);
            }
            else {
                this.context.fillRect(this.border[0].x, this.border[0].y, 5, 10);
                this.context.arc(this.centre.x, this.centre.y, 5, -Math.PI / 2, Math.PI / 2);
            }
        }
        else {
            if (backward) {
                this.context.fillRect(this.border[0].x, this.border[0].y + 5, 10, 10);
                this.context.arc(this.centre.x, this.centre.y, 5, Math.PI, 0);
            }
            else {
                this.context.fillRect(this.border[0].x, this.border[0].y, 10, 5);
                this.context.arc(this.centre.x, this.centre.y, 5, Math.PI, 2 * Math.PI, true);
            }
        }
        this.context.fill();
        this.context.beginPath();
        this.context.arc(this.centre.x, this.centre.y, 2, 0, 2 * Math.PI);
        this.context.fillStyle = "black";
        this.context.fill();
        this.context.closePath();
        this.context.restore();
    }
}
class grid {
    constructor(row, col, canvas) {
        this.border = [];
        this.row = row;
        this.col = col;
        this.canvas = canvas;
        for (var i = 0; i < row; i++) {
            this.border[i] = [];
        }
        // this.border = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        var x = 0;
        var y = 0;
        for (var i = 0; i < col; i++) {
            for (var j = 0; j < row; j++) {
                this.border[i].push(new cell(new Point(x, y), 10, 10, i, j, this.canvas)); //Creates imaginary grid
                y = y + 10;
                this.border[i][j].active = true;
            }
            y = 0;
            x = x + 10;
        }
    }
    isinside(centre) {
        //Is inside logic which returns the border (object of cell) where you have clicked
        var p;
        var finalpoint;
        for (var i = 0; i < this.row; i++) ///Check all borders
         {
            for (var j = 0; j < this.col; j++) {
                var x1, y1, xmin, ymin, xmax, ymax;
                var A = [];
                x1 = centre.x;
                y1 = centre.y;
                xmin = this.border[i][j].border[0].x;
                xmax = this.border[i][j].border[3].x;
                ymin = this.border[i][j].border[0].y;
                ymax = this.border[i][j].border[3].y;
                y1 > ymax ? A.push(1) : A.push(0);
                y1 < ymin ? A.push(1) : A.push(0);
                x1 > xmax ? A.push(1) : A.push(0);
                x1 < xmin ? A.push(1) : A.push(0);
                var result = (A[0] || A[1] || A[2] || A[3]); //Result equal to zero implies Point lies inside
                if (result != 0) {
                }
                if (result == 0) {
                    finalpoint = this.border[i][j].centre;
                    return this.border[i][j];
                }
            }
        }
        // return (new Point(-100,-100));
    }
    drawgrid() {
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                this.border[i][j].drawborder();
            }
        }
    }
}
//# sourceMappingURL=grid.js.map