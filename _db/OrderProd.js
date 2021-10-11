Order: {type: ObjectId, ref: "Order"},				// 只读

// 基本信息
Prod: {type: ObjectId, ref: "Prod"},				// 只读
nome: String,										// 只读
unit: String,										// 只读

OrderSkus: [{type: ObjectId, ref: "OrderSku"}],		// 只读

// 由 Sku决定的信息
prod_quantity: {type:Number, default: 0},			// 只读 采购本条目总数
prod_sale: {type:Float, default: 0},				// 只读 本条目总价
prod_regular: {type:Float, default: 0},				// 只读 总原价

// 额外信息
Pd: {type: ObjectId, ref: "Pd"},					// 只读 所属产品
Client: {type: ObjectId, ref: 'Client'},			// 只读
Shop: {type: ObjectId, ref: 'Shop'},				// 只读
Firm: {type: ObjectId, ref: 'Firm'},				// 只读
at_crt: Date,										// 只读
at_upd: Date,										// 只读