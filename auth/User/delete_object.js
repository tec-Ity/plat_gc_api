// 只能删除比当前用户权限小的, 且只有管理者有删除权限

api = "https://example.com/api/v1/ShopDelete/[:id]";
methods = "DELETE",
formData = null;
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    "authorization": "auth"+" "+accessToken
}


// 返回值
// status(205);
res = {
	status: 200,
	message: "删除成功",
}