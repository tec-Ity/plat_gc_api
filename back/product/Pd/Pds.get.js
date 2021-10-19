api = "https://example.com/api/b1/Pds";
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
		default: ["is_usable", "sort", "code"],
		description: "以什么来排序",
	},
	sortVal: {
		required: false,
		type: Number, // {enum: {"asc": 1, "desc": -1}},
		default: "-1",
		description: "排序方式"
	},

	Brand: {required: false, type: ObjectId, description: "根据品牌筛选产品"},
	Nation: {required: false, type: ObjectId, description: "根据国家筛选产品"},
	Categs: {required: false, type: Array[ObjectId], description: "根据产品二级分类筛选产品"},

	search: {required: false, type: String, description: "根据字符串匹配[code, nome]相匹配的产品"},
	excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的产品", },
	includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的产品", },

	is_usable: {required: false, type: Boolean, description: "是否可用"},

	User_crt: {required: false, type: ObjectID, default: [], description: "查找此人创建的产品", },
	User_upd: {required: false, type: ObjectID, default: [], description: "查找此人更新的产品", },

	crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的产品"},
	upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的产品"},
	crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的产品"},
	upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的产品"}

    sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的产品"},
    sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的产品"},
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