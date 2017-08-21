/**
 * Created by diwu on 2017/8/21.
 */
var util = require('./utils');
/**
 * 函数参数的默认值
 **/
var defaultParams = (first, second = '你好') => first + second;

util.print(defaultParams('Daniel'));
util.print(defaultParams('Daniel', '您好吗？'));

/**
 * 解构赋值
 **/
function foo({x, y = 5}) {
    console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2

function foo1({x, y = 5} = {}) {
    console.log(x, y);
}

foo1() // undefined 5

/**
 * rest参数的写法
 **/
util.print('=========REST========');
const sortNumbers = (...numbers) => numbers.sort();

for (let num of sortNumbers(3, 2, 5, 1, 4)) {
    util.print(num);
}

sortNumbers(3, 2, 1).forEach((val, idx) => util.print('key:' + idx + ' value:' + val));

/**
 * 函数的name属性
 **/
util.print('function name:' + sortNumbers.name);