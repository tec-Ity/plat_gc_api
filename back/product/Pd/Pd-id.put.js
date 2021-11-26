api = "https://example.com/api/b1/Pd/:id";
method = "PUT";
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}


general: {
	nome: {required: false, type: String, description: "产品名称"},
	Nation: {required: false, type: ObjectId, description: "产品所属国家"},
	code: {required: false, type: String, description: "产品条形码, 可以为空, 如果填写 则公司唯一"},
	desp: {required: false, type: String, description: "产品描述"},

	price_regular: {required: false, type: Float, description: "产品标价"},
	price_sale: {required: false, type: Float, description: "产品售价"},

	unit: {required: false, type: String, description: "产品单位, 如: 瓶 个 箱 PZ"},
	Brand: {required: false, type: ObjectId, description: "产品所属品牌"},
	Categ: {required: false, type: ObjectId, description: "产品二级分类"},
	is_usable: {required: false, type: Boolean, default: true, description: "产品邮编"},
	sort: {required: false, type: Number, default: 0, description: "产品排序"},
	// disable
	img_urls: "查看 Pd_img 接口",

	force: {
		price: {required: false, type: Boolean, description: "是否把价格(price_regular, price_sale)同步到商品中的价格"},
		is_usable: {required: false, type: Boolean, description: "是否把is_usable同步到商品中的价格"},
	},
}
put_img_url = {
    sort: {required: true, type: Number, description: "图片放置位置"},
	img_url: {required: true, type: String, description: "产品图片路径"},
}
delete_img_urls: {
	img_urls: [{required: true, type: Array, description: "产品图片路径"}],
}

// 如果不添加本地图片 建议直接传数据 选择修改的类型
formData = { general };
formData = { put_img_url };
formData = { delete_img_urls };

// 如果添加本地图片 要用这个 不能与图片删除排序一起
formData = new formData();
[formData.append("file_"+i, image_File)];	// formData.append(["file0"], 'file路径0');
