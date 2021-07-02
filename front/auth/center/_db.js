email: String,										// 只读
is_active_email:  { type: Boolean, default: true },	// 只读

phonePre: String, 									// 只读
phone: String, 										// 只读
is_active_phone:  { type: Boolean, default: true },	// 只读

is_active:  { type: Boolean, default: true }, 		// 只读

socials:[{											// 只读	因为 fb google 登陆的时同一账户, 所以我需要知道自己用什么账户登陆过
	social_type: String,							// enum: ["facebook", "google", "instgram"]
	social_id: String,
}],

nome: String,
Lang: {type: ObjectId, ref:"Lang"},

addrs: [{
	Nation: {type: ObjectId, ref: "Nation"},
	Area: {type: ObjectId, ref: "Area"},
	Cita: {type: ObjectId, ref: "Cita"},
	roat: String,
}],

at_upd: Date,										// 只读
at_crt: Date,										// 只读
at_last_login: Date,								// 只读