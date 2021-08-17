// 刷新token

api = "https://example.com/api/v1/refreshToken";
methods = "GET";
formData = null;
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+refreshToken		// 注意要传递 refreshToken
}

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
		},
		accessToken: 'eyJ...CD1349Mw'
	}
}