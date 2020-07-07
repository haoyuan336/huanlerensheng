var ws = require("nodejs-websocket");
ws.createServer((socket)=>{
    console.log("a user connect");
    socket.on("text", (data)=>{
        console.log("收到消息", data);
    });
}).listen(3001); 
