var ws = require("nodejs-websocket");
ws.createServer((socket)=>{
    console.log("a user connect");
    socket.on("text", (str)=>{
        console.log("收到消息", JSON.stringify(data));
        let data = JSON.parse(str);
        let type = data.type;
        if (type === 'login'){
            console.log('玩家登录');
        }


    });
}).listen(3001); 
