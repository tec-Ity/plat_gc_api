api = "https://example.com/api/b1/Firm/[:id]";
methods = "GET";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}
formData = null;

// 返回值
// status(200);