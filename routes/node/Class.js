/**
 * Created by diwu on 2017/8/23.
 */
var util = require('../node/utils');
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

    static staticMethod() {
        return 'hello';
    }
}

/**
 * 继承
 */
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}

{
    let point = new Point(1, 2);
    util.print(point.toString());
    util.print(Point.staticMethod());

    util.print(new ColorPoint(1,2,'red').toString())
}