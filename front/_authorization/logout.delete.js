// 用户登出接口 API, 前端登出可以不叫后端 直接登出， 如果叫后端 后端可以删除数据库中的 refreshToken

api = "https://example.com/api/v1/logout";
methods = "DELETE";
formData = null;
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+refreshToken		// 注意要传递 refreshToken
}



// 返回值
// status(205);
res = {
	status: 200,
	message: "成功登出",
}