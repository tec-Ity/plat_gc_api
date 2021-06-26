api = "https://example.com/api/v1/AttrPut/:id";
method = "PUT";
formData = {
	obj = {
		nome: {required: false, type: String, description: "商品属性名称"},
		sort: {required: false, type: Number, description: "商品属性排序"},

		options: "如果修改 options 则查看 AttrPut_option 接口"
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