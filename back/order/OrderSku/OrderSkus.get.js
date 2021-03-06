api = "https://example.com/api/b1/OrderSkus";
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
		type: String, // {enum: ["sort", "code", "nome"]},
		default: ["sort", "code"],
		description: "以什么来排序",
	},
	sortVal: {
		required: false,
		type: Number, // {enum: {"asc": 1, "desc": -1}},
		default: "-1",
		description: "排序方式"
	},

	search: {required: false, type: String, description: "根据字符串匹配[code, nome]相匹配的订单"},
	Shops: {required: false, type: Array[ObjectId], description: "根据店铺筛选订单"},
	Clients: {required: false, type: Array[ObjectId], description: "根据客户筛选订单"},
	Users: {required: false, type: Array[ObjectId], description: "根据公司成员筛选订单"},
	excludes: {required: false, type: Array[ObjectID], default: null, description: "查找出去此数组中所有IDs之外的订单", },
	includes: {required: false, type: Array[ObjectID], default: null, description: "查找包含所有此数组中所有IDs的订单", },
	Clients: {required: false, type: Array[ObjectID], default: null, description: "查找包含所有 Client id 的订单", },

	populateObjs: {required: false, type: Array[{}], description: "关联数据库"}
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
            
        ]
    }
}