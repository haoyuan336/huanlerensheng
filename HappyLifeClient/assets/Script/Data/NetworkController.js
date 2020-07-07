let serUrl = "http://120.53.243.146:3000";
let longSerUrl = "ws://120.53.243.146:3001";
class NetworkController {
    constructor() {
        this._ws = undefined;
        this._callBackIndex = 1;
        this._callBackMap = {};
    }
    connectLongServer() {
        return new Promise((resolve) => {
            this._ws = new WebSocket(longSerUrl);
            this._ws.onopen = () => {
                console.log("链接成功");
                resolve();
            };
            this._ws.onmessage = (text) => {
                console.log("收到消息", text);
            };
            this._ws.onerror = (err) => {
                console.error('connect server ', err);
            };
            this._ws.onclose = () => {
                console.log("on close");
            }
        });
    }
    loginServer(data) {
        console.log("登录服务器", data);
        return new Promise((resolve) => {
            this.sendMessage('login', data).then((result)=>{
                console.log("登录结果", result);
            });
        });

    }
    sendMessage(type, data) {
        return new Promise((resolve) => {
            this._ws.send(JSON.stringify({
                type: type,
                data: data,
                callBackIndex: this._callBackIndex
            }));
            this._callBackMap[this._callBackIndex] = resolve;
            this._callBackIndex ++;
        })

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