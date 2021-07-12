// 用户创建接口 API

api = "https://example.com/api/v1/register";
method = "POST";
formData = {
	pwd: {required: true, type: String, description: "用户密码"},

	email: {required: false, type: String, description: "用户 激活的邮箱 "},
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
		accessToken,
		refreshToken,
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