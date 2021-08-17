// 获取手机或邮箱验证码


api = "https://example.com/api/v1/obtain_otp";
method = "POST";
formData = {
	"email":{required: false, type: String, description: "客户的 激活邮箱 "},		// 如果输入邮箱 则获取邮箱验证码， 否则为手机

	// 测试状态 只有测试手机可用
	"phone": {required: false, type: String, description: "客户的 激活的电话 "},	// 如果邮箱和手机全都不输入 则报错
	"phonePre": {required: false, type: String, description: "客户的 phonePre "},
}
headers = null;



// 返回值
// status(200);
res = {
	status: 200,
	message: "验证码已发送",
	data: {
		"status": "pendding"
	}
}