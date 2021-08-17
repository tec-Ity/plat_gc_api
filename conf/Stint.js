// 获取 字段限制
api = "https://example.com/api/v1/Stint";
api = "https://example.com/api/b1/Stint";
methods = "GET";
formData = null;

// 返回值
// status(200);
res = {
	status: 200,
	message: "",
	data: {
	    "User": {
	        "phonePre": {
	            "regexp": "^[0-9]*$",
	            "trim": 4,
	            "errMsg": {
	                "nullMsg": "电话号码前缀不能为空",
	                "regexpMsg": "电话号码前缀只能由数字组成",
	                "trimMsg": "电话号码前缀长度只能为: "
	            }
	        },
	        "phone": {
	            "regexp": "^[0-9]*$",
	            "trim": 10,
	            "errMsg": {
	                "nullMsg": "电话号码不能为空",
	                "regexpMsg": "电话号码只能由数字组成",
	                "trimMsg": "电话号码的长度只能为: "
	            }
	        },
	        "code": {
	            "regexp": "^[a-zA-Z0-9]*$",
	            "min": 4,
	            "max": 20,
	            "errMsg": {
	                "nullMsg": "成员账号不能为空",
	                "regexpMsg": "成员账号只能由数字和字母组成",
	                "minMsg": "成员账号的位数不能小于: ",
	                "maxMsg": "成员账号的位数不能大于: "
	            }
	        },
	        "pwd": {
	            "min": 6,
	            "max": 12,
	            "errMsg": {
	                "nullMsg": "密码不能为空",
	                "minMsg": "密码的位数不能小于: ",
	                "maxMsg": "密码的位数不能大于: "
	            }
	        }
	    },
	    "Firm": {
	        "code": {
	            "regexp": "^[a-zA-Z]*$",
	            "min": 2,
	            "max": 8,
	            "errMsg": {
	                "nullMsg": "公司编号不能为空",
	                "regexpMsg": "公司编号只能由字母组成",
	                "minMsg": "公司编号的位数不能小于: ",
	                "maxMsg": "公司编号的位数不能大于: "
	            }
	        },
	        "nome": {
	            "min": 2,
	            "max": 15,
	            "errMsg": {
	                "nullMsg": "公司名称不能为空",
	                "minMsg": "公司名称的位数不能小于: ",
	                "maxMsg": "公司名称的位数不能大于: "
	            }
	        }
	    },
	    "Shop": {
	        "code": {
	            "regexp": "^[a-zA-Z0-9]*$",
	            "trim": 4,
	            "errMsg": {
	                "nullMsg": "商铺编号不能为空",
	                "regexpMsg": "商铺编号只能由字母或数字组成",
	                "trimMsg": "店铺编号的长度只能为: "
	            }
	        },
	        "nome": {
	            "min": 2,
	            "max": 15,
	            "errMsg": {
	                "nullMsg": "商铺名称不能为空",
	                "minMsg": "商铺名称的位数不能小于: ",
	                "maxMsg": "商铺名称的位数不能大于: "
	            }
	        }
	    }
	}
}