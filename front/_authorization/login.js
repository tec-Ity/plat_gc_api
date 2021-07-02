// 用户创建接口 API

api = "https://example.com/api/v1/login";
method = "POST";
formData = {
	"login_type": {required: true, type: String, description: "登陆方式"}; // enum: ["facebook"];
	"facebook": {
		Client_accessToken: {required: true, type: String, description: "客户 facebook 的 accessToken"},
		// user_id: {required: true, type: String, description: "客户 facebook 的 user_id"},
		"obj": {
			email: {required: true, type: String, description: "客户 facebook 的 email "},
			nome: {required: false, type: String, description: "客户 facebook 的 名字 "}
		}
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