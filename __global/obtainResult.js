fetch(api, { headers, methods: "GET"}
fetch(api, { headers, methods: "POST", body: JSON.stringify(formData) }
fetch(api, { headers, methods: "PUT", body: JSON.stringify(formData) }
fetch(api, { headers, methods: "DELETE"}


ajax({ headers, type: 'GET', url: api})
ajax({ headers, type: 'POST', url: api,	data: formdata })
ajax({ headers, type: 'PUT', url: api,	data: formdata })
ajax({ headers, type: 'DELETE', url: api})

axios.get(api, { headers })
axios.post(api, formData, { headers })
axios.put(api, formData, { headers })
axios.delete(api, { headers })