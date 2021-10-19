api = "https://example.com/api/v1/Shops";
query = "?"+["&[key in args]=[args[key]]"];
/* 
    "EX_url": [
        api+"?search=N",
        api+"?search=N&page=2&sortKey=code&sortVal=1",
    ],
*/
methods = "GET";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
};
formData = null;

args = {
	pagesize: {required: false, type: Number, default: 50, description: "设置每页显示几条数据"},
	page: {required: false, type: Number, default: 1, description: "当前获取的数据为第几页"},

	sortKey: {
		required: false,
		type: String, // {enum: ["sort", "code", "nome", "is_usable"]},
		default: ["sort", "code"],
		description: "以什么来排序",
	},
	sortVal: {
		required: false,
		type: Number, // {enum: {"asc": 1, "desc": -1}},
		default: "-1",
		description: "排序方式"
	},

    serve_Citas: {required: false, type: Array[ObjectID], default: [], description: "根据所给城市, 查找出全部服务于此城市的店铺"},
    Citas: {required: false, type: Array[ObjectID], default: [], description: "根据所给城市, 查找出全部属于此城市的店铺"},
	is_boutique: {required: false, type: Boolean, description: "是否为精品店"},


	search: {required: false, type: String, description: "根据字符串匹配[code, nome]相匹配的店铺"},
	excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的店铺", },
	includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的店铺", },

    User_crt: {required: false, type: ObjectID, default: [], description: "查找此人创建的店铺", },
    User_upd: {required: false, type: ObjectID, default: [], description: "查找此人更新的店铺", },

	crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的店铺"},
	upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的店铺"},
	crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的店铺"},
	upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的店铺"}

    sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的店铺"},
    sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的店铺"},
}

// 返回值
// status(200);
result = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "count": 2,
        "page": 1,
        "pagesize": 50,
        "object": null,
        "objects": [
            {
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
            {
                "_id": "60c744cb156e703767a8c23b",
                "img_url": "./media/defalut/Shop.jpg",
                "is_usable": true,
                "is_boutique": false,
                "code": "234",
                "nome": "234",
                "addr": "234",
                "Cita": {
                    "_id": "60c4ae2c74daf75532866e70",
                    "code": "PO",
                    "nome": "PRATO",
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
                        "_id": "60c744cb156e703767a8c23c",
                        "Cita": {
                            "_id": "60c4ae2c74daf75532866e70",
                            "code": "PO",
                            "nome": "PRATO"
                        },
                        "price_ship": 0
                    }
                ],
                "at_crt": "2021-06-14T12:00:11.766Z",
                "at_upd": "2021-06-14T12:00:11.766Z",
                "__v": 0
            },
            ...
        ]
    },
    parameter: {
        "findObj": {
            "is_usable": 1
        },
        "sortObj": {
            "is_usable": -1,
            "sort": -1,
            "code": -1
        }
    }
}