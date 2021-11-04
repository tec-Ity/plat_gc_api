// paypal付款成功后, 再此把 paypal_orderId 和 订单_id 给后端验证 以改变订单状态

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
