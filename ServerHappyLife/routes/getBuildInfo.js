let express  = require("express");
let router = express.Router();
let DB = require("./db");
let db = new DB();
router.get("/", (req, res, next)=>{

});
module.exports = router;