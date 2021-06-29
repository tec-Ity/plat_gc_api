// 公司管理层 可创建 删除。 分部只能管理本分部
// 员工自己可见自己 可修改自己部分信息 暂时没有可自己修改的部分
// 自己修改自己密码需要原密码, 上级修改下级不需要原密码

phonePre: String, 
phone: String, 
code: String,									// 用户账户
pwd: String, 									// md5 加密

role: Number, 									// 用户角色 // Conf.role 

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