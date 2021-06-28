api = "https://example.com/api/v1/PdPut/:id";
method = "PUT";
formData = {
	"obj": {
		nome: {required: false, type: String, description: "产品名称"},
		Nation: {required: false, type: ObjectId, description: "产品所属国家"},
		code: {required: false, type: String, description: "产品条形码, 可以为空, 如果填写 则公司唯一"},
		desp: {required: false, type: String, description: "产品描述"},
		unit: {required: false, type: String, description: "产品单位, 如: 瓶 个 箱 PZ"},
		Brand: {required: false, type: ObjectId, description: "产品所属品牌"},
		Categs: {required: false, type: Array[ObjectId], description: "产品二级分类"},
		price: {required: false, type: Float, default: 0, description: "商品同步产品时的默认价格, 可不填写"},
		is_usable: {required: false, type: Boolean, default: true, description: "产品邮编"},
		sort: {required: false, type: Number, default: 0, description: "产品排序"},
		// disable
		img_urls: "查看 Pd_img 接口"
	},
	"force": {
		Categs: {required: false, type: Boolean, description: "强制更新 子商品"},
	}
}
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
	"authorization": "auth"+" "+accessToken
}