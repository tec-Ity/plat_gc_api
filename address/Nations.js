api = "https://example.com/api/b1/Nations";
api = "https://example.com/api/v1/Nations";
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
	pagesize: {required: false, type: Number, default: 50, description: "设置每页显示几条数据"},
	page: {required: false, type: Number, default: 1, description: "当前获取的数据为第几页"},

	sortKey: {
		required: false,
		type: String, // {enum: ["sort", "code", "nome", "tel", "is_usable"]},
		default: ["is_usable", "sort", "code"],
		description: "以什么来排序",
	},
	sortVal: {
		required: false,
		type: Number, // {enum: {"asc": 1, "desc": -1}},
		default: "-1",
		description: "排序方式"
	},

    Nation: {required: false, type: ObjectId, description: "根据所选国家, 筛选出所有大区"},

	search: {required: false, type: String, description: "根据字符串匹配[code, nome, tel]相匹配的国家"},
	excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的国家", },
	includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的国家", },

	is_usable: {required: false, type: Boolean, description: "是否可用"},

	crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的国家"},
	upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的国家"},
	crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的国家"},
	upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的国家"}

    sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的国家"},
    sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的国家"},
}

// 返回值
// status(200);
result = {
    "status": 200,
    "message": "[server] 返回国家数据成功",
    "data": {
        "count": 30,
        "page": 1,
        "pagesize": 50,
        "object": null,							// 如果search的值完全符合code 则返回 相应的数据
        "objects": [
            {
                "is_usable": true,
                "_id": "60c48b392cfcd22c4d7bbb60",
                "url_img": "./media/defalut/Nation.jpg",
                "code": "IT",
                "nome": "ITALY",
                "tel": "0039",
                "sort": 1000,
                "langs": [],
                "__v": 0
            },
            {
                "is_usable": true,
                "_id": "60c48b4e2cfcd22c4d7bbb61",
                "url_img": "./media/defalut/Nation.jpg",
                "code": "CN",
                "nome": "CHINA",
                "tel": "0086",
                "sort": 999,
                "langs": [],
                "__v": 0
            },
            {
                "is_usable": true,
                "_id": "60c48b642cfcd22c4d7bbb62",
                "url_img": "./media/defalut/Nation.jpg",
                "code": "JP",
                "nome": "JAPAN",
                "tel": "0089",
                "sort": 900,
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