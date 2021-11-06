// 用户登录接口 API
// 可以第三方登录
// 也可以系统账号/邮箱/手机 + 密码登录

api = "https://example.com/api/v1/login";
method = "POST";
formData = {
	"system": {	// 如果是 系统登陆 则不需要传 social 对象
		// code / 已激活邮箱 / 已激活电话 可直接用密码登陆。
		// 已激活邮箱 / 已激活电话 可以验证码登陆
		code: {required: false, type: String, description: "用户账号"},
		email: {required: false, type: String, description: "用户 激活的邮箱 "},
		phone: {required: false, type: String, description: "客户的 激活的电话 "},
		phonePre: {required: false, type: String, description: "客户的 phonePre "},
		pwd: {required: true, type: String, description: "用户密码"}
	},
	"social": {	// 第三方登陆 如果没有 系统登陆 system 对象 则必须传递 social 对象
		"login_type": {required: true, type: String, description: "登陆方式"}; // enum: ["facebook", "google", "wx"];
		"Client_accessToken": {required: true, type: String, description: "客户 facebook 的 accessToken"}
	}
}
headers = null;



// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 登录成功",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVlZTlkNmVkOTNiMTJhYmY2OTk5OTIiLCJjb2RlIjoiMjFKVUwwMDAxIiwicGhvbmUiOiIrMzkzODg4Nzg3ODk3IiwiaWF0IjoxNjI5MTk0NjY4LCJleHAiOjE2MjkxOTQ3Mjh9.h4yjkg04BZ6WQ3m2yjlvY-XFerl-10CIhNTV8U_WVak",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVlZTlkNmVkOTNiMTJhYmY2OTk5OTIiLCJjb2RlIjoiMjFKVUwwMDAxIiwicGhvbmUiOiIrMzkzODg4Nzg3ODk3IiwiaWF0IjoxNjI5MTk0NjY4LCJleHAiOjE2MzE3ODY2Njh9.ILDI6QSdEFU0c1VXH59eprw-U0PRuFcp4fq74bIa3jo",
        "curClient": {
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
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVlZTlkNmVkOTNiMTJhYmY2OTk5OTIiLCJjb2RlIjoiMjFKVUwwMDAxIiwicGhvbmUiOiIrMzkzODg4Nzg3ODk3IiwiaWF0IjoxNjI5MTk0NjY4LCJleHAiOjE2MzE3ODY2Njh9.ILDI6QSdEFU0c1VXH59eprw-U0PRuFcp4fq74bI03jo"
        }
    }
}