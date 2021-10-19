api = "https://example.com/api/v1/Client";
method = "PUT";


general: {
    nome: {required: false, type: String, description: "用户名称"},
},

// code: {required: false, type: String, description: "账号"},			// 修改账号 暂时不做这个功能 每个用户一年只能修改一次
password: {
    "pwd": {required: false, type: String, description: "用户新密码"},
    "pwdOrg": {required: false, type: String, description: "用户原密码"},   	// 如果是修改密码 必须输入原密码
},
addr_post: {
    Cita: {required: true, type: ObjectId / String, description: "所属城市, 如果是String 必须是两个字符"},

    name: {required: true, type: String, description: "收货人名字"},
    address: {required: true, type: String, description: "收货人地址"},
    postcode: {required: true, type: String, description: "收货人邮编"},
    phone: {required: true, type: String, description: "收货人电话"},
    note: {required: false, type: String, description: "备注： 如 楼层/门铃"}
},
addr_put: {
    _id: {required: true, type: ObjectId, description: "要修改的 地址 _id"},

    Cita: {required: true, type: ObjectId / String, description: "Cita, 如果是String 必须是两个字符"},

    name: {required: true, type: String, description: "收货人名字"},
    address: {required: true, type: String, description: "收货人地址"},
    postcode: {required: true, type: String, description: "收货人邮编"},
    phone: {required: true, type: String, description: "收货人电话"},
    note: {required: false, type: String, description: "备注： 如 楼层/门铃"}
},
addr_sort: {
    _id: {required: true, type: ObjectId, description: "要删除的 地址 _id"},
    numTh: {type: false,  type: Number, default: 1, description: "想要排在数组第几位"},
},
addr_del: {required: true, type: ObjectId, description: "要删除的 地址 _id"},


formData = { general };
formData = { password };
formData = { addr_post };
formData = { addr_put };
formData = { addr_sort };
formData = { addr_del };


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