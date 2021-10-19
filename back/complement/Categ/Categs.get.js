// 默认返回一级分类, 如需返回二级分类，请输入 Categ_far 参数

api = "https://example.com/api/b1/Categs";
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
		type: String, // {enum: ["sort", "code", "is_usable"]},
		default: ["is_usable", "sort", "code"],
		description: "以什么来排序",
	},
	sortVal: {
		required: false,
		type: Number, // {enum: {"asc": 1, "desc": -1}},
		default: "-1",
		description: "排序方式"
	},

	search: {required: false, type: String, description: "根据字符串匹配[code]相匹配的分类"},
	excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的分类", },
	includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的分类", },

	Categ_far: {required: false, type: ObjectID, description: "查找父类下的所有子分类"},
	level: {required: false, type: Number, default: 1, description: "查找某个层级的分类"},

	is_usable: {required: false, type: Boolean, description: "是否可用"},

    User_crt: {required: false, type: ObjectID, default: [], description: "查找此人创建的分类", },
    User_upd: {required: false, type: ObjectID, default: [], description: "查找此人更新的分类", },

	crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的分类"},
	upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的分类"},
	crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的分类"},
	upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的分类"}

    sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的分类"},
    sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的分类"},
}

// 返回值
// status(200);
result = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "count": 5,
        "page": 1,
        "pagesize": 50,
        "object": null,
        "objects": [
            {
                "Categ_sons": [
                    "60d1b47be1dbb22605d73c40",
                    "60d1eb432b16a947babdbe5c"
                ],
                "is_usable": true,
                "_id": "60d0b048227d41599590d8cb",
                "img_url": "./media/default/Categ.jpg",
                "code": "SUGO",
                "level": 1,
                "Categ_far": null,
                "Firm": "60bcddc8dbbedb2669903384",
                "User_crt": "60cb07d6a394cd150c3391d3",
                "langs": [],
                "sort": 0,
                "at_crt": "2021-06-21T15:29:12.140Z",
                "at_upd": "2021-07-24T10:21:06.595Z",
                "__v": 4,
                "User_upd": "60cb07d6a394cd150c3391d3"
            },
            {
                "Categ_sons": [
                    "60fbda881ff8101c2286c48e"
                ],
                "is_usable": true,
                "_id": "60fbdbbd1ff8101c2286c490",
                "code": "零食",
                "level": 1,
                "Categ_far": null,
                "img_url": "/upload/Categ/60cb07d6a394cd150c3391d3-0-1627122043139.jpeg",
                "Firm": "60bcddc8dbbedb2669903384",
                "User_crt": "60cb07d6a394cd150c3391d3",
                "langs": [],
                "sort": 0,
                "at_crt": "2021-07-24T09:22:05.358Z",
                "at_upd": "2021-07-24T10:21:06.588Z",
                "__v": 1,
                "User_upd": "60cb07d6a394cd150c3391d3"
            },
            {
                "Categ_sons": [],
                "is_usable": true,
                "_id": "60fbdbac1ff8101c2286c48f",
                "code": "熟食",
                "level": 1,
                "Categ_far": null,
                "Firm": "60bcddc8dbbedb2669903384",
                "User_crt": "60cb07d6a394cd150c3391d3",
                "langs": [],
                "sort": 0,
                "at_crt": "2021-07-24T09:21:48.214Z",
                "at_upd": "2021-07-24T09:21:48.214Z",
                "__v": 0
            },
            ...
        ]
    },
    "parameter": {
        "pathObj": {
            "is_usable": 1,
            "level": 1
        },
        "sortObj": {
            "is_usable": -1,
            "sort": -1,
            "at_upd": -1,
            "code": 1,
            "nome": 1
        }
    }
}