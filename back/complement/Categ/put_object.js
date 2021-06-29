api = "https://example.com/api/b1/CategPut/:id";
method = "PUT";
formData = {
	"obj": {
		code: {required: false, type: String, description: "分类编号, 公司唯一"},
		is_usable: {required: false, type: Boolean, description: "分类是否可用"},
		sort: {required: false, type: Number, description: "分类的排序"},	
		img_url: {required: false, type: String, description: "分类logo"},
		Categ_far: {required: level==1?false:true, type: ObjectId, description: "父分类"},
		Firm: "为只读",
		level: "为只读",
	}
}
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
	"authorization": "auth"+" "+accessToken
}