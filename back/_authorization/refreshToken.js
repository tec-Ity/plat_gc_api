// 刷新token

api = "https://example.com/api/b1/refreshToken";
methods = "GET";
formData = null;
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+refreshToken		// 注意要传递 refreshToken
}

// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 刷新token成功",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6akpXVCJ9.eyJfaWQiOiI2MGJkZGRmOTQ3N2U3NTIwMTlkZmU2MWIiLCJGaXJtIjoiNjBiY2RkYzhkYmJlZGIyNjY5OTAzMzg0Iiwicm9sZSI6MSwiY29kZSI6IlRFU1QiLCJub21lIjoi5rWL6K-VIiwicGhvbmVQcmUiOiIwMDM5IiwicGhvbmUiOiIzODg4Njc2Nzk2IiwiaWF0IjoxNjI5MTkzODY2LCJleHAiOjE2MjkxOTM5MjZ9.J0fjxmwUjLieYXSYL87N3Olkw_QvopR6AzP_ykAm7LA",
        "curUser": {
            "_id": "60bdddf9477e752019dfe61b",
            "Firm": "60bcddc8dbbedb2669903384",
            "role": 1,
            "code": "TEST",
            "nome": "测试",
            "phonePre": "0039",
            "phone": "3888676796",
            "iat": 1629193706,
            "exp": 1631785706
        }
    }
}