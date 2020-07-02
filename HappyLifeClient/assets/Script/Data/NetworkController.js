let serUrl = "http://127.0.0.1:3000";
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
            })
    }
    getGameConfig() {
        return fetch(serUrl + '/getGameConfig', {
            method: "get"
        }).then((response)=>{
            return response.json();
        })
    }
}
export default NetworkController;