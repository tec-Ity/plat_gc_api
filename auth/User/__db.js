phonePre: String, 
phone: String, 
code: String,	// system 注册用户的账户
pwd: String, // md5 加密
refreshToken: String,	// 只读

role: Number, // 用户角色 // Conf.role 

nome: String,

Lang: {type: ObjectId, ref:"Lang"},

is_usable: { type: Boolean, default: true },

sort: Number,

Firm: {type: ObjectId, ref: 'Firm'},	// 只读
Shop: {type: ObjectId, ref: 'Shop'},
User_crt: {type: ObjectId, ref: 'User'},
User_upd: {type: ObjectId, ref: 'User'},

at_last_login: Date,
at_crt: Date,
at_upd: Date,