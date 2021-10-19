api = "https://example.com/api/b1/Citas";
api = "https://example.com/api/v1/Citas";
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
	pagesize: {required: false, type: Number, default: 10, description: "设置每页显示几条数据"},
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

	Area: {required: false, type: ObjectId, description: "根据所选大区, 筛选出所有城市"},

	search: {required: false, type: String, description: "根据字符串匹配[code, nome]相匹配的城市"},
	excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的城市", },
	includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的城市", },

	is_usable: {required: false, type: Boolean, description: "是否可用"},

	crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的城市"},
	upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的城市"},
	crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的城市"},
	upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的城市"},

	sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的城市"},
	sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的城市"},
}

// 返回值
// status(200);
result = {
    "status": 200,
    "message": "[server] 返回城市数据成功",
    "data": {
        "count": 5,
        "page": 1,
        "pagesize": 50,
        "object": null,
        "objects": [
            {
                "is_usable": true,
                "sort": 151,
                "_id": "60c4ae2c74daf75532866e70",
                "code": "PO",
                "nome": "PRATO",
                "Area": "60c4a979fc343a4d901a3565",
                "langs": [],
                "__v": 0
            },
            {
                "is_usable": true,
                "sort": 150,
                "_id": "60c4ae1f74daf75532866e6f",
                "code": "FI",
                "nome": "FIRENZE",
                "Area": "60c4a979fc343a4d901a3565",
                "langs": [],
                "__v": 0
            },
            {
                "is_usable": true,
                "sort": 120,
                "_id": "60c4ae6674daf75532866e72",
                "code": "RM",
                "nome": "ROMA",
                "Area": "60c4a9adfc343a4d901a3566",
                "langs": [],
                "__v": 0
            },
            {
                "is_usable": true,
                "sort": 100,
                "_id": "60c4adb974daf75532866e6d",
                "code": "MI",
                "nome": "MILANO",
                "Area": "60c4a95afc343a4d901a3564",
                "langs": [],
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