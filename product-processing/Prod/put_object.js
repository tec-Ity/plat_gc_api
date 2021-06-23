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
	desp: {required: false, type: String, description: "产品描述"},
	unit: {required: false, type: String, description: "产品单位, 如: 瓶 个 箱 PZ"},
	Categs: {required: false, type: Array[ObjectId], description: "产品分类"},
	is_usable: {required: false, type: Boolean, default: true, description: "产品邮编"},
	sort: {required: false, type: Number, default: 0, description: "产品排序"}

	// 需要查看 prod
	Attrs:  "查看 Prod_Attrs 接口",
	Products:  "查看 Prod_Sku 接口",
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