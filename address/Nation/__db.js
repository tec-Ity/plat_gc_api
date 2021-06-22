code: {			// 国家简称 CN  IT
	type: String,
	required: true,
	unique: true,
},
nome: String,
tel: String, 		// 0039 0086

langs: [{								// 暂时不用
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	desp: String,
}],

img_url: {type: String, default: './media/defalut/Nation.jpg' },

is_usable: { type: Boolean, default: true },
sort: Number,
