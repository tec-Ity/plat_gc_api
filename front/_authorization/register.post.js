// 用户注册接口 API

api = "https://example.com/api/v1/register";
method = "POST";
formData = {
	pwd: {required: true, type: String, description: "用户密码"},
	otp: {required: true, type: String, description: "手机或邮箱验证码"},

	email: {required: false, type: String, description: "用户 激活的邮箱 "},		// 如果 email 为 true 则先判断 email 的验证;

	phone: {required: false, type: String, description: "客户的 激活的电话 "},		// 如果 email 为 false 则需要传入 phone 和 phonePre
	phonePre: {required: false, type: String, description: "客户的 phonePre "},
}
headers = null;



// 返回值
// status(200);
res = {
	status: 200,
	message: "",
	data: {
		crClient: {
			email: 'kelin@gmail.com',
			is_active_email: true,
			phonePre: '0039',
			phone: '3888676756',
			is_active_phone: false,
			is_active: true,
			socials: [
				{
					social_type: "facebook",
					social_id: "128391872783"
				}
			],
			nome: 'wang',
		}
	}
}