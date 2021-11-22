// 只有总公司管理员以上级别可以创建
// fetch 出错 暂时没有解决

api = "https://example.com/api/b1/Pd";
method = "POST";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}


obj = {
    nome: {required: true, type: String, description: "产品名称"},
    Nation: {required: true, type: ObjectId, description: "产品所属国家"},
    Brand: {required: true, type: ObjectId, description: "产品所属品牌"},
    Categ: {required: true, type: ObjectId, description: "产品二级分类"},
    price_regular: {required: false, type: Float, description: "产品标价"},
    price_sale: {required: false, type: Float, description: "产品售价"},
    code: {required: false, type: String, description: "产品条形码, 可以为空, 如果填写 则公司唯一"},
    // img_urls: {required: false, type: Array[String], description: "产品图片"},	// 文件传输
    desp: {required: false, type: String, description: "产品描述"},
    unit: {required: false, type: String, description: "产品单位, 如: 瓶 个 箱 PZ"},
    is_usable: {required: false, type: Boolean, default: true, description: "产品是否可用"},
    sort: {required: false, type: Number, default: 0, description: "产品排序"}
}

// 如果不添加本地图片 建议用这个
formData = {obj};

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