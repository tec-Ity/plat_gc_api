api = "https://example.com/api/v1/AttrPost/:id/AttrPost";

fetchObj = {
    methods: "PUT",
    headers: {
        "content-type": "application/json",
        "authorization": "Bear"+" "+accessToken
    },
    body: JSON.stringify({"obj": dataObj});    
}
dataObj = {
    nome: {required: true, type: String, description: "商品属性名称"},
    options: {required: true, type: Array[String], description: "商品属性值"},
    sort: {required: false, type: Number, description: "商品属性的排序"}
}