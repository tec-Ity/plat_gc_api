api = "https://example.com/api/v1/Order";
method = "PUT";


general = {
	note_Client: {required: false, type: ObjectId, description: "客户备注"},
	type_paid: {required: false, type: ObjectId, description: "付款方式"},
	type_ship: {required: false, type: ObjectId, description: "运输方式"},
}
ship = {
	Cita: {required: true, type: ObjectId, description: "送达城市"},
	
	firstname: String,
	lastname: String,
	company: String,
	address: String,
	city: String,
	state: String,
	postcode: String,
	country: String,
	email: String,
	phone: String
}


formData = { general };
formData = { ship };

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