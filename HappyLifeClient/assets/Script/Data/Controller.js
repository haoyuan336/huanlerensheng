import NetworkController from "./NetworkController";

class Controller {
    constructor() {
        this._mainNodeController = undefined;
        this._networkController = new NetworkController();
        let id = cc.sys.localStorage.getItem("playerid");
        if (id) {
            this._playerid = id;
        } else {
            this._playerid = Date.now() + Math.floor(Math.random() * 10000);
            cc.sys.localStorage.setItem("playerid", this._playerid);
        }
        this._playerName = "无名氏";
    }
    getNetworkController() {
        return this._networkController;
    }
    loginServer(){
        return new Promise((resolve, reject)=>{
            this._mainNodeController.emit("show-wait-layer");
            this._networkController.loginServer({
                id: this._playerid,
                name: this._playerName
            }).then(()=>{
                console.log("登录成功")
            })
        });
    }
    setPlayerName(name){
        this._playerName = name;
    }
    setMainNodeController(node) {
        this._mainNodeController = node;
        this._mainNodeController.emit("show-login-layer");

        // this._networkController.loginServer({
        //     id: this._playerid,
        //     name: this._name
        // })
    }
}
export default Controller;