api = "https://example.com/api/b1/User/:id";
method = "PUT";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}

general = {
	Shop: {required: false, type: ObjectId, description: "员工所属城市"},		// 只有总公司管理员以上级别可以修改

	code: {required: false, type: String, description: "用户编号, 系统唯一"},	// 管理者可以修改
	nome: {required: false, type: String, description: "员工名称"},			// 管理者可以修改
	phonePre: {required: false, type: String, description: "电话前缀"},		// 管理者可以修改
	phone: {required: false, type: String, description: "员工电话"},			// 管理者可以修改
	is_usable: {required: false, type: Number, description: "员工是否可用"},	// 管理者可以修改
	role: {required: false, type: Number, description: "员工的排序"},			// 管理者可以修改
	sort: {required: false, type: Number, description: "员工的排序"},			// 管理者可以修改

	// disable
	Firm: "为只读",
	User_crt: "为只读",
}
password = {
    pwd: {required: true, type: String, description: "用户密码"},
    pwdConfirm: {required: true, type: String, description: "用户确认密码"},
    pwdOrg: {required: false, type: String, description: "用户原密码"}, // 管理者可以不需要 直接修改, 本人修改需要原密码

}


formData = { general }
formData = { password }


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