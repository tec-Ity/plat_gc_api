// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/b1/User";
method = "POST";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}


obj = {
    code: {required: true, type: String, description: "用户账户, 系统唯一"},
    pwd: {required: true, type: String, description: "用户密码"},

    role: {required: true, type: Number, description: "用户密码"},
    Shop: {required: role>100?true:false, type: ObjectId, description: "所属分店"},

    nome: {required: false, type: String, description: "员工名字"},
    phonePre: {required: false, type: String, description: "电话前缀"},
    phone: {required: false, type: String, description: "员工电话"},
}


formData = { obj };


// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "object": {
            "is_usable": true,
            "_id": "60bdddf9477e752019dfe61b",
            "is_blacklist": 1,
            "phonePre": "0039",
            "phone": "3888676796",
            "code": "TEST",
            "Firm": {
                "_id": "60bcddc8dbbedb2669903384",
                "code": "VANILLA",
                "nome": "GREEN CITY"
            },
            "nome": "测试",
            "role": 1,
            "at_upd": "2021-06-14T14:02:19.911Z",
            "__v": 0,
            "at_last_login": "2021-06-14T14:00:38.901Z",
            "is_shelf": true
        }
    }
}