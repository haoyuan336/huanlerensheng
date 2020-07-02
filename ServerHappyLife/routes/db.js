let mysql = require("mysql");
let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "123456",
    database: "happy_life"
});
connection.connect();

class DB {
    constructor() {

    }
    login(id) {
        let sql = "select * from playerinfo where id = " + id + ";";
        console.log("seq", sql);
        return new Promise((resolve, reject) => {
            connection.query(sql, function (error, results, fields) {
                // if (error) throw error;
                // console.log('The solution is: ', results[0]);
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

    }
    createUserInfo(data) {
        let sql = "insert into playerinfo ("
        let str = ''
        let str2 = '';
        for (let i in data) {
            str += i + ' ,';
            str2 += data[i] + ','
        }
        str = str.substring(0, str.length - 1);
        str2 = str2.substring(0, str2.length - 1);
        console.log("str", str);
        console.log("str2", str2);
        sql = sql + str + ") values (" + str2 + ");";
        console.log("sql", sql);
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, results, fields) => {
                console.log("result", results);
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
    }
    getBuildInfo(){

    }
}
module.exports = DB;
//create table playerinfo(id int, money int, score int);
//select from * playerinfo where id = 
//ALTER TABLE menu_function ADD COLUMN sort VARCHAR(20) DEFAULT NULL COMMENT '排序字段'
// alter table playerinfo add column name varchar(20) DEFAULT NULL COMMENT '无名氏'
// create table houseinfo(ownerid varchar(20),ownername varchar(20),id int, state int,build_cost int);
// 状态 food count 