level: Number, // enum: [1, 2];	不可更改
Categ_far: {type: ObjectId, ref: 'Categ'},
Categ_sons: [{type: ObjectId, ref: 'Categ'}],

code: String,

img_url: {type: String, required: true, default: './media/defalut/Categ.jpg' },

langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	desp: String,
}],

is_usable: { type: Boolean, default: true },
sort: Number,
Firm: {type: ObjectId, ref: 'Firm'},
User_crt: {type: ObjectId, ref: 'User'},
User_upd: {type: ObjectId, ref: 'User'},
at_crt: Date,
at_upd: Date,
