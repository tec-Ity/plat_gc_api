Client: {type: ObjectId, ref: "Client"},
Firm: {type: ObjectId, ref: "Firm"},
Shops: [{type: ObjectId, ref: "Shop"}],

// Firm 控制
is_usable: { type: Boolean, default: true },		// 如果禁用相当于把此用户加入黑名单
vip: Number, 										// 用户 VIP
sort_Client: Number,

// Client 控制
sort_Firm: Number,

at_upd: Date,										// 只读
at_crt: Date,										// 只读