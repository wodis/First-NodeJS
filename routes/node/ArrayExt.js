/**
 * Created by diwu on 2017/8/21.
 */
var util = require('./utils');


/**
 * 合并数组
 * 扩展运算符提供了数组合并的新写法。
 **/
{
    let a1 = [3, 4, 5];
    let a2 = [1, 2];
    let a3 = [...a2, ...a1];
    util.print(a3);
}

/**
 * 字符串转数组
 **/
{
    let a = [...'hello啊'];
    util.print(a)
}

/**
 *  Map 和 Set 结构，Generator 函数
 **/
{
    let map = new Map(
        [
            [1, 'one'],
            [2, 'two'],
            [3, 'three']
        ]
    );

    let arr = [...map.values()];
    util.print(arr);
}

{
    let array = [];
    array.push('a');
    array.push('b');
    array.push('c');
    util.print(array);
}

{
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    let arr2 = Array.from(arrayLike);
    util.print(arr2);
    arr2.map((x, y) => console.log(y + "=" + x));
}

/**
 *  数值转数组
 **/
{
    let arr = Array.of(3, 11, 18);
    util.print(arr);
}

/**
 * find
 **/
{
    let arr = Array.of(3, 11, 18);
    util.print(arr.find((n) => n < 12));
}

{
    ['a', 'b', 'c'].fill(7)
    // [7, 7, 7]

    new Array(3).fill(7)
    // [7, 7, 7]
}

/****
 * 数组实例的 entries()，keys() 和 values()
 */
{
    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }
    // 0
    // 1

    // for (let elem of ['a', 'b'].values()) {
    //     console.log(elem);
    // }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"

    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']
}

/**
 * includes()
 * */
{
    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    [1, 2, NaN].includes(NaN); // true
}

{
    util.print(0 in [1, 2, 3]);
    util.print([1, 2, 3].includes(1));
    [1, 2, 3].some((t, n) => util.print(n + ':' + t));
    util.print('========');
    util.print([1, 2, 3].filter((t, n) => t > 1));
    util.print([{name: 'a', age: 12}, {name: 'b', age: 8}].filter((t, n) => t.age > 10));
}