api = "https://example.com/api/b1/Brand_ImgPut/:id";
method = "PUT";
formData = new formData();
formData.append("file", image_File);
    
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}


// 是否能合并到 BrandPut 中