Shop: {type: ObjectId, ref: 'Shop'},
Client: {type: ObjectId, ref: 'Client'},	// 只读
status: Number,								// enum: ConfOrder;

type_Order: Number, 						// 只读 enum: [1, -1] 采购 销售
is_alert: {type: Boolean, default: false},	// 如果在公司处理环节出错 变为 true

note_Client: String,

User_Order: {type: ObjectId, ref: "User"},	// 订单管理员
note_User: String,

code: String,								// 只读 产品名称
// path_crt: Number,						// enum: [1: 'online', 2: 'shop']

type_pay: Number, // enum: ConfOrder,
bill: {
	firstname: String,
	lastname: String,
	company: String,
	address: String,
	city: String,
	state: String,
	postcode: String,
	country: String,
	email: String,
	phone: String
},
is_paid: {type:Boolean, default: false},

type_ship: Number, // enum: ConfOrder,
ship: {
	Cita: {type: ObjectId, ref: "Cita"},
	
	firstname: String,
	lastname: String,
	company: String,
	address: String,
	city: String,
	state: String,
	postcode: String,
	country: String,
	email: String,
	phone: String
},
is_ship: {type:Boolean, default: false},
price_ship: {type: Float, default: 0},

OrderPords: [{type: ObjectId, ref: 'OrderPord'}],
total_regular: {type: Float, default: 0},
imp: {type: Float, default: 0},
total_discount: {type: Float, default: 0},

Firm: {type: ObjectId, ref: 'Firm'},		// 只读
at_crt: Date,								// 只读
at_upd: Date,								// 只读