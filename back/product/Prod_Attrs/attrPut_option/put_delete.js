api = "https://example.com/api/b1/AttrPut/:id/optionDelete";
method = "PUT";
formData = {
	"delObj": {
		options: {required: true, type: Array[String], description: "要删除的 商品属性值"}
        // 如果 options 后端可以识别 '["a", "b"]'  "['a', 'b']"  "a, b"   "'a','b'"   等字符串数组
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