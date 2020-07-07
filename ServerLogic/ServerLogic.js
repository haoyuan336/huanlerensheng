var ws = require("nodejs-websocket");
let DB = require("./db");
let db = new DB();
ws.createServer((socket) => {
    console.log("a user connect");
    socket.on("text", (str) => {
        console.log("收到客户端发来的消息", str);
        let data = JSON.parse(str);
        let type = data.type;
        let callBackIndex = data.callBackIndex;
        if (type === 'login') {
            console.log('玩家登录');
            db.login(data.data.id).then((result) => {
                console.log("db login result", JSON.stringify(result));
                if (result.length === 0) {
                    db.createUserInfo({
                        id: data.data.id,
                        name: data.data.name,
                        money: 500,
                        score: 0
                    }).then(() => {
                        socket.send(JSON.stringify({
                            status: 'ok',
                            result: {
                                id: data.data.id,
                                name: data.data.name,
                                money: 500,
                                score: 0
                            },
                            callBackIndex: callBackIndex
                        }))
                    })
                } else {
                    socket.send(JSON.stringify({
                        status: 'ok',
                        result: result[0],
                        callBackIndex: callBackIndex
                    }))
                }
            })

        }


    });
}).listen(3001); 
