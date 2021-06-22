api = "https://example.com/api/v1/CategPut/:id";

fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"obj": dataObj});	
}
dataObj = {
	code: {required: false, type: String, description: "分类编号, 公司唯一"},
	is_usable: {required: false, type: Boolean, description: "分类是否可用"},
	sort: {required: false, type: Number, description: "分类的排序"},	
	img_url: {required: false, type: String, description: "分类logo"},
	Categ_far: {required: level==1?false:true, type: ObjectId, description: "父分类"},
	Firm: "为只读",
	level: "为只读",
}
