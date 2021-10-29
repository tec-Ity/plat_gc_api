api = "https://example.com/api/b1/Attr/:id";
method = "PUT";
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
	"authorization": "auth"+" "+accessToken
}



general = {
	nome: {required: false, type: String, description: "商品属性名称"},
	sort: {required: false, type: Number, description: "商品属性排序"},
};
optionPost = {
	options: {required: true, type: String, description: "新增商品属性值"},	// 以逗号分割 可以添加多个值
};
optionPuts = [{				// 注意 此处是数组, 可以一次性修改多个值
	option: {required: true, type: String, description: "需要修改的商品属性值"},
	optionPut: {required: false, type: String, description: "修改为新的商品属性值"},
	sort: {required: false, type: Number, description: "修改商品属性值的排序"},
}];
optionDelete = {
	options: {required: true, type: Array[String], description: "要删除的 商品属性值"}
};



formData = { general }
formData = { optionPost }
formData = { optionPuts }
formData = { optionDelete }


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