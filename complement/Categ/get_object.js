api = "https://example.com/api/v1/Categ/[:id]";

fetchObj = {
	methods: "GET",
	headers: {
		"content-type": "application/json",
		"authorization": "Bear"+" "+accessToken
	},
}
