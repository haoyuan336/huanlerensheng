import global from './global'

cc.Class({
    extends: cc.Component,

    properties: {
        waitLayerPrefab: cc.Prefab,
        loginLayerPrefab: cc.Prefab,
        gameLayerPrefab: cc.Prefab
    },
    onLoad() {
        this.node.on("show-wait-layer", () => {
            this._waitLayer = cc.instantiate(this.waitLayerPrefab);
            this._waitLayer.parent = this.node;
            this._waitLayer.zIndex = 100;
        });
        this.node.on("hide-wait-layer", () => {
            this._waitLayer.destroy();
        });
        this.node.on("show-login-layer", ()=>{
            this._currentLayer = cc.instantiate(this.loginLayerPrefab);
            this._currentLayer.parent = this.node;
        });
        this.node.on("enter-game-layer", (data)=>{
            let node = cc.instantiate(this.gameLayerPrefab);
            node.parent = this.node;
            node.emit("init-player-data", data);
            this._currentLayer.destroy();
            this._currentLayer = node;

            this.node.emit("hide-wait-layer");
            
        });

    },
    start() {
        global.controller.setMainNodeController(this.node);
        // global.networkController.loginServer();
        // global.controller.getNetworkController().loginServer();
    },

    update(dt) {

    }
});
