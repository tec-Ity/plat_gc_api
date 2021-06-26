api = "https://example.com/api/v1/PdPut_ImgDelete/:id";
fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"del_imgs": dataObj});
}
dataObj = {
	img_urls: {required: true, type: Array, description: "产品图片路径"},
}
