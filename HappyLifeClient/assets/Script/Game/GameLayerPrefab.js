import global from './../global'
cc.Class({
    extends: cc.Component,

    properties: {
        playerInfoNode: cc.Node,
        nameLabel: cc.Node,
        moneyLabel: cc.Node,
        scoreLabel: cc.Node,
        buildMenuPrefab: cc.Prefab
    },
    onLoad() {
        this.node.on("init-player-data", (data) => {
            console.log("初始化用户数据", data);
            if (data.name) {
                this.nameLabel.getComponent(cc.Label).string = "Name:" + data.name;
            }
            this.moneyLabel.getComponent(cc.Label).string = "Money:" + data.money;
            this.scoreLabel.getComponent(cc.Label).string = 'Score:' + data.score;
            let height = cc.view.getVisibleSize().height;
            let action = new cc.Tween(this.playerInfoNode).to(0.2, { position: cc.v2(0, height * 0.5 - 100) });
            action.start();
        });
    },
    start() {

    },
    update(dt) {

    },
    onButtonClick(event, customData) {
        switch (customData) {
            case 'build-button':
                console.log("请求建造的按钮");
                global.controller.getNetworkController().getGameConfig().then((data) => {
                    console.log("获取游戏配置信息", data);
                    // global.controller.showWaitLyer(false);
                    let buildMenu = cc.instantiate(this.buildMenuPrefab);
                    buildMenu.parent = this.node;
                    buildMenu.emit("init", data.buildconfig);
                });
                break;
            default:
                break;
        }
    }
});
