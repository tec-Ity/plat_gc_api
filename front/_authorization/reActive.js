// 用户创建接口 API

api = "https://example.com/api/v1/reActive";
method = "PUT";
formData = {
	otp: {required: true, type: String, description: "手机或邮箱验证码"},

	email: {required: false, type: String, description: "用户 激活的邮箱 "},		// 如果 email 为 true 则先判断 email 的验证;

	phone: {required: false, type: String, description: "客户的 激活的电话 "},		// 如果 email 为 false 则需要传入 phone 和 phonePre
	phonePre: {required: false, type: String, description: "客户的 phonePre "},
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