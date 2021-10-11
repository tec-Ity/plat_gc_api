level: Number, 									// 只读	enum: [1, 2];
Categ_far: {type: ObjectId, ref: 'Categ'},
Categ_sons: [{type: ObjectId, ref: 'Categ'}],	// 只读

code: String,

img_url: String,

langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},
	desp: String,
}],

is_usable: { type: Boolean, default: true },
sort: Number,

User_upd: {type: ObjectId, ref: 'User'},		// 自动
User_crt: {type: ObjectId, ref: 'User'},		// 只读
at_upd: Date,									// 自动
at_crt: Date,									// 只读
Firm: {type: ObjectId, ref: 'Firm'},			// 只读