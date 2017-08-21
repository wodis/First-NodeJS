/**
 * Created by diwu on 2017/8/21.
 */
console.log('===================遍历字符串');
for (let codePoint of 'foo') {
    console.log(codePoint);
}

// "f"
// "o"
// "o"
console.log('===================识别大于0xFFFF的码点');
/**
 * 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
 * @type {string}
 */

var text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
// " "
// " "

for (let i of text) {
    console.log(i);
}
// "𠮷"

console.log('===================at()方法');
/**
 * at() ES5 对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。
 **/
require('String.prototype.at');
{
    let charAbc = 'abc'.charAt(0) // "a"
    let charJi = '𠮷'.charAt(0) // "\uD842"
    let abc = 'abc'.at(0) // "a"
    let ji = '𠮷'.at(0) // "𠮷"
    console.log(charJi);
    console.log(ji);
}

console.log('===================includes(), startsWith(), endsWith()方法');
/**
 * 传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
 * includes()：返回布尔值，表示是否找到了参数字符串。
 * startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
 * endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
 **/
{
    let s = 'Hello world!';

    s.startsWith('Hello') // true
    s.endsWith('!') // true
    s.includes('o') // true

    let w = 'Hello world!';

    w.startsWith('world', 6) // true
    w.endsWith('Hello', 5) // true
    w.includes('Hello', 6) // false

    console.log(w);
}

console.log('===================repeat()方法');
{
    let x = 'x'.repeat(3) // "xxx"
    let hello = 'hello'.repeat(2) // "hellohello"
    let na = 'na'.repeat(0) // ""
    console.log(x);
    console.log(hello);
    console.log(na);
}

console.log('===================字符串中嵌入变量');
// 字符串中嵌入变量
{
    //拼接变量
    let name = "Bob", time = "today";
    let all = `Hello ${name}, how are you ${time}?`
    console.log(all)

    //支持换行
    let a = `In JavaScript this is
     not legal.`
    console.log(a)

    //调用方法
    function fn() {
        return "Hello World";
    }

    console.log(`foo ${fn()} bar`)
}