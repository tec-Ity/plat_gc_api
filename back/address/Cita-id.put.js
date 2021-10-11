api = "https://example.com/api/b1/Cita/:id";
method = "PUT";
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "authorization": "auth"+" "+accessToken
}

general: {
    sort: {required: false, type: Number, description: "城市的排序"},
}

// 如果不添加本地图片 建议直接传数据
formData = { general }

// 如果添加本地图片 要用下面的
formData = new formData();
[formData.append("file_"+i, image_File)];   // formData.append(["file0"], 'file路径0');
formData.append("obj", JSON.stringify(general));




// 返回值
// status(200);