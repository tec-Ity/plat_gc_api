api = "https://example.com/api/v1/Product/[:id]";
methods = "GET";
formData = null;
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    "authorization": "auth"+" "+accessToken
}

// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "object": {
        	
        },
    }
}