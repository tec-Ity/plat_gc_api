api = "https://example.com/api/v1/AttrPut/:id";

fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"obj": dataObj});	
}
dataObj = {
	nome: {required: false, type: String, description: "商品属性名称"},
	sort: {required: false, type: Number, description: "商品属性排序"},

	options: "如果修改 options 则查看 AttrPut_option 接口"
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