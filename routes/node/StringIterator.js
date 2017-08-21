/**
 * Created by diwu on 2017/8/21.
 */
for (let codePoint of 'foo') {
    console.log(codePoint);
}

// "f"
// "o"
// "o"

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