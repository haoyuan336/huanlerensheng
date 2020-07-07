let serUrl = "http://120.53.243.146:3000";
let longSerUrl = "ws://120.53.243.146:3001";
class NetworkController {
    constructor() {
        this._ws = undefined;
    }
    connectLongServer(){
        return new Promise((resolve)=>{
            this._ws = new WebSocket(longSerUrl);
            this._ws.onopen = ()=>{
                console.log("链接成功");
                resolve();
            };
            this._ws.onmessage = (text)=>{
                console.log("收到消息", text);
            };
            this._ws.onerror = (err)=>{
                console.error('connect server ', err);
            };
            this._ws.onclose = ()=>{
                console.log("on close");
            }
        });
    }
    loginServer(data) {
        console.log("登录服务器", data);
        return new Promise((resolve)=>{

        });
        // return fetch(serUrl + '/login',
        //     {
        //         method: "post",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     }).then((response) => {
        //         return response.json();
        //     }).then(() => {
        //         return this.connectLongServer();
        //     })
    }
   
    getGameConfig() {
        return fetch(serUrl + '/getGameConfig', {
            method: "get"
        }).then((response) => {
            return response.json();
        })
    }
}
export default NetworkController;