// 获取 用戶角色配置项
api = "https://example.com/api/v1/ConfOrder";
api = "https://example.com/api/b1/ConfOrder";
methods = "GET";
formData = null;

// 返回值
// status(200);
res = {
	status: 200,
	message: "",
	data: {
        "ConfOrder": {
            "status_Arrs": [
                0,
                10,
                60,
                70,
                100,
                200,
                400,
                700,
                800,
                1000
            ],
            "status": {
                "0": "购物车",
                "10": "已取消",
                "60": "超时",
                "70": "付款失败",
                "100": "待付款",
                "200": "已付款",
                "400": "正在处理",
                "700": "发货中",
                "800": "已完成",
                "1000": "删除"
            },
            "status_obj": {
                "cart": {
                    "num": 0,
                    "val": "购物车"
                },
                "cancel": {
                    "num": 10,
                    "val": "已取消"
                },
                "timeout": {
                    "num": 60,
                    "val": "超时"
                },
                "failPay": {
                    "num": 70,
                    "val": "付款失败"
                },
                "noPay": {
                    "num": 100,
                    "val": "待付款"
                },
                "paid": {
                    "num": 200,
                    "val": "已付款"
                },
                "doing": {
                    "num": 400,
                    "val": "配货中"
                },
                "shipping": {
                    "num": 700,
                    "val": "发货中"
                },
                "completed": {
                    "num": 800,
                    "val": "已完成"
                },
                "trash": {
                    "num": 1000,
                    "val": "删除"
                }
            },
            "status_checkouts": [
                0,
                10,
                60,
                70
            ],
            "action": {
                "front": {
                    "checkout": "CHECKOUT",
                    "payment": "PAYMENT",
                    "trash": "TRASH",
                    "cancel": "CANCEL"
                },
                "back": {
                    "confirm": "CONFIRM",
                    "done": "DONE",
                    "complete": "COMPLETE"
                }
            },
            "type_Order_Arrs": [
                -1,
                1
            ],
            "type_Order_obj": {
                "sale": {
                    "num": -1,
                    "val": "销售订单"
                },
                "purchase": {
                    "num": -1,
                    "val": "采购订单"
                }
            },
            "type_ship_Arrs": [
                0,
                1
            ],
            "type_ship": {
                "0": "自取",
                "1": "店铺配送"
            },
            "type_ship_obj": {
                "sClient": {
                    "num": 0,
                    "val": "自取"
                },
                "sShop": {
                    "num": 1,
                    "val": "店铺配送"
                }
            },
            "type_paid_Arrs": [
                0,
                1,
                2,
                3,
                4
            ],
            "type_paid": {
                "0": "货到付款",
                "1": "strip",
                "2": "paypal",
                "3": "wx",
                "4": "支付宝"
            },
            "type_paid_obj": {
                "cash": {
                    "num": 0,
                    "val": "货到付款"
                },
                "strip": {
                    "num": 1,
                    "val": "strip"
                },
                "paypal": {
                    "num": 2,
                    "val": "paypal"
                }
            }
        }
    }
}