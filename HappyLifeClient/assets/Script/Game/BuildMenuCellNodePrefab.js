cc.Class({
    extends: cc.Component,

    properties: {
        namelabel: cc.Node,
        desLabel: cc.Node,
        goldCostLabel: cc.Node,
        workerCostLabel: cc.Node
    },
    onLoad() {
        this.node.on("init", (data) => {
            console.log("init ", data);
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
