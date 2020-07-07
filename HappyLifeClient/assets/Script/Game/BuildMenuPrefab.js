cc.Class({
    extends: cc.Component,

    properties: {
        scrollviewContentNode: cc.Node,
        buildMenuCellNodePrefab: cc.Prefab
    },
    onLoad() {
        this.node.on("init", (data)=>{
            console.log("初始化建造菜单", data);
            let index = 0;
            for(let i in data){
                console.log("建筑信息", data[i]);
                let cellNode = cc.instantiate(this.buildMenuCellNodePrefab);
                cellNode.parent = this.scrollviewContentNode;
                cellNode.x = 0;
                cellNode.y = - index * 210 - cellNode.height * 0.5;
                index ++; 
                cellNode.emit("init", data[i]);
            }
        });
    },
    start() {

    },

    update(dt) {

    }
});
