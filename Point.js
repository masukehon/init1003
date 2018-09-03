class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance() {
        return Math.sqrt(Math.pow((this.x - 0), 2) + Math.pow((this.y - 0), 2));

    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        return Math.sqrt(Math.pow((this.pointA.x - this.pointB.x), 2) + Math.pow((this.pointA.y - this.pointB.y), 2));
    }
}



class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        var LineAB = new Line(pointA, pointB);
        var LineAC = new Line(pointA, pointC);
        var LineBC = new Line(pointB, pointC);
        var lengthAB = LineAB.getLength();
        var lengthBC = LineBC.getLength();
        var lengthAC = LineAC.getLength();
        var max = Math.max(lengthAB, lengthBC, lengthAC);
        var total = lengthAB + lengthBC + lengthAC;

        if (total / 2 == max)
            throw new Error("3 diem thang hang");
        return total;
    }

    isTriangle() {
        var LineAB = new Line(pointA, pointB);
        var LineAC = new Line(pointA, pointC);
        var LineBC = new Line(pointB, pointC);
        var lengthAB = LineAB.getLength();
        var lengthAC = LineAC.getLength();
        var lengthBC = LineBC.getLength();

        if (lengthAB + lengthAC > lengthBC && lengthAB + lengthBC > lengthAC && lengthAC + lengthBC > lengthAB)
            return true;
        return false;
    }
}

var pointA = new Point(0, 0);
var pointB = new Point(0, 0);
var pointC = new Point(8, 6);
// let objectLine = new Line(pointA, pointB);
var objTriangle = new Triangle(pointA, pointB, pointC);
console.log("Chu vi tam giac la: " + objTriangle.getPerimeter());
if (objTriangle.isTriangle())
    console.log("Day la tam giac");
else
    console.log("Day khong phai la tam giac");