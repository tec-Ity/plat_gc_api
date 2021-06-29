api = "https://example.com/api/b1/AttrPut/:id/optionPut";
method = "PUT";
formData = {
	"putObj": {
		option: {required: true, type: String, description: "要修改的 原商品属性值"},
		sort: {required: false, type: Number, description: "属性值的排序"},
		optionPut: {required: !sort && true, type: String, description: "要修改的 新商品属性值"}
	}
};
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