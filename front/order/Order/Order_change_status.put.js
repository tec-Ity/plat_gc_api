api = "https://example.com/api/v1/Order_change_status/:id";
method = "PUT";
formData = {
	"action": {required: true, type: String, description: "change status action"}, // type: ConfOrder.action.front 
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