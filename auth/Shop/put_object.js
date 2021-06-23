api = "https://example.com/api/v1/ShopPut/:id";

fetchObj = {
	methods: "PUT",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
	body: JSON.stringify({"obj": dataObj});	
}
dataObj = {
	code: {required: false, type: String, description: "店铺编号, 公司唯一"},	// 只有总公司管理员以上级别可以修改
	nome: {required: false, type: String, description: "店铺名称, 公司唯一"},	// 只有总公司管理员以上级别可以修改
	Cita: {required: false, type: ObjectId, description: "店铺所属城市"},		// 只有总公司管理员以上级别可以修改, 且serve_Citas中要包含新城市
	is_usable: {required: false, type: Boolean, description: "店铺是否可用"},	// 只有总公司管理员以上级别可以修改
	is_boutique: {required: false, type: Boolean, description: "是否为精品店"},	// 只有总公司管理员以上级别可以修改
	sort: {required: false, type: Number, description: "店铺的排序"},			// 只有总公司管理员以上级别可以修改

	addr: {required: false, type: String, description: "店铺地址"},
	zip: {required: false, type: String, description: "店铺邮编"},
	img_url: {required: false, type: String, description: "店铺logo"},
	price_ship: {required: false, type: Float, description: "店铺的本地运费"}
	// disable
	serve_Citas: "查看 shop_serveCitas 接口"
}

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