// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/v1/OrderPost";
method = "POST";
formData = {
	"obj": {
		Shop: {required: true, type: ObjectId, description: "订单所属商店"},
		OrderProds: [{
			Prod: {required: true, type: ObjectId, description: "订单中的商品"},
			OrderSkus: [{
				Sku: {required: true, type: ObjectId, description: "订单中 商品 下的 Sku"},
				quantity: {required: true, type: Number, description: "采购数量"},
			}]
		}]
	}
}
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}



// 返回值
// status(200);