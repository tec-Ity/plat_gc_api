// 商品 spu

/* 同步时给出的信息 不可修改 */
Shop: {type: ObjectId, ref: 'Shop'},
Pd: {type: ObjectId, ref: 'Pd'},			// 所属产品

/* 强制 完全相同  只读*/
code: String, 			// 条形号码
nome: String,				// 产品名称
img_urls: [String], // imgs
Brand: {type: ObjectId, ref: 'Brand'},
Nation: {type: ObjectId, ref: 'Nation'},
is_usable_Firm: Boolean,		// 只读 与 Pd 的 is_usable 保持一致

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

is_usable: { type: Boolean, default: false },

is_simple: Boolean,			// 只读 根据 Products 决定
ProdAttrs: [{type: ObjectId, ref: "ProdAttr"}],
Products: [{type: ObjectId, ref: 'Product'}],

/* 只读  根据 Products 的price_sale 或 price_regular*/
price: Float,
price_min: Float,
price_max: Float,

/* 只读 客户给予 */
num_likes: {type: Number, default: 0},
likes: [{type: ObjectId, ref: "User"}],
num_unlikes: {type: Number, default: 0},
unlikes: [{type: ObjectId, ref: "User"}],

/* 自动生成 */
Firm: {type: ObjectId, ref: 'Firm'},
User_crt: {type: ObjectId, ref: 'User'},
User_upd: {type: ObjectId, ref: 'User'},
at_crt: Date,
at_upd: Date,