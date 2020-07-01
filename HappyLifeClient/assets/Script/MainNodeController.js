import global from './global'

cc.Class({
    extends: cc.Component,

    properties: {
        waitLayerPrefab: cc.Prefab,
        loginLayerPrefab: cc.Prefab
    },
    onLoad() {
        this.node.on("show-wait-layer", () => {
            this._waitLayer = cc.instantiate(this.waitLayerPrefab);
            this._waitLayer.parent = this.node;
        });
        this.node.on("hide-wait-layer", () => {
            this._waitLayer.destroy();
        });
        this.node.on("show-login-layer", ()=>{
            this._currentLayer = cc.instantiate(this.loginLayerPrefab);
            this._currentLayer.parent = this.node;
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
