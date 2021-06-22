api = "https://example.com/api/v1/PdPut/:id";

fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"obj": dataObj});	
}
dataObj = {
	nome: {required: false, type: String, description: "产品名称"},
	Nation: {required: false, type: ObjectId, description: "产品所属国家"},
	code: {required: false, type: String, description: "产品条形码, 可以为空, 如果填写 则公司唯一"},
	img_urls: {required: false, type: Array[String], description: "产品图片"},
	desp: {required: false, type: String, description: "产品描述"},
	unit: {required: false, type: String, description: "产品单位, 如: 瓶 个 箱 PZ"},
	Brand: {required: false, type: ObjectId, description: "产品所属品牌"},
	Categs: {required: false, type: Array[ObjectId], description: "产品分类"},
	price: {required: false, type: Float, default: 0, description: "商品同步产品时的默认价格, 可不填写"},
	is_usable: {required: false, type: Boolean, default: true, description: "产品邮编"},
	sort: {required: false, type: Number, default: 0, description: "产品排序"}
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