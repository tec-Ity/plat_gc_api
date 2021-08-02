/* 暂时可不用 */


api = "https://example.com/api/v1/OrderProdDelete/[:id]";
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