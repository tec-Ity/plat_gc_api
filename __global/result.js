res.result = {
	status: Number, // enum: [200, 400, 500]
	message: String,
	data: {
		object: {type: ObjectId},
		objects: [{type: ObjectId}],
		count: Number,
		page: Number,
		pagesize: Number
	}
}