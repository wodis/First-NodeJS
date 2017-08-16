/**
 * Created by diwu on 17/8/2.
 */
var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use((req, res, next) => {
    console.log('Changed Time: ', Date.now());
    next();
});
// 定义主页路由
router.get('/', function (req, res) {
    res.send('Birds home page');
});
// 定义 about 路由
router.all('/about', function (req, res) {
    console.log(req.body);
    res.send('About birds');
});

router.get('/for', function (req, res) {
    var sum = (n1, n2) => n1 + n2;
    var set = new Set();

    for (let i = 1; i < 10; i++) {
        set.add(i);
        console.log(i);
    }

    for (let x of set) {
        console.log(x);
    }

    console.log(sum(1, 2));
    res.send('aaa');
});

module.exports = router;