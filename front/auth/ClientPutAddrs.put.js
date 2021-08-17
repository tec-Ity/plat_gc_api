api = "https://example.com/api/v1/ClientPutAddrs";
method = "PUT";
formData = {
    "post_addr": {
        "cita": {required: true, type: ObjectID, description: "所要添加的城市"},

        "firstname": {required: false, type: String, description: "收件人姓"},
        "lastname": {required: false, type: String, description: "收件人名"},
        "company": {required: false, type: String, description: "收件人公司"},
        "address": {required: false, type: String, description: "收件人地址"},
        "city": {required: false, type: String, description: "收件人城市"},
        "state": {required: false, type: String, description: "收件人大区"},
        "postcode": {required: false, type: String, description: "收件人邮编"},
        "country": {required: false, type: String, description: "收件人国家"},
        "email": {required: false, type: String, description: "收件人email"},
        "phone": {required: false, type: String, description: "收件人电话"},
    },
    "put_addr": {
        "addr_id": {required: true, type: ObjectID, description: "所要修改地址的 _id"},

        "cita": {required: true, type: ObjectID, description: "所要添加的城市"},

        "firstname": {required: false, type: String, description: "收件人姓"},
        "lastname": {required: false, type: String, description: "收件人名"},
        "company": {required: false, type: String, description: "收件人公司"},
        "address": {required: false, type: String, description: "收件人地址"},
        "city": {required: false, type: String, description: "收件人城市"},
        "state": {required: false, type: String, description: "收件人大区"},
        "postcode": {required: false, type: String, description: "收件人邮编"},
        "country": {required: false, type: String, description: "收件人国家"},
        "email": {required: false, type: String, description: "收件人email"},
        "phone": {required: false, type: String, description: "收件人电话"},
    },
    "delete_attr": {
        "addr_id": {required: true, type: ObjectID, description: "所要修改地址的 _id"}
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