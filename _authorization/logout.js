// 用户创建接口 API
api = "https://example.com/api/v1/logout";

req = {
	url: "https://example.com/api/v1/logout",
	methods: "GET",
	headers: {
		"authorization": "(refreshToken)"
	}
}



// 返回值
// status(205);
res = {
	status: 200,
	message: "成功登出",
}