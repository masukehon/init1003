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

    static compareLines(line1, line2) {
        return line1.getLength() > line2.getLength();
    }
}

p1 = new Point(5, 2);
p2 = new Point(10, 4);
p3 = new Point(3, 12);
l1 = new Line(p1, p2);
l2 = new Line(p1, p3);

console.log(Line.compareLines(l2, l1));