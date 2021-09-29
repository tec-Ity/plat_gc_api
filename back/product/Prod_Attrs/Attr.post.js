api = "https://example.com/api/b1/Attr";
method = "POST";
formData = {
    "obj": {
        Prod: {required: true, type: ObjectId, description: "所属商品"},
        nome: {required: true, type: String, description: "商品属性名称"},
        options: {required: true, type: Array[String], description: "商品属性值"},
        // 如果 options 后端可以识别 '["a", "b"]'  "['a', 'b']"  "a, b"   "'a','b'"   等字符串数组
        sort: {required: false, type: Number, description: "商品属性的排序"}
    }
}
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}
