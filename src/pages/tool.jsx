

import jsonp from "jsonp";

//请求高德天气
export const reqWeather = (city) => {

    return new Promise((resolve, reject) => {
        const url = `https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=${city}`
        jsonp(url, {}, (err, data) => {
            console.log(data);
           
            if (data.city) {
                resolve(data)
            }else{
                console.log('获取天气失败')
            }
            // if(data.status==="1"){
            //     //请求成功，拿到数据
            //     const {weather,city,province,temperature} = data.lives[0]
            //     resolve({weather,city,province,temperature})
            // }else{
            //     //请求失败
            //     message.error("获取天气信息失败!")
            // }
        })
    })
}
