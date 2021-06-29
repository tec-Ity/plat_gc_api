// 刷新token

api = "https://example.com/api/b1/refreshToken";
methods = "GET";
formData = null;
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
	"authorization": "auth"+" "+refreshToken		// 注意要传递 refreshToken
}

// 返回值
// status(200);
res = {
	status: 200,
	message: "",
	data: {
		crUser: {
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