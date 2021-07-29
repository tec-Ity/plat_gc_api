// Prod Sku 商品属性

Prod: {type: ObjectId, ref: 'Prod'},

nome: String,
options: [String],

langs: [{
	Lang: {type: ObjectId, ref: 'Lang'},	// 如果为空 则为默认值
	desp: String, 							// 描述
}],
Firm: {type: ObjectId, ref: 'Firm'},
sort: {type: Number, default: 0}