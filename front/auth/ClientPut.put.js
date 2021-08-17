api = "https://example.com/api/v1/ClientPut";
method = "PUT";
formData = {
	// code: {required: false, type: String, description: "账号"},			// 修改账号 暂时不做这个功能 每个用户一年只能修改一次
	pwd: {required: false, type: String, description: "用户新秘密秘密"},
	pwdOrg: {required: false, type: String, description: "用户原秘密"},	// 如果是修改秘密 必须输入原密码

	"obj": {
		nome: {required: false, type: String, description: "店铺名称, 公司唯一"},	// 只有总公司管理员以上级别可以修改
	}
}
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}

// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 修改成功",
    "data": {
        "object": {
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