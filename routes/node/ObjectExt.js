/**
 * Created by diwu on 2017/8/21.
 */
var util = require('./utils');
/**
 * 属性简洁
 */
const f = (x, y) => {
    return {x, y}
};

util.print(f(1, 2));

/**
 * 方法简洁
 **/
let o = {
    method(){
        "use strict";
        return 'hello!';
    }
};

util.print(o.method());

{
    let birth = '2000/01/01';

    let Person = {

        name: '张三',

        //等同于birth: birth
        birth,

        // 等同于hello: function ()...
        hello() {
            console.log('我的名字是', this.name);
        }

    };
}

{
    let a = {a: 1};
    let b = {a: 1};
    util.print(Object.is(a, b));

    //Object.assign
    let target = {a: 1};

    let source1 = {b: 2};
    let source2 = {c: 3};

    Object.assign(target, source1, source2);
    util.print(target);
}

/***
 * 属性的可枚举性和遍历
 **/
{
    let obj = {foo: 123};
    let descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
    util.print(descriptor);
    for (let a in  obj) {
        util.print(a);
    }
    util.print(Object.keys(obj));
    util.print(Object.getOwnPropertyNames(obj));
    util.print(Object.getOwnPropertySymbols(obj));
    util.print(Reflect.ownKeys(obj));
}