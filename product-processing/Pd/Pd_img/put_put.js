api = "https://example.com/api/v1/PdPut_ImgPut/:id";
method = "PUT";
formData = {
    "putObj" = {
        sort: {required: true, type: Number, description: "图片放置位置"},
    	img_url: {required: true, type: String, description: "产品图片路径"},
    }
}
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    "authorization": "auth"+" "+accessToken
}