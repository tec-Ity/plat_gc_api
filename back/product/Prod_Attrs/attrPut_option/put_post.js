api = "https://example.com/api/b1/AttrPut/:id/optionPost";
method = "PUT";
formData = {
	"obj": {
		options: {required: true, type: Array[String], description: "要添加的 商品属性值"}
		// 如果 options 后端可以识别 '["a", "b"]'  "['a', 'b']"  "a, b"   "'a','b'"   等字符串数组
	},
	"alone": { // 如果 obj.options 不为空 则 alone 无效
		option: {required: true, type: String, description: "要添加的 商品属性值"},
		sort: {required: false, type: Number, description: "此属性值的排序位置"}
	}
};
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