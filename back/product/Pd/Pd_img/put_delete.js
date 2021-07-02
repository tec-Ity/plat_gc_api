api = "https://example.com/api/b1/PdPut_ImgDelete/:id";
method = "PUT";
formData = {
	"delObj": {
		img_urls: [{required: true, type: Array, description: "产品图片路径"}],
	}
};
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}