class simulation {
    constructor(canvas) {
        this.snakeCoordinates = [];
        this.currentKeyCode = 39;
        this.isHorizontalMotion = true;
        this.start = -Math.PI / 2;
        this.end = Math.PI / 2;
        this.animationIsOn = true;
        this.score = 0;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.canvasGrid = new grid(50, 50, canvas);
        this.snakeCoordinates.push(new Point(7, 10));
        this.snakeCoordinates.push(new Point(8, 10));
        this.snakeCoordinates.push(new Point(9, 10));
        this.snakeCoordinates.push(new Point(10, 10));
        this.snakeCoordinates.push(new Point(11, 10));
        this.snakeCoordinates.push(new Point(12, 10));
        this.snakeCoordinates.push(new Point(13, 10));
        this.canvasGrid.border[20][20].fillborder("blue");
        this.fruitCoordinate = this.random();
        // this.canvasGrid.drawgrid();
    }
    random() {
        var x = 49 * Math.random();
        var y = 49 * Math.random();
        Math.ceil;
        var pt = new Point(Math.ceil(x), Math.ceil(y));
        if (this.isPresent(pt)) {
            return this.random();
        }
        return pt;
    }
    isPresent(nextPoint) {
        for (var i = 0; i < this.snakeCoordinates.length - 1; i++) {
            if (nextPoint.x == this.snakeCoordinates[i].x && nextPoint.y == this.snakeCoordinates[i].y) {
                return true;
            }
        }
        return false;
    }
    computeNextCoordinate(keyCode) {
        // alert("Simulation = " + keyCode)
        let tempPoints = [];
        let isOpp;
        switch (keyCode) {
            case 37: //Move Back
                {
                    if (this.currentKeyCode != 39) {
                        let nextPoint = new Point((this.snakeCoordinates[this.snakeCoordinates.length - 1].x - 1), (this.snakeCoordinates[this.snakeCoordinates.length - 1].y));
                        if (nextPoint.x == -1 || this.isPresent(nextPoint)) {
                            alert("Game Over");
                            this.animationIsOn = false;
                        }
                        else {
                            this.currentKeyCode = 37;
                            this.snakeCoordinates.push(nextPoint);
                            this.backward = true;
                            this.isHorizontalMotion = true;
                        }
                    }
                    else {
                        isOpp = true;
                    }
                    break;
                }
            case 38: //Move Up
                {
                    if (this.currentKeyCode != 40) {
                        let nextPoint = new Point((this.snakeCoordinates[this.snakeCoordinates.length - 1].x), (this.snakeCoordinates[this.snakeCoordinates.length - 1].y - 1));
                        if (nextPoint.y == -1 || this.isPresent(nextPoint)) {
                            alert("Game Over");
                            this.animationIsOn = false;
                        }
                        else {
                            this.currentKeyCode = 38;
                            this.snakeCoordinates.push(nextPoint);
                            this.isHorizontalMotion = false;
                            this.backward = true;
                        }
                    }
                    else {
                        isOpp = true;
                    }
                    break;
                }
            case 39: //Move Forward
                {
                    if (this.currentKeyCode != 37) {
                        let nextPoint = new Point((this.snakeCoordinates[this.snakeCoordinates.length - 1].x + 1), (this.snakeCoordinates[this.snakeCoordinates.length - 1].y));
                        if (nextPoint.x == 50 || this.isPresent(nextPoint)) {
                            alert("Game Over");
                            this.animationIsOn = false;
                        }
                        else {
                            this.currentKeyCode = 39;
                            this.snakeCoordinates.push(nextPoint);
                            this.backward = false;
                            this.isHorizontalMotion = true;
                        }
                    }
                    else {
                        isOpp = true;
                    }
                    break;
                }
            case 40: //Move Down
                {
                    if (this.currentKeyCode != 38) {
                        let nextPoint = new Point((this.snakeCoordinates[this.snakeCoordinates.length - 1].x), (this.snakeCoordinates[this.snakeCoordinates.length - 1].y + 1));
                        if (nextPoint.y == 50 || this.isPresent(nextPoint)) {
                            alert("Game Over");
                            this.animationIsOn = false;
                        }
                        else {
                            this.currentKeyCode = 40;
                            this.snakeCoordinates.push(nextPoint);
                            this.isHorizontalMotion = false;
                            this.backward = false;
                        }
                    }
                    else {
                        isOpp = true;
                    }
                    break;
                }
            default:
                isOpp = true;
        }
        if (isOpp) {
            this.computeNextCoordinate(this.currentKeyCode);
        }
        if (this.compare(this.fruitCoordinate, this.snakeCoordinates[this.snakeCoordinates.length - 1])) {
            this.fruitCoordinate = this.random();
            this.score += 10;
            document.getElementById("points").innerHTML = (this.score + "");
        }
        else {
            if (!isOpp && this.animationIsOn)
                this.snakeCoordinates.splice(0, 1);
        }
        this.drawall();
    }
    compare(pt1, pt2) {
        if (pt1.x == pt2.x && pt1.y == pt2.y) {
            return true;
        }
        return false;
    }
    drawall() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasGrid.border[this.fruitCoordinate.x][this.fruitCoordinate.y].fillborder("blue");
        for (let i = 0; i < this.snakeCoordinates.length - 1; i++) {
            simulate.canvasGrid.border[this.snakeCoordinates[i].x][this.snakeCoordinates[i].y].fillborder("red");
        }
        simulate.canvasGrid.border[this.snakeCoordinates[this.snakeCoordinates.length - 1].x][this.snakeCoordinates[this.snakeCoordinates.length - 1].y].fillhead("red", this.backward, this.isHorizontalMotion);
    }
}
//# sourceMappingURL=simulation.js.map