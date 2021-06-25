api = "https://example.com/api/v1/AttrPut/:id/optionPost";

fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"obj": dataObj, "alone": dataAlone});	
}
dataObj = {
	options: {required: true, type: Array[String], description: "要添加的 商品属性值"}
}
// 如果 dataObj.options 不为空 则 dataAlone 无效
dataAlone = {
	option: {required: true, type: String, description: "要添加的 商品属性值"},
	sort: {required: false, type: Number, description: "此属性值的排序位置"}
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