// 用户创建接口 API
api = "https://example.com/api/v1/logout";
methods = "GET";
formData = null;
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
	"authorization": "auth"+" "+refreshToken		// 注意要传递 refreshToken
}



// 返回值
// status(205);
res = {
	status: 200,
	message: "成功登出",
}