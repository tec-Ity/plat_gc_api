api = "https://example.com/api/b1/Categ_ImgPost/:id";
method = "PUT";
formData = new formData();
formData.append("file", image_File);
    
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}