code: {			// 大区简称 LOM TOS LAZ
	type: String,
	required: true,
	unique: true,
},
nome: String,
img_url: String,
langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	desp: String,
}],

Nation: {type: ObjectId, ref: "Nation"}, // 所属国家

is_usable: { type: Boolean, default: true },
sort: {type: Number, default: 0}