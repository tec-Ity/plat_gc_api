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
            status_Arrs: [10, 70, 100, 200, 400, 700, 800],
            status: {
                // 0:       '购物车',
                10:     '已取消',
                100:    '客户正在下单',
                200:    '等待商家接单',
                400:    '正在配货',
                700:    '正在发货',
                800:    '已完成',
            },
            status_obj: {
                // cart:    {num: 0,    val: '购物车'      },
                cancel:     {num: 10,   val: '已取消'      },
                placing:    {num: 100,  val: '客户正在下单'   },
                responding: {num: 200,  val: '等待商家接单'   },
                preparing:  {num: 400,  val: '正在配货'         },
                shipping:   {num: 700,  val: '正在发货'         },
                completed:  {num: 800,  val: '已完成'      },
            },
            status_confirms: [10, 70],  // 从 购物车 取消订单 超时订单 失败订单 确认生成订单

            // 状态更改的 action
            action: {
                front: {
                    place:      'PLACE',
                    cancel:     'CANCEL',
                    trash:      'TRASH',
                },
                back: {
                    confirm:    'CONFIRM',
                    done:       'DONE',
                    complete:   'COMPLETE',
                }
            },

            // 订单的种类 是销售 还是采购
            type_Order_Arrs: [-1, 1],
            type_Order_obj: {
                sale:       {num: -1,   val: '销售订单' },
                purchase:   {num: -1,   val: '采购订单' },
            },

            // 配送方式
            type_ship_Arrs: [0, 1],
            // type_ship_Arrs: [0, 1, 2, 3],
            type_ship: {
                0: '自取',
                1: '店铺配送',
                // 2: '公司配送',
                // 3: '第三方'
            },
            type_ship_obj: {
                sClient:    {num: 0,    val: '自取'       },
                sShop:      {num: 1,    val: '店铺配送'     },
                // sFirm:       {num: 2,    val: '公司配送'     },
                // sThird:      {num: 3,    val: '第三方'  }
            },

            // 付款方式
            type_paid_Arrs: [0, 1, 2],
            type_paid: {
                0: '货到付款',
                1: 'strip',
                2: 'paypal',
                // 3: 'wx',
                // 4: '支付宝'
            },
            type_paid_obj: {
                cash:       {num: 0,    val: '货到付款'     },
                strip:      {num: 1,    val: 'strip'    },
                paypal:     {num: 2,    val: 'paypal'   },
                // wx:          {num: 3,    val: '微信'       },
                // alipay:      {num: 4,    val: '支付宝'  },
            },
        }
    }
}