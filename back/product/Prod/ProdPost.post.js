// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/b1/ProdPost";
method = "POST";
formData = {
	obj: {
		Pd: {required: true, type: ObjectId, description: "商品所属产品"},
		Shop: {required: crUser<101?true:false, type: ObjectId, description: "商品所属分店"},
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
    "message": "[server] 创建成功",
    "data": {
        "object": {
        	
        },
    }
}