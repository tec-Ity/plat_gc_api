// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/b1/PdDelete/[:id]";
methods = "DELETE",
formData = null;
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}


// 返回值
// status(205);
res = {
	status: 200,
	message: "删除成功",
}