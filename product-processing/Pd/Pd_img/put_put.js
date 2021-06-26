api = "https://example.com/api/v1/PdPut_ImgPut/:id";
fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"put_img": dataObj});
}
dataObj = {
	sort: {required: true, type: Number, description: "图片放置位置"},
	img_url: {required: true, type: String, description: "产品图片路径"},
}