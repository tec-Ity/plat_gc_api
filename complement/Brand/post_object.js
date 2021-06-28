// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/v1/BrandPost";
method = "POST";
formData = {
    "obj": {
        code: {required: true, type: String, description: "品牌编号, 公司唯一"},
        nome: {required: true, type: String, description: "品牌名称, 公司唯一"},

        Nation: {required: false, type: ObjectId, description: "品牌所属国家"},
        img_url: {required: false, type: String, description: "品牌logo"}
    }
}
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    "authorization": "auth"+" "+accessToken
}


// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "count": 1,
        "page": 1,
        "pagesize": 50,
        "object": null,
        "objects": [
            {
                "img_url": "./media/defalut/Brand.jpg",
                "is_usable": true,
                "_id": "60d08f7726759a3fac716d2f",
                "code": "TT",
                "nome": "sdfs",
                "Nation": {
                    "_id": "60c48b392cfcd22c4d7bbb60",
                    "code": "IT",
                    "nome": "ITALY"
                },
                "Firm": "60bcddc8dbbedb2669903384",
                "User_crt": "60cb07d6a394cd150c3391d3",
                "langs": [],
                "sort": 0,
                "at_crt": "2021-06-21T13:09:11.391Z",
                "at_upd": "2021-06-21T13:09:11.391Z",
                "__v": 0
            }
        ]
    }
}