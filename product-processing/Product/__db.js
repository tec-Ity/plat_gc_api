Pd: {type: ObjectId, ref: 'Pd'},
Prod: {type: ObjectId, ref: 'Prod'},

attrs: [{
	Attr: {type: ObjectId, ref: 'Attr'},
	code: String,
	option: String
}],

price_regular: Float,
price_sale: Float,

at_fromSale: Date,
at_toSale: Date,

purchase_note: String,
limit_quantity: Number,

is_controlStock: {type: Boolean, default: true},

quantity: Number,
quantity_alert: Number,
is_alert: Boolean, // 只读

allow_backorder: Boolean,
Records: [{type: ObjectId, ref: 'Record'}],
Batchs: [{type: ObjectId, ref: 'Batch'}],

is_sell: Boolean, //只读

at_crt: Date,
at_upd: Date,