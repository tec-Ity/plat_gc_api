// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/b1/CategPost";
method = "POST";
formData = {
    "obj": {
        code: {required: true, type: String, description: "分类编号, 公司唯一"},

        	level: {required: true, type: Number, enum: [1, 2], description: "分类层级"},
        	Categ_far: {required: level==1?false:true, type: ObjectId, description: "父分类"},
        	img_url: {required: false, type: String, description: "分类logo"},
    }
}
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}