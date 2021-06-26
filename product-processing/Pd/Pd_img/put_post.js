api = "https://example.com/api/v1/PdPut_ImgPost/:id";
axios.post("api", formData, {
	headers: {
		"content-type": "application/json",
		"authorization": "accessToken " + accessToken
	}
})

[formData.append("file_"+i, image_File)];