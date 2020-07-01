class NetworkController {
    constructor() {

    }
    loginServer(data) {
        return fetch('http://127.0.0.1:3000/login',
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
}
export default NetworkController;