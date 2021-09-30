// 只有总公司管理员以上级别可以创建

api = "https://example.com/api/b1/Sku";
method = "POST";
formData = {
    "obj": {
        Prod: {required: true, type: ObjectId, description: "所属产品"}
        attrs: [{
        	nome: String,
        	option: String
        }], // {require: true,}
        price_regular: {required: false, type: Float, description: "商品标价"},
        price_sale: {required: false, type: Float, description: "商品卖价"},
        limit_quantity: {required: false, type: Number, description: "商品限定数量"},
        purchase_note: {required: false, type: String, description: "商品采购通知"},
        is_controlStock: {required: false, type: Boolean, description: "是否管理库存"},
        allow_backorder: {required: false, type: Boolean, description: "是否允许缺货下单"},
        quantity: {required: false, type: Number, description: "商品库存数量"},
        quantity_alert: {required: false, type: Number, description: "商品库存警戒值"},
        is_usable: {required: false, type: Boolean, description: "是否可用"}
    }
}
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}


// 返回值
// status(200);
res = {
    "status": 200,
    "message": "[server] 创建成功",
    "data": {
        "object": {
        	
        },
    }
}