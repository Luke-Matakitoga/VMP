const express = require('express')
const router = express.Router();
const manager = require('../manager');

router.get('/', (req, res) => {
    res.send("Some instances...");
});

router.get('/reg', (req, res) => {
    var result = manager.registerInstance();
    res.json({"code":result})
});

module.exports = router;