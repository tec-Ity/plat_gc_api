// 所有用户可以调取自己, 管理者可以调取权限较低的用户, 如果是分店管理者: 只可以调取本店的

api = "https://example.com/api/b1/User/[:id]";
methods = "GET";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}
formData = null;

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