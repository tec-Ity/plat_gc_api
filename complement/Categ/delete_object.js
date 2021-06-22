// 如果此分类下有产品 则不可被删除

api = "https://example.com/api/v1/CategDelete/[:id]";

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