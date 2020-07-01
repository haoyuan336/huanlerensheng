class Tool {
    constructor() {

    }
    static loadPrefab(prefabName) {
        return new Promise((resole, reject) => {
            console.log("加载预制件", prefabName);
            cc.loader.loadRes(prefabName, (err, result) => {
                if (err) {
                    console.log("加载" + prefabName + '失败', err);
                    reject();
                } else {
                    // console.log("加载预制体资源成功", prefabName);
                    resole(result);
                }
            });
        });
    }
    static loadRes(resourcesUrl) {
        // console.log("load res = ", resourcesUrl);
        return new Promise((resole, reject) => {
            cc.loader.load(resourcesUrl, (err, result) => {
                if (err) {
                    console.log("加载资源失败", JSON.stringify(err));
                    alert("资源加载失败" + resourcesUrl + JSON.stringify(result));
                    reject(err);
                } else {
                    if (resourcesUrl.match(/[.png|.jpg]$/)) {
                        resole(new cc.SpriteFrame(result));
                        // console.log("加载图片资源成功" + resourcesUrl)
                    } else if (resourcesUrl.match(/[.mp3]$/)) {
                        resole(result);
                        // console.log("加载mp3资源成功" + resourcesUrl);
                    }
                }
            });
        });
    }
    static loadSpine(resUrl) {


        let resList = [];
        let endUrl = "";
        if (resUrl.indexOf('.png') < 0) {
            endUrl = resUrl + '.png';
        }
        resList = [endUrl];

        let nameStrList = [".atlas", ".json"];
        for (let i = 0; i < nameStrList.length; i++) {
            resList.push(endUrl.replace(".png", nameStrList[i]));
        }
        // console.log("reslist = ", JSON.stringify(resList));
        return new Promise((resole, reject) => {
            cc.loader.load(resList, (errors, results) => {
                // console.log("error", errors);
                if (!errors) {
                    var asset = new sp.SkeletonData();
                    asset.skeletonJson = results.getContent(resList[2]);
                    asset.atlasText = results.getContent(resList[1]);
                    asset.textures = [results.getContent(resList[0])];
                    let imageArr = resList[0].split("/");
                    let pngName = imageArr[imageArr.length - 1];
                    asset.textureNames = [pngName];
                    resole(asset);
                    // console.log("加载spine资源成功", resUrl);
                } else {
                    console.log("加载spine 失败", errors);
                    alert("资源加载失败" + errors);
                    reject(errors);
                }
            });
        });
    }

    static Post(url, params, callback, onerror) {
        console.log("http post:", "url=" + url, "body:" + params);

        function sendPost() {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    let response = xhr.responseText;
                    callback(response);
                }
            };

            xhr.ontimeout = function () {
                sendPost();
                if (onerror) onerror();
            }
            xhr.onerror = function () {
                sendPost();
                if (onerror) onerror();
            }
            xhr.timeout = 6000;
            xhr.open("post", url, true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(params);
        }

        sendPost();
    }
}
export default Tool; 