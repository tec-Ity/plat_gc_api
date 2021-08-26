api = "https://example.com/api/v1/OrderSkuPost";
method = "POST";
formData = {
	"obj": {
		Sku: {required: true, type: ObjectId, description: "Sku _id"},
		quantity: {required: true, type: Number, description: "商品采购数量"},
	},
	"ship": {
		Cita: {required: true, type: ObjectId, description: "添加商品时如果在此店没有购物车, 则需要传递城市 ID"},
	}
};

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
};

// 返回值;
// status(200);
res = {
    "status": 200,
    "message": "[server] 创建成功",
    "data": {
        "object": {

        },
    }
}