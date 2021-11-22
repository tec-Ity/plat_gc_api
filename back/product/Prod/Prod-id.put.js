api = "https://example.com/api/b1/Prod/:id";
method = "PUT";

formData = {
	"general": {
		desp: {required: false, type: String, description: "商品描述"},
		unit: {required: false, type: String, description: "商品单位, 如: 瓶 个 箱 PZ"},
		is_usable: {required: false, type: Boolean, default: true, description: "商品是否可用"},
		sort: {required: false, type: Number, default: 0, description: "商品排序"}

		nome: {required: false, type: String, description: "产品名称"},
		Nation: {required: false, type: ObjectId, description: "产品所属国家"},
		code: {required: false, type: String, description: "产品条形码, 可以为空, 如果填写 则公司唯一"},
		desp: {required: false, type: String, description: "产品描述"},
		price_regular: {required: false, type: Float, description: "产品标价"},
		price_sale: {required: false, type: Float, description: "产品售价"},
		Brand: {required: false, type: ObjectId, description: "产品所属品牌"},
		Categ: {required: false, type: ObjectId, description: "产品二级分类"},

		// 需要查看 prod
		Attrs:  "查看 Prod_Attrs 接口",
		Skus:  "查看 Prod_Sku 接口",
	}
}

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
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