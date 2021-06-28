// 公司产品库
// 总公司可以 添加 修改 删除
// 分部只可以同步到商品信息

/* 强制 完全相同 */
code: String, 								// 条形号码
nome: String,								// 产品名称
img_urls: [String], 						// imgs
Brand: {type: ObjectId, ref: 'Brand'},
Nation: {type: ObjectId, ref: 'Nation'},
is_usable_Firm: { type: Boolean, default: true },	// 是否可用 禁用后 分部也会被禁用

/* 同步 可修改 */
desp: String,
unit: String,
langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	desp: String, 							// 描述
	unit: String,							// 单位
}],
// Tags: [{type: ObjectId, ref: 'Tag'}],
Categs: [{type: ObjectId, ref: 'Categ'}],
sort: Number,
price_regular: Float,							// 默认价格 sku一般同步此价格
//  (is_usable_Firm == 0) && (is_usable = 0); 
is_usable: { type: Boolean, default: true },	// 只是不能被同步, 已经被同步的商品 不受此字段影响

/* 只读 */
Prods: [{type: ObjectId, ref: "Prod"}],
num_likes: {type: Number, default: 0},		// 只读 为之后分析公司产品预留
num_unlikes: {type: Number, default: 0},	// 只读 为之后分析公司产品预留

/* 自动生成 */
Firm: {type: ObjectId, ref: 'Firm'},		// 只读
User_crt: {type: ObjectId, ref: 'User'},	// 只读
User_upd: {type: ObjectId, ref: 'User'},	// 自动
at_crt: Date,								// 只读
at_upd: Date,								// 自动