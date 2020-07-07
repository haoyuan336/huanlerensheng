var ws = require("nodejs-websocket");
ws.createServer((socket)=>{
    console.log("a user connect");
    socket.on("text", (str)=>{
        console.log("收到客户端发来的消息", str);
        let data = JSON.parse(str);
        let type = data.type;
        if (type === 'login'){
            console.log('玩家登录');
        }


    });
}).listen(3001); 
