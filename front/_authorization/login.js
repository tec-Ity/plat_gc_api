// 用户创建接口 API

api = "https://example.com/api/v1/login";
method = "POST";
formData = {
	"system": {	// 如果是 系统登陆 则不需要传 social 对象
		// code / 已激活邮箱 / 已激活电话 可直接用密码登陆。
		// 已激活邮箱 / 已激活电话 可以验证码登陆
		code: {required: false, type: String, description: "用户账号"},
		email: {required: false, type: String, description: "用户 激活的邮箱 "},
		phone: {required: false, type: String, description: "客户的 激活的电话 "},
		phonePre: {required: false, type: String, description: "客户的 phonePre "},
		pwd: {required: true, type: String, description: "用户密码"}
	},
	"social": {	// 第三方登陆 如果没有 系统登陆 system 对象 则必须传递 social 对象
		"login_type": {required: true, type: String, description: "登陆方式"}; // enum: ["facebook", "google"];
		"Client_accessToken": {required: true, type: String, description: "客户 facebook 的 accessToken"}
	}
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