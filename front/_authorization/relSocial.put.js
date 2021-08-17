// 关联第三方账号 API

api = "https://example.com/api/v1/relSocial";
method = "PUT";
formData = {
	"login_type": {required: true, type: String, description: "登陆方式"}; // enum: ["facebook", "google"];
	"Client_accessToken": {required: true, type: String, description: "客户 facebook 的 accessToken"},
}
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}



// 返回值
// status(200);
res = {
	status: 200,
	message: "",
	data: {
		object: {
			
		}
	}
}