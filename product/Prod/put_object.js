api = "https://example.com/api/v1/ProdPut/:id";
method = "PUT";
formData = {
	"obj": {
		desp: {required: false, type: String, description: "商品描述"},
		unit: {required: false, type: String, description: "商品单位, 如: 瓶 个 箱 PZ"},
		Categs: {required: false, type: Array[ObjectId], description: "商品二级分类"},
		is_usable: {required: false, type: Boolean, default: true, description: "商品邮编"},
		sort: {required: false, type: Number, default: 0, description: "商品排序"}

		// 需要查看 prod
		Attrs:  "查看 Prod_Attrs 接口",
		Products:  "查看 Prod_Sku 接口",
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