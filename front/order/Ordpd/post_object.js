api = "https://example.com/api/v1/OrdpdPost";
method = "POST";
formData = {
	"obj": {
		Order: {required: false, type: ObjectId, description: "所属订单 _id"},
		Shop: {required: true, type: ObjectId, description: "店铺 _id"},

		Pd: {required: false, type: ObjectId, description: "Pd _id"},
		Prod: {required: false, type: ObjectId, description: "Prod _id"},
		Product: {required: true, type: ObjectId, description: "Product _id"},

		nome: {required: true, type: String, description: "商品名称"},
		desp: {required: true, type: String, description: "商品属性描述"},

		quantity: {required: true, type: Number, description: "商品采购数量"},
		price: {required: true, type: Float, description: "商品采购价格"},
		unit: {required: true, type: String, description: "商品单位"},

		price_regular: {required: true, type: Float, description: "商品原价"},
	}
};

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
};

// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 创建成功",
    "data": {
        "object": {
        	
        },
    }
};