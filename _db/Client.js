social_type: String,								// 只读 enum: ["facebook", "google", "instgram"]
social_userId: String,								// 只读
email: String,										// 只读
is_active_email:  { type: Boolean, default: true },	// 只读

phonePre: String, 									// 只读
phone: String, 										// 只读
is_active_phone:  { type: Boolean, default: true },	// 只读

is_active:  { type: Boolean, default: true }, 		// 只读

is_usable: { type: Boolean, default: true },		// 只读
vip: Number, 										// 只读 用户 VIP 

nome: String,
Lang: {type: ObjectId, ref:"Lang"},

sort: Number,
at_upd: Date,										// 只读
at_crt: Date,										// 只读
at_last_login: Date,								// 只读