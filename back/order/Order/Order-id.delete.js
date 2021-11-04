// 只有总公司管理员以上级别可以创建

/* 注意: 必须要加上参数和本人的账号才可以删除 */
api = "https://example.com/api/b1/Order/[:id]?force="+curUser.code;
methods = "DELETE";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
};
formData = null;

// 返回值
// status(205);
res = {
	status: 200,
	message: "删除成功",
}