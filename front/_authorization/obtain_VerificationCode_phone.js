// 用户创建接口 API

api = "https://example.com/api/v1/obtain_VerificationCode_phone";
method = "POST";
formData = {
	phone: {required: false, type: String, description: "客户的 激活的电话 "},
	phonePre: {required: false, type: String, description: "客户的 phonePre "},
}
headers = null;



// 返回值
// status(200);
res = {
	status: 200,
	message: "",
	data: {
		
	}
}