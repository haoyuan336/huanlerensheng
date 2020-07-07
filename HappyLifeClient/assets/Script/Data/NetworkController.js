let serUrl = "http://120.53.243.146:3000";
let longSerUrl = "ws://120.53.243.146:3001";
class NetworkController {
    constructor() {

    }
    loginServer(data) {
        return fetch(serUrl + '/login',
            {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json();
            }).then(() => {
                return this.connectLongServer();
            })
    }
    connectLongServer() {
        return new Promise((resolve) => {
            let ws = new WebSocket(longSerUrl);
            ws.onopen = ()=>{
                console.log("链接成功");
            }
            ws.onmessage = (text)=>{
                console.log("收到消息", text);
            }
            ws.onerror = ()=>{

            }
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