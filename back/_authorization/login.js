// 用户创建接口 API

api = "https://example.com/api/b1/login";
method = "POST";
formData = {
	code: {required: false, type: String, description: "用户编号"},	
	pwd: {required: false, type: String, description: "用户密码"}
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
		crUser: {
			phonePre: '0039',
			phone: '3888676756',
			code: 'GCMANAGER',
			nome: 'wang',
			role: '1',
			Firm: '5ea8446975800b73d8da0e34',
		}
	}
}