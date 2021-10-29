// 用户创建接口 API

api = "https://example.com/api/b1/login";
method = "POST";
formData = {
	"system": {
        code: {required: false, type: String, description: "用户账号"},
        pwd: {required: true, type: String, description: "用户密码"}
    },
}
headers = null;



// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 登录成功",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6akpXVCJ9.eyJfaWQiOiI2MGJkZGRmOTQ3N2U3NTIwMTlkZmU2MWIiLCJGaXJtIjoiNjBiY2RkYzhkYmJlZGIyNjY5OTAzMzg0Iiwicm9sZSI6MSwiY29kZSI6IlRFU1QiLCJub21lIjoi5rWL6K-VIiwicGhvbmVQcmUiOiIwMDM5IiwicGhvbmUiOiIzODg4Njc2Nzk2IiwiaWF0IjoxNjI5MTkzMTU2LCJleHAiOjE2MjkyNzk1NTZ9.j_9Qwr8BwI_35WC5en-fwa19tSR6sNaH8kB_hMxX34s",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6akpXVCJ9.eyJfaWQiOiI2MGJkZGRmOTQ3N2U3NTIwMTlkZmU2MWIiLCJGaXJtIjoiNjBiY2RkYzhkYmJlZGIyNjY5OTAzMzg0Iiwicm9sZSI6MSwiY29kZSI6IlRFU1QiLCJub21lIjoi5rWL6K-VIiwicGhvbmVQcmUiOiIwMDM5IiwicGhvbmUiOiIzODg4Njc2Nzk2IiwiaWF0IjoxNjI5MTkzMTU2LCJleHAiOjE2MzE3ODUxNTZ9.rNSDafFdIb3PFThgu_roLkoEpK-l4p_cRXWK1vKLF5s",
        "curUser": {
            "_id": "60bdddf9477e752019dfe61b",
            "phonePre": "0039",
            "phone": "3888676796",
            "code": "TEST",
            "pwd": "$2a$10$eCekVz5vZ0Oysfvi5q9rQO2aQYwOI1T.qDcebeAvG74ssUgXiiigK",
            "Firm": "60bcddc8dbbedb2669903384",
            "nome": "测试",
            "role": 1,
            "at_last_login": "2021-08-17T09:39:16.729Z",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJkZGRmOTQ3N2U3NTIwMTlkZmU2MWIiLCJGaXJtIjoiNjBiY2RkYzhkYmJlZGIyNjY5OTAzMzg0Iiwicm9sZSI6MSwiY29kZSI6IlRFU1QiLCJub21lIjoi5rWL6K-VIiwicGhvbmVQcmUiOiIwMDM5IiwicGhvbmUiOiIzODg4Njc2Nzk2IiwiaWF0IjoxNjI5MTkzMTU2LCJleHAiOjE2MzE3ODUxNTZ9.rNSDafFdIb3PFThgu_roLkoEpK-l4p_cRXWK1vKLF5s",
            "at_upd": "2021-08-17T09:39:16.729Z"
        }
    }
}