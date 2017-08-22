/**
 * Created by diwu on 2017/8/22.
 */
var util = require('./utils');

{
    let promise = new Promise((resolve, reject) => {
        "use strict";
        let num = 2;
        if (num == 1) {
            resolve(num);
        } else {
            reject(new Error('number is wrong.'));
        }
    });

    promise.then((value) => {
        "use strict";
        util.print(value);
    }, (error) => {
        "use strict";
        if (typeof Error) {
            util.print(error.message);
        }
    });
}

{
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, ms+' ms done.');
        });
    }



    timeout(100).then((value) => {
        console.log(value);
    });
    console.log('已经执行了');
}