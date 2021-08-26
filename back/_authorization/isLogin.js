// 判度是否登陆
api = "https://example.com/api/b1/isLogin";
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
		crUser: {							// 返回 当前使用 用户 前缀 cr: current
			phonePre: '0039',
			phone: '3888676756',
			code: 'GCMANAGER',
			nome: 'wang',
			role: '1',
			Firm: '5ea8446975800b73d8da0e34',
		},
		accessToken: 'eyJ...CD1349Mw'
	}
}
