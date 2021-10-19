api = "https://example.com/api/b1/Prod/:id";
method = "PUT";

formData = {
	"general": {
		desp: {required: false, type: String, description: "商品描述"},
		unit: {required: false, type: String, description: "商品单位, 如: 瓶 个 箱 PZ"},
		is_festival: {required: false, type: Boolean, default: true, description: "是否为节日商品"},
		is_hot: {required: false, type: Boolean, default: true, description: "是否热销"},
		is_usable: {required: false, type: Boolean, default: true, description: "商品是否可用"},
		sort: {required: false, type: Number, default: 0, description: "商品排序"}

		// 需要查看 prod
		Attrs:  "查看 Prod_Attrs 接口",
		Skus:  "查看 Prod_Sku 接口",
	}
}

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