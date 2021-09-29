// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/b1/Prod";
method = "POST";
formData = {
	Pd: {required: true, type: ObjectId, description: "商品所属产品"},
	// 如果是分店人员, 则不需要 因为 curUser中有 Shop信息
	Shop: {required: crUser<101?true:false, type: ObjectId, description: "商品所属分店"},
	obj: {
		nome: {required: true, type: String, description: "商品名称"},
		Nation: {required: true, type: ObjectId, description: "商品所属国家"},
		Brand: {required: true, type: ObjectId, description: "商品所属品牌"},
		Categ: {required: true, type: ObjectId, description: "商品二级分类"},
		price: {required: true, type: Float, default: 0, description: "商品同步商品时的默认价格, 可不填写"},
		code: {required: false, type: String, description: "商品条形码, 可以为空, 如果填写 则公司唯一"},
		// img_urls: {required: false, type: Array[String], description: "商品图片"},	// 文件传输
		desp: {required: false, type: String, description: "商品描述"},
		unit: {required: false, type: String, description: "商品单位, 如: 瓶 个 箱 PZ"},
		is_usable: {required: false, type: Boolean, default: true, description: "商品是否可用"},
		sort: {required: false, type: Number, default: 0, description: "商品排序"},
	},
};

headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
};

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