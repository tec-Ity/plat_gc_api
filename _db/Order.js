Shop: {type: ObjectId, ref: 'Shop'},
Client: {type: ObjectId, ref: 'Client'},			// 只读

status: Number,										// enum: ConfOrder;
is_hide_client: {type: Boolean, default: false}, 	// 客户是否可见, 客户删除状态下， 商家可删除

type_Order: Number, 						// 只读 enum: [1, -1] 采购 销售

note_Client: String,

User_Oder: {type: ObjectId, ref: "User"},	// 订单管理员(接单)
note_Oder: String,

User_Pker: {type: ObjectId, ref: "User"},	// 订单配货员(分拣)
note_Pker: String,

User_Dver: {type: ObjectId, ref: "User"},	// 订单分发员(配送)
note_Dver: String,

code: String,								// 只读 产品名称
// path_crt: Number,						// enum: [1: 'online', 2: 'shop']

type_paid: Number, // enum: ConfOrder,
paid_info: {
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
ship_info: {
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

log_info: {				// 第三方物流公司的信息, 如果出现问题 可以联系
	company: String,
	principal: String,
	phone: String,
},

total_quantity: {type:Number, default: 0},			// 只读 采购本条目总数
price_ship: {type: Float, default: 0},
total_sale: {type: Float, default: 0},				// 只读	此货物的费用
total_regular: {type: Float, default: 0},			// 只读	此订单节省价格
total_discount: {type: Float, default: 0},			// 只读	此订单原价

total: {type: Float, default: 0},					// 只读	后台给出的价格 后面批发时用
imp: {type: Float, default: 0},						// 客户 付款

OrderProds: [{type: ObjectId, ref: 'OrderProd'}],

Firm: {type: ObjectId, ref: 'Firm'},		// 只读
at_crt: Date,								// 只读
at_upd: Date,								// 只读
at_schedule: Date,							// 只读	计划收货时间
at_confirm: Date,							// 只读	确认订单时间
at_paid: Date,								// 只读	付款时间
at_shipping: Date,							// 只读	开始配送时间
at_completed: Date,							// 只读	完成订单时间