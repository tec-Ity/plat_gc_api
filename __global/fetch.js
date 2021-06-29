const api_DNS = "https://example.com"
const api_Version_back = "/api/b1"
const api_Version_front = "/api/v1"
const api_Router = "/"+router;

const api_params = "/:"+params1+'/:'+params2+... 
const api_query = '?'+'&key1='+val1+'&key2='+val2+'&key3='+val3+...

const api = api_DNS + api_Version[_back, _front] + api_Router + [api_params] + [api_query]

const fetchObj = {
	method,	// "GET", "POST", "DELETE", "PUT"
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		"authorization": "auth"+" "+accessToken
	}
}

fetch(api, fetchObj)