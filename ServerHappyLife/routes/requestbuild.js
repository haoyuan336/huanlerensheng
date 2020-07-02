let express = require("express");
let router = express.Router();
router.get("/", (req, res, next)=>{
    console.log("请求建造");
});
module.exports = router;