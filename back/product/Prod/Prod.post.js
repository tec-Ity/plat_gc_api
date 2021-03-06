// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/b1/Prod";
method = "POST";
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
};
Pd = {required: true, type: ObjectId, description: "商品所属产品"};
Pds = [{required: true, type: ObjectId, description: "商品所属产品"}];

obj = {
	code: {required: true, type: String, description: "商品条形码, 可以为空, 如果填写 则公司唯一"},
	nome: {required: true, type: String, description: "商品名称"},
	price_regular: {required: true, type: Float, description: "产品标价"},
	price_sale: {required: true, type: Float, description: "产品售价"},
	Nation: {required: false, type: ObjectId, description: "商品所属国家"},
	Brand: {required: false, type: ObjectId, description: "商品所属品牌"},
	Categ: {required: false, type: ObjectId, description: "商品二级分类"},
	// img_urls: {required: false, type: Array[String], description: "商品图片"},	// 文件传输
	desp: {required: false, type: String, description: "商品描述"},
	unit: {required: false, type: String, description: "商品单位, 如: 瓶 个 箱 PZ"},
	is_usable: {required: false, type: Boolean, default: true, description: "商品是否可用"},
	sort: {required: false, type: Number, default: 0, description: "商品排序"},
};

// 如果是从商店同步
formData = {Pd};
formData = {Pds};

// 如果添加本地图片 只能用这个
// 建议不要使用 fetch 因为其对文件传输不太友好
formData = new formData();
formData.append("obj", JSON.stringify(obj));
[formData.append("file_"+i, image_File)];   // formData.append(["file0"], 'file路径0');

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