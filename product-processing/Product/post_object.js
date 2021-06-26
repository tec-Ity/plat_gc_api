// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/v1/PdPost";
method = "POST";
formData = {
    obj = {
        Prod: {required: true, type: ObjectId, description: "所属产品"}
        attrs: [{
        	nome: String,
        	option: String
        }] // {require: true,}
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
    "message": "[server] 创建成功",
    "data": {
        "object": {
        	
        },
    }
}