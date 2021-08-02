Order: {type: ObjectId, ref: "Order"},				// 只读
OrderProd: {type: ObjectId, ref: "OrderProd"},		// 只读

// 基本信息
Sku: {type: ObjectId, ref: "Sku"},					// 只读
price: Float,										// 只读[2] 加入购物车时的交易价格 checkout时的交易价格
attrs: String,										// 只读

quantity: Number, 									// 采购本条目总数
tot: Float,											// 只读 本条目总价

price_regular: Float,								// 只读[2] 加入购物车时的原价 checkout时的原价
tot_regular: Float,									// 只读 总原价
tot_discout: Float,									// 只读 本条目降价额度 = tot_regular - tot_Orditem

// 标识信息
Pd: {type: ObjectId, ref: "Pd"},					// 只读
Prod: {type: ObjectId, ref: "Prod"},				// 只读
Client: {type: ObjectId, ref: 'Client'},			// 只读
Shop: {type: ObjectId, ref: 'Shop'},				// 只读
Firm: {type: ObjectId, ref: 'Firm'},				// 只读
at_crt: Date,										// 只读
at_upd: Date,										// 只读