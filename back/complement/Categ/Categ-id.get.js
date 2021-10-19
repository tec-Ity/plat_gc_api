api = "https://example.com/api/b1/Categ/[:id]";
methods = "GET";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}
formData = null;



// 返回值
// status(200);
result = {
    "status": 200,
    "message": "[server] 成功读取",
    "data": {
        "object": {
            "Categ_sons": [
                "60d1b47be1dbb22605d73c40",
                "60d1eb432b16a947babdbe5c"
            ],
            "is_usable": true,
            "_id": "60d0b048227d41599590d8cb",
            "img_url": "./media/default/Categ.jpg",
            "code": "SUGO",
            "level": 1,
            "Categ_far": null,
            "Firm": "60bcddc8dbbedb2669903384",
            "User_crt": "60cb07d6a394cd150c3391d3",
            "langs": [],
            "sort": 0,
            "at_crt": "2021-06-21T15:29:12.140Z",
            "at_upd": "2021-07-24T10:21:06.595Z",
            "__v": 4,
            "User_upd": "60cb07d6a394cd150c3391d3"
        },
    }
}