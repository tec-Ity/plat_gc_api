api = "https://example.com/api/v1/PdPut_ImgPost/:id";
method = "PUT";
formData = new formData();
[formData.append("file_"+i, image_File)];
    
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    "authorization": "auth"+" "+accessToken
}


