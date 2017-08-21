/**
 * Created by diwu on 2017/8/21.
 */
var print = arg => console.log(arg);
/**
 * 二进制和八进制表示法
 */
{
    let a = 0b111110111 === 503 // true
    let b = 0o767 === 503 // true
    console.log(a + '' + b)
}

/**
 * ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
 * Number.isFinite()用来检查一个数值是否为有限的（finite）。
 * Number.isNaN()用来检查一个值是否为NaN。
 **/
{
    Number.isFinite(15); // true
    Number.isFinite(0.8); // true
    Number.isFinite(NaN); // false
    Number.isFinite(Infinity); // false
    Number.isFinite(-Infinity); // false
    Number.isFinite('foo'); // false
    Number.isFinite('15'); // false
    Number.isFinite(true); // false
}

/**
 * ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
 **/
{
    // ES5的写法
    parseInt('12.34') // 12
    parseFloat('123.45#') // 123.45

    // ES6的写法
    Number.parseInt('12.34') // 12
    let pf = Number.parseFloat('123.45#') // 123.45
    print(pf)
}

/**
 * Number.isInteger()用来判断一个值是否为整数。需要注意的是，在 JavaScript 内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
 **/
{
    Number.isInteger(25) // true
    Number.isInteger(25.0) // true
    Number.isInteger(25.1) // false
    Number.isInteger("15") // false
    Number.isInteger(true) // false
}

{
    let floatNum = 0.1 + 0.2 - 0.3;
    print(floatNum)

    print(floatNum.toFixed(20))

    print(floatNum.toFixed(20) < Number.EPSILON)

    //简历方法
    let withinErrorMargin = (left, right) => Math.abs(left - right) < Number.EPSILON;
    print(withinErrorMargin(0.0, 0.1 + 0.2 - 0.3))
}