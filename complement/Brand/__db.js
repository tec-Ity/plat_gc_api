
// 品牌唯一编号 可以根名称相同
code: String,
nome: String,
img_url: {type: String, required: true, default: './media/defalut/Brand.jpg' },

langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	desp: String,
}],

Nation: {type: ObjectId, ref: "Nation"},

is_usable: { type: Boolean, default: true },

sort: Number,
Firm: {type: ObjectId, ref: 'Firm'},
User_crt: {type: ObjectId, ref: 'User'},
User_upd: {type: ObjectId, ref: 'User'},
at_crt: Date,
at_upd: Date,
