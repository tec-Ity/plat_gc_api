api = "https://example.com/api/v1/AttrPost";

fetchObj = {
    methods: "POST",
    headers: {
        "content-type": "application/json",
        "authorization": "Bear"+" "+accessToken
    },
    body: JSON.stringify({"obj": dataObj});    
}
dataObj = {
    Prod: {required: true, type: ObjectId, description: "所属商品"},
    nome: {required: true, type: String, description: "商品属性名称"},
    options: {required: true, type: Array[String], description: "商品属性值"},
    sort: {required: false, type: Number, description: "商品属性的排序"}
}