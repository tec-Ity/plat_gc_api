api = "https://example.com/api/b1/Categ/:id";
method = "PUT";
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
};

general = {
	code: {required: false, type: String, description: "分类编号, 公司唯一"},
	is_usable: {required: false, type: Boolean, description: "分类是否可用"},
	sort: {required: false, type: Number, description: "分类的排序"},	
	img_url: {required: false, type: String, description: "分类logo"},
	Categ_far: {required: level==1?false:true, type: ObjectId, description: "父分类"},
};

// 如果不添加本地图片 建议直接传数据
formData = { general }

// 如果添加本地图片 要用下面的
formData = new formData();
[formData.append("file_"+i, image_File)];	// formData.append(["file0"], 'file路径0');
formData.append("obj", JSON.stringify(general));