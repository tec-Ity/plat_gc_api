api = "https://example.com/api/v1/check-order";
method = "POST";
formData = {
	"paypal_orderId": {required: true, type: String, description: "paypal 付款码"},
	"OrderId": {required: true, type: ObjectId, description: "付款码对应的订单"},
}

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}



// 返回值
// status(200);
