code: String,								// 品牌编号
nome: String,								// 品牌名称
img_url: String,

langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	desp: String,
}],

Nation: {type: ObjectId, ref: "Nation"},

is_usable: { type: Boolean, default: true },

sort: Number,

User_upd: {type: ObjectId, ref: 'User'},	// 自动
User_crt: {type: ObjectId, ref: 'User'},	// 只读
at_upd: Date,								// 自动
at_crt: Date,								// 只读
Firm: {type: ObjectId, ref: 'Firm'},		// 只读