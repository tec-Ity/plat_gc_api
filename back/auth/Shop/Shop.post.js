// 只有总公司管理员以上级别可以创建
api = "https://example.com/api/b1/Shop";
method = "POST";
headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	"authorization": "auth"+" "+accessToken
}


obj = {
	code: {required: true, type: String, description: "店铺编号, 公司唯一"},
	nome: {required: true, type: String, description: "店铺名称, 公司唯一"},
	Cita: {required: true, type: ObjectId, description: "店铺所属城市"},

	is_boutique: {required: false, type: Boolean, default: false, description: "是否为精品店"},
	is_usable: {required: false, type: Boolean, default: true, description: "店铺是否可用"},
	addr: {required: false, type: String, description: "店铺地址"},
	zip: {required: false, type: String, description: "店铺邮编"},
	img_url: {required: false, type: String, description: "店铺logo"}
}


// 如果不添加本地图片 建议用这个
formData = { obj };

// 如果添加本地图片 只能用这个
// 建议不要使用 fetch 因为其对文件传输不太友好
formData = new formData();
formData.append("obj", JSON.stringify(obj));
[formData.append("file_"+i, image_File)];	// formData.append(["file0"], 'file路径0');




// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 创建成功",
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