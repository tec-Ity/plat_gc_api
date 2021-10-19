,api = "https://example.com/api/b1/Attrs";
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
    'Content-Type': 'application/json'
    "authorization": "auth"+" "+accessToken
};
formData = null;

args = {
	Prod: {required: true, type: ObjectId, description: "找出相应商品下的所有商品属性"},


	pagesize: {required: false, type: Number, default: 50, description: "设置每页显示几条数据"},
	page: {required: false, type: Number, default: 1, description: "当前获取的数据为第几页"},

	sortKey: {
		required: false,
		type: String, // {enum: ["sort", "code", "nome", "is_usable"]},
		default: ["is_usable", "sort", "code"],
		description: "以什么来排序",
	},
	sortVal: {
		required: false,
		type: Number, // {enum: {"asc": 1, "desc": -1}},
		default: "-1",
		description: "排序方式"
	},

	excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的商品", },
	includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的商品", },

    sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的商品"},
    sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的商品"},
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