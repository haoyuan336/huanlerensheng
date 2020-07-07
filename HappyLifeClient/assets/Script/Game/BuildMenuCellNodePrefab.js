cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Node,
        desLabel: cc.Node,
        goldCostLabel: cc.Node,
        workerCostLabel: cc.Node
    },
    onLoad() {
        this.node.on("init", (data) => {
            console.log("init ", data);
            this.nameLabel.getComponent(cc.Label).string = "名称:" + data.name;
            this.desLabel.getComponent(cc.Label).string = data.des;
            this.goldCostLabel.getComponent(cc.Label).string = '需要金币:' +  data.buildcost;
            this.workerCostLabel.getComponent(cc.Label).string = '需要工人:' + data.needworkercount

        });
    },
    start() {
 
    },
    onButtonClick(event, customData) {
        switch (customData) {
            case 'build':
                console.log("建造按钮");
                break;
            default:
                break;
        }
    },

    update(dt) { },
});
