// 只有总公司管理员以上级别可以创建
// fetch 出错 暂时没有解决

api = "https://example.com/api/v1/PdPost";
method = "POST";
formData = {
    obj = {
        nome: {required: true, type: String, description: "产品名称"},
        Nation: {required: true, type: ObjectId, description: "产品所属国家"},
        Brand: {required: true, type: ObjectId, description: "产品所属品牌"},
        Categs: {required: true, type: Array[ObjectId], description: "产品二级分类"},
        price: {required: true, type: Float, default: 0, description: "商品同步产品时的默认价格, 可不填写"},
        code: {required: false, type: String, description: "产品条形码, 可以为空, 如果填写 则公司唯一"},
        // img_urls: {required: false, type: Array[String], description: "产品图片"},	// 文件传输
        desp: {required: false, type: String, description: "产品描述"},
        unit: {required: false, type: String, description: "产品单位, 如: 瓶 个 箱 PZ"},
        is_usable: {required: false, type: Boolean, default: true, description: "产品邮编"},
        sort: {required: false, type: Number, default: 0, description: "产品排序"}
    }
}
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    "authorization": "auth"+" "+accessToken
}

// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 创建成功",
    "data": {
        "object": {
        	
        },
    }
}