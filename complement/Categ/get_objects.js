// 默认返回一级分类, 如需返回二级分类，请输入 Categ_far 参数

api = "https://example.com/api/v1/Categs";
api = "https://example.com/api/v1/Categs?"+"&[key in args]=[args[key]]";
/* 
	"example": [
		"https://example.com/api/v1/Categs?search=N",
		"https://example.com/api/v1/Categs?search=N&page=2&sortKey=code&sortVal=1",
	],
*/
fetchObj = {
    methods: "GET",
    headers: {
        "content-type": "application/json",
        "authorization": "Bear"+" "+accessToken
    }
}

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
