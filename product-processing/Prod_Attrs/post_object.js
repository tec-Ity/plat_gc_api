api = "https://example.com/api/v1/ProdPut/:id/AttrPost";

fetchObj = {
    methods: "PUT",
    headers: {
        "content-type": "application/json",
        "authorization": "Bear"+" "+accessToken
    },
    body: JSON.stringify({"obj": dataObj});    
}
dataObj = {
    code: {required: true, type: String, description: "服务城市"},
    options: {required: true, type: Array[String], description: "额外运费"}
}