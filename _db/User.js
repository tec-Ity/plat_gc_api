phonePre: String, 
phone: String, 
code: String,									// 用户账户
pwd: String, 									// md5 加密

role: Number, 									// 用户角色 // ConfUser 

nome: String,

Lang: {type: ObjectId, ref:"Lang"},

is_usable: { type: Boolean, default: true },

sort: Number,

Shop: {type: ObjectId, ref: 'Shop'},

User_upd: {type: ObjectId, ref: 'User'},		// 自动
User_crt: {type: ObjectId, ref: 'User'},		// 只读

at_upd: Date,
at_crt: Date,									// 只读
at_last_login: Date,							// 只读
Firm: {type: ObjectId, ref: 'Firm'},			// 只读
refreshToken: String,							// 只读