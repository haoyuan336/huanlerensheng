let express = require('express');
let router = express.Router();
let config = require("./../config.json");
router.get("/", (req, res, next) => {
    console.log("请求游戏数据");
    res.send(JSON.stringify(config));
});
router.get("/buildConfig", (req, res, next) => {
    console.log("请求游戏数据");
    res.send(JSON.stringify(config.buildconfig));
});
router.get("/foodConfig", (req, res, next) => {
    console.log("请求游戏数据");
    res.send(JSON.stringify(config.foodConfig));
});
module.exports = router;