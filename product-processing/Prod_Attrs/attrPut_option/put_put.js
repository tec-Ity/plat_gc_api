api = "https://example.com/api/v1/AttrPut/:id/optionPut";

fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"put": dataPut});	
}
dataPut = {
	option: {required: true, type: String, description: "要修改的 原商品属性值"},
	sort: {required: false, type: Number, description: "属性值的排序"},
	optionPut: {required: !sort && true, type: String, description: "要修改的 新商品属性值"}
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