api = "https://example.com/api/v1/AttrPut/:id/optionDelete";
method = "PUT";
formData = {
	"delObj": {
		options: {required: true, type: Array[String], description: "要删除的 商品属性值"}
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