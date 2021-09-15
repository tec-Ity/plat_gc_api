// 用户重新激活手机或邮箱，换手机或邮箱时用 API

api = "https://example.com/api/v1/reActive";
method = "PUT";
formData = {
	pwd: {required: true, type: String, description: "账号密码"},			// 防止其他人拿到已登录的账号 篡改激活手机或邮箱
																		// 如果不记得密码 可以用原手机或邮箱 更新密码

	otp: {required: true, type: String, description: "手机或邮箱验证码"},

	email: {required: false, type: String, description: "用户 激活的邮箱 "},		// 如果 email 为 true 则先判断 email 的验证;

	phone: {required: false, type: String, description: "客户的 激活的电话 "},		// 如果 email 为 false 则需要传入 phone 和 phonePre
	phonePre: {required: false, type: String, description: "客户的 phonePre "},
}
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
		object: {
			"is_changed": false,
			"is_usable": true,
			"sort": 0,
			"_id": "60eee9d6ed93b12abf699992",
			"phone": "+393888787897",
			"code": "21JUL0001",
			"pwd": "$2a$10$ggelmzKL.PK.h7R1a9s//ea9yfcTCT/xVN4e6vSxXEul.ANTsKqkq",
			"is_active": true,
			"socials": [],
			"addrs": [],
			"at_last_login": "2021-08-17T10:04:28.603Z",
			"at_crt": "2021-07-14T13:42:46.734Z",
			"at_upd": "2021-08-17T10:04:28.608Z",
			"__v": 0,
		}
	}
}