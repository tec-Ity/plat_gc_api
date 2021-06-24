// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/v1/PdPost";

fetchObj = {
	methods: "POST",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"obj": dataObj});	
}
dataObj = {
	Pd: {required: true, type: ObjectId, description: "商品所属产品"},
	Shop: {required: crUser<101?true:false, type: ObjectId, description: "商品所属分店"},
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