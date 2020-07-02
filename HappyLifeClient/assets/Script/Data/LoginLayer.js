import global from './../global'
cc.Class({
    extends: cc.Component,

    properties: {
        editBox: cc.Node
    },
    onLoad() { },
    start() {

    },

    update(dt) { },
    onButtonClick(event, customData) {
        switch (customData) {
            case 'login':
                console.log("登录");
                console.log("edit box", this.editBox.getComponent(cc.EditBox).string);
                global.controller.setPlayerName(this.editBox.getComponent(cc.EditBox).string);
                global.controller.loginServer().then(()=>{
                    this.node.destroy();
                });
                break;
            default:
                break;
        }
    }
});
