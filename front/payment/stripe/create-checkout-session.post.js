// stripe 付款
api = "https://example.com/api/v1/create-checkout-session";
method = "POST";
formData = {
	"OrderId": {required: true, type: ObjectId, description: "所要付款订单的 _id"},
	"success_url": {required: true, type: String, description: "付款成功跳转的页面"},
	"cancel_url": {required: true, type: String, description: "付款失败跳转的页面"},
}

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}



// 返回值
// status(200);