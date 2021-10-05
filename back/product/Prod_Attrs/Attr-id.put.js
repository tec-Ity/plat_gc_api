api = "https://example.com/api/b1/Attr/:id";
method = "PUT";
formData = {
	"general": {
		nome: {required: false, type: String, description: "商品属性名称"},
		sort: {required: false, type: Number, description: "商品属性排序"},

		options: "如果修改 options 则查看 AttrPut_option 接口"
	},
	"optionPost": {
		option: {required: true, type: String, description: "新增商品属性值"},
		sort: {required: false, type: Number, default: 0, description: "新增商品属性值的排序"},
	},
	"optionPut": {
		option: {required: true, type: String, description: "需要修改的商品属性值"},
		optionPut: {required: false, type: String, description: "修改为新的商品属性值"},
		sort: {required: false, type: Number, description: "修改商品属性值的排序"},
	},
	"optionDelete": {
		options: {required: true, type: Array[String], description: "要删除的 商品属性值"}
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