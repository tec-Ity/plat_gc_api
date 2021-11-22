api = "https://example.com/api/b1/Firm/:id";
method = "PUT";
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}


general = {
	nome: {required: false, type: String, description: "公司名称"},
	resp: {required: false, type: String, description: "公司负责人"},
	tel: {required: false, type: String, description: "公司电话"},
	addr: {required: false, type: String, description: "公司地址"},
};
mainShop = {
	ShopId: {required: true, type: ObjectId, description: "想要设置主店的 _id"}
};


// 如果不添加本地图片 建议直接传数据 选择修改的类型
formData = { general };
formData = { mainShop };




// 返回值
// status(200);