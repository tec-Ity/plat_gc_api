Pd: {type: ObjectId, ref: 'Pd'},		// 只读
Prod: {type: ObjectId, ref: 'Prod'},	// 只读

attrs: [{								// 只读
	nome: String,
	option: String
}],

price_regular: Float,
price_sale: Float,
is_discount: Boolean, // 只读  if true 控制 Prod

// at_fromSale: Date,
// at_toSale: Date,

purchase_note: String,
limit_quantity: {type: Number, default: 0},
Records: [{type: ObjectId, ref: 'Record'}],
Batchs: [{type: ObjectId, ref: 'Batch'}],

is_controlStock: {type: Boolean, default: false},

quantity: Number,
quantity_alert: Number,
is_alert: Boolean, // 只读   if true 控制 Prod

allow_backorder: {type: Boolean, default: true},

is_usable: Boolean,
is_sell: Boolean, 							// 只读	if false 控制 Prod

User_crt: {type: ObjectId, ref: 'User'},	// 只读
User_upd: {type: ObjectId, ref: 'User'},	// 只读
at_crt: Date,								// 只读
at_upd: Date,								// 只读

Firm: {type: ObjectId, ref: 'Firm'},		// 只读
Shop: {type: ObjectId, ref: 'Shop'},		// 只读