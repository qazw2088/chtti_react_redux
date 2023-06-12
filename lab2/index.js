var request = require('request')
const URL1 = "https://www.chtti.cht.com.tw/portal/index.jsp"
request(URL1, function(error, response, body){
    if(!error && response.statusCode === 200){
        console.log(body)
    }else{
        console.log(error)
    }
})