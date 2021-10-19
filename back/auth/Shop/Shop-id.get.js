api = "https://example.com/api/b1/Shop/[:id]";
methods = "GET";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}
formData = null;

// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "object": {
        	"_id": "60c7461ae178143884068d74",
        	"img_url": "./media/defalut/Shop.jpg",
        	"is_usable": true,
        	"is_boutique": false,
        	"code": "GC002",
        	"nome": "GC002",
        	"addr": "via gc002",
        	"Cita": {
        	    "_id": "60c4ae1f74daf75532866e6f",
        	    "code": "FI",
        	    "nome": "FIRENZE",
        	    "Area": {
        	        "_id": "60c4a979fc343a4d901a3565",
        	        "code": "TOS",
        	        "nome": "TOSCANA",
        	        "Nation": {
        	            "_id": "60c48b392cfcd22c4d7bbb60",
        	            "code": "IT",
        	            "nome": "ITALY"
        	        }
        	    }
        	},
        	"Firm": "60bcddc8dbbedb2669903384",
        	"price_ship": 0,
        	"serve_Citas": [
        	    {
        	        "_id": "60c7461ae178143884068d75",
        	        "Cita": {
        	            "_id": "60c4ae1f74daf75532866e6f",
        	            "code": "FI",
        	            "nome": "FIRENZE"
        	        },
        	        "price_ship": 0
        	    }
        	],
        	"at_crt": "2021-06-14T12:05:46.879Z",
        	"at_upd": "2021-06-14T12:05:46.879Z",
        	"__v": 0
        },
    }
}