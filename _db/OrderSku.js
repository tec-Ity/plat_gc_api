Order: {type: ObjectId, ref: "Order"},				// 只读
OrderProd: {type: ObjectId, ref: "OrderProd"},		// 只读

// 基本信息
Sku: {type: ObjectId, ref: "Sku"},					// 只读
attrs: String,										// 只读
price_regular: Float,								// 只读[2] 加入购物车时的原价 客户confirm时的原价

price: Float,										// 只读[2] 加入购物车时的交易价格 客户confirm时的交易价格
quantity: Number, 									// 采购本条目总数

is_picked: {type:Boolean, default: false},			// 是否配货完成 辅助配货员用的

// 标识信息
Pd: {type: ObjectId, ref: "Pd"},					// 只读
Prod: {type: ObjectId, ref: "Prod"},				// 只读
Client: {type: ObjectId, ref: 'Client'},			// 只读
Shop: {type: ObjectId, ref: 'Shop'},				// 只读
Firm: {type: ObjectId, ref: 'Firm'},				// 只读
at_crt: Date,										// 只读
at_upd: Date,										// 只读