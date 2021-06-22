Firm: {type: ObjectId, ref: 'Firm'},		// 只读
code: String,
nome: String,
addr: String,
zip: String,
img_url: String,

Cita: {type: ObjectId, ref: 'Cita'},			// 所属城市
price_ship: Float,								// 本地运费
serve_Citas: [{
	Cita: {type: ObjectId, ref: 'Cita'},
	price_ship: Float,							// 额外运费, 如果无则为0 
}],

is_boutique: {type: Boolean, default: false},	// 是否为精品店
is_usable: { type: Boolean, default: true },
sort: Number,
at_crt: Date,
at_upd: Date,
