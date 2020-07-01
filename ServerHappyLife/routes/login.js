let express = require("express");
let router = express.Router();
let DB = require("./db");
let db = new DB();
router.post("/", (req,res, next)=>{
    console.log("user login", req.body);
    // res.send(JSON.stringify({err:"hello world"}));
    let id = req.body.id;
    db.login(id).then((data)=>{
        if (data.length === 0){
            db.createUserInfo({
                id: id,
                money: 500,
                score: 0
            })
        }else{
            res.send(JSON.stringify(data[0]));
        }
    })
}); 
module.exports = router;