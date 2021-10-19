// 管理者可以调取权限较低的用户列表, 如果是分店管理者: 只可以调取本店的用户列表

api = "https://example.com/api/b1/Users";
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
		type: String, // {enum: ["sort", "code", "nome", "phone", "is_usable"]},
		default: ["is_usable", "sort", "code"],
		description: "以什么来排序",
	},
	sortVal: {
		required: false,
		type: Number, // {enum: {"asc": 1, "desc": -1}},
		default: "-1",
		description: "排序方式"
	},

	search: {required: false, type: String, description: "根据字符串匹配[code, nome, phone]相匹配的员工"},
	excludes: {required: false, type: Array[ObjectID], default: [], description: "查找出去此数组中所有IDs之外的员工", },
	includes: {required: false, type: Array[ObjectID], default: [], description: "查找包含所有此数组中所有IDs的员工", },

	is_usable: {required: false, type: Boolean, description: "是否可用"},

    User_crt: {required: false, type: ObjectID, default: [], description: "查找此人创建的员工", },
    User_upd: {required: false, type: ObjectID, default: [], description: "查找此人更新的员工", },

	crt_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后创建的员工"},
	upd_after: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之后更新的员工"},
	crt_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前创建的员工"},
	upd_before: {required: false, type: date, description: "给出一个时间格式[MM/DD/YYYY], 搜索此时间戳之前更新的员工"}
}

// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "count": 3,
        "page": 1,
        "pagesize": 50,
        "object": null,
        "objects": [
            {
                "is_usable": true,
                "_id": "60bdddf9477e752019dfe61b",
                "is_blacklist": 1,
                "phonePre": "0039",
                "phone": "3888676796",
                "code": "TEST",
                "Firm": {
                    "_id": "60bcddc8dbbedb2669903384",
                    "code": "VANILLA",
                    "nome": "GREEN CITY"
                },
                "nome": "测试",
                "role": 1,
                "at_upd": "2021-06-14T14:02:19.911Z",
                "__v": 0,
                "at_last_login": "2021-06-14T14:00:38.901Z",
                "is_shelf": true
            },
            {
                "is_usable": true,
                "_id": "60c75f41f1f7c355b735019a",
                "code": "54321",
                "nome": "twetsdf",
                "phonePre": "0039",
                "phone": "1111111111",
                "role": 3,
                "Shop": null,
                "Firm": {
                    "_id": "60bcddc8dbbedb2669903384",
                    "code": "VANILLA",
                    "nome": "GREEN CITY"
                },
                "User_crt": "60bdddf9477e752019dfe61b",
                "sort": 0,
                "at_last_login": "2021-06-14T13:54:06.956Z",
                "at_crt": "2021-06-14T13:53:05.744Z",
                "at_upd": "2021-06-14T13:54:57.900Z",
                "__v": 0
            },
            {
                "is_usable": true,
                "_id": "60c75c48c8f65e5221f7fb95",
                "code": "123444",
                "nome": "aaa",
                "phonePre": "0039",
                "phone": "1111111111",
                "role": 5,
                "Shop": null,
                "Firm": {
                    "_id": "60bcddc8dbbedb2669903384",
                    "code": "VANILLA",
                    "nome": "GREEN CITY"
                },
                "User_crt": "60bdddf9477e752019dfe61b",
                "sort": 0,
                "at_last_login": "2021-06-14T13:40:24.392Z",
                "at_crt": "2021-06-14T13:40:24.392Z",
                "at_upd": "2021-06-14T13:40:24.392Z",
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