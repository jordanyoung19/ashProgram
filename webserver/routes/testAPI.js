var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is actually working properly');
});

module.exports = router;