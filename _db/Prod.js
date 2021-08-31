/* 同步时给出的信息 不可修改 */
Shop: {type: ObjectId, ref: 'Shop'},		// 只读 不可修改 商品所属店铺 
Pd: {type: ObjectId, ref: 'Pd'},			// 只读 不可修改 商品所属产品

/* 强制 完全相同 只读*/
code: String, 								// 只读 [由 Pd 决定] 产品条形码
nome: String,								// 只读 [由 Pd 决定] 产品名称
img_urls: [String], 						// 只读 [由 Pd 决定] 产品图片
Brand: {type: ObjectId, ref: 'Brand'},		// 只读 [由 Pd 决定] 产品品牌
Nation: {type: ObjectId, ref: 'Nation'},	// 只读 [由 Pd 决定] 产品国家 比如 中国货 意大利货 日本货 韩国货
is_usable_Firm: Boolean,					// 只读 [由 Pd 决定] 公司层面是否可用
Categ: {type: ObjectId, ref: 'Categ'},		// 只读

/* 同步 可修改 */
desp: String,
unit: String,
langs: [{
Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
desp: String, 							// 描述
unit: String,							// 单位
}],
// Tags: [{type: ObjectId, ref: 'Tag'}],
sort: Number,

is_usable: { type: Boolean, default: false },	// 只有在 商品sku信息错误时 不可控

Attrs: [{type: ObjectId, ref: "Attr"}],			// 只读 [由 Attr 决定] 公司层面是否可用

/* 只读 根据 Skus 的price_sale 或 price_regular*/
Skus: [{type: ObjectId, ref: 'Sku'}],	// 只读 [由 Skus 决定] 公司层面是否可用
is_simple: Boolean,								// 只读 [由 this.Skus.length 决定] 如果 Skus.length > 1 is_simple=false;
price: Float,									// 只读 [由 Skus 决定] 产品价格
price_min: Float,								// 只读 [由 Skus 决定]
price_max: Float,								// 只读 [由 Skus 决定]
is_discount: Boolean, 							// 只读 [由 Skus 决定] 根据 product 中的 is_discount
is_sell: Boolean,								// 只读 [由 Skus 决定] 根据 Skus 决定
is_alert: Boolean,								// 只读 [由 Skus 决定] 根据 Skus 决定

/* 只读 客户给予 */
num_likes: {type: Number, default: 0},			// 只读
likes: [{type: ObjectId, ref: "User"}],			// 只读
num_unlikes: {type: Number, default: 0},		// 只读
unlikes: [{type: ObjectId, ref: "User"}],		// 只读

/* 自动生成 */
Firm: {type: ObjectId, ref: 'Firm'},			// 只读
User_crt: {type: ObjectId, ref: 'User'},		// 只读
User_upd: {type: ObjectId, ref: 'User'},		// 自动
at_crt: Date,									// 只读
at_upd: Date,									// 自动