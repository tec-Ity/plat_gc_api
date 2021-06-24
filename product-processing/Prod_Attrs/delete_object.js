// 如果 product 中有此属性 则不可删除

api = "https://example.com/api/v1/AttrDelete/[:id]";

fetchObj = {
	methods: "DELETE",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
}


// 返回值
// status(205);
res = {
	status: 200,
	message: "删除成功",
}