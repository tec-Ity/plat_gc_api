Pd: {type: ObjectId, ref: 'Pd'},
Prod: {type: ObjectId, ref: 'Prod'},

attrs: [{
	Attr: {type: ObjectId, ref: 'Attr'},
	nome: String,
	option: String
}],

price_regular: Float,
price_sale: Float,

at_fromSale: Date,
at_toSale: Date,

purchase_note: String,
limit_quantity: {type: Number, default: 0},

is_controlStock: {type: Boolean, default: true},

quantity: Number,
quantity_alert: Number,
is_alert: Boolean, // 只读

allow_backorder: {type: Boolean, default: true},

Records: [{type: ObjectId, ref: 'Record'}],
Batchs: [{type: ObjectId, ref: 'Batch'}],

is_sell: Boolean, //只读

at_crt: Date,
at_upd: Date,