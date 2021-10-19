api = "https://example.com/api/b1/Areas";
api = "https://example.com/api/v1/Areas";
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

    search: {required: false, type: String, description: "根据字符串匹配[code, nome]相匹配的大区"},
    excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的大区", },
    includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的大区", },

    is_usable: {required: false, type: Boolean, description: "是否可用"},

    crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的大区"},
    upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的大区"},
    crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的大区"},
    upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的大区"},

    sort_gte: {required: false, type: Number, description: "给出一个数字, 搜索此大于此数字排序的大区"},
    sort_lte: {required: false, type: Number, description: "给出一个数字, 搜索此小于此数字排序的大区"},
}

// 返回值
// status(200);
{
    "status": 200,
    "message": "[server] 返回大区数据成功",
    "data": {
        "count": 20,
        "page": 1,
        "pagesize": 50,
        "object": null,
        "objects": [
            {
                "is_usable": true,
                "sort": 10,
                "_id": "60c4a979fc343a4d901a3565",
                "code": "TOS",
                "nome": "TOSCANA",
                "Nation": "60c48b392cfcd22c4d7bbb60",
                "langs": [],
                "__v": 0
            },
            {
                "is_usable": true,
                "sort": 9,
                "_id": "60c4a9adfc343a4d901a3566",
                "code": "LAZ",
                "nome": "LAZIO",
                "Nation": "60c48b392cfcd22c4d7bbb60",
                "langs": [],
                "__v": 0
            },
            {
                "is_usable": true,
                "sort": 5,
                "_id": "60c4a95afc343a4d901a3564",
                "code": "LOM",
                "nome": "LOMBARDIA",
                "Nation": "60c48b392cfcd22c4d7bbb60",
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