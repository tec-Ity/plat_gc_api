// paypal 付款
api = "https://example.com/api/v1/create-order";
method = "POST";
formData = {
	"OrderId": {required: true, type: ObjectId, description: "所要付款订单的 _id"},
};

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
};



// 返回值
// status(200);