// 判度是否登陆
api = "https://example.com/api/v1/isLogin";
methods = "GET";
formData = null;
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
		crClient: {
			email: 'kelin@gmail.com',
			phone: '+393888676756',
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