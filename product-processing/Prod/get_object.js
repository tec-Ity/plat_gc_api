api = "https://example.com/api/v1/Pd/[:id]";

fetchObj = {
	methods: "GET",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
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