// 获取 用戶角色配置项
api = "https://example.com/api/v1/ConfOrder";
api = "https://example.com/api/b1/ConfOrder";
methods = "GET";
formData = null;

// 返回值
// status(200);
res = {
	status: 200,
	message: "",
	data: {
	    "role_User": {
	        "owner": {
	            "num": 1,
	            "val": "拥有者"
	        },
	        "manager": {
	            "num": 3,
	            "val": "管理者"
	        },
	        "staff": {
	            "num": 5,
	            "val": "超级员工"
	        },
	        "boss": {
	            "num": 101,
	            "val": "店铺老板"
	        },
	        "worker": {
	            "num": 105,
	            "val": "店铺员工"
	        }
	    }
	}
}