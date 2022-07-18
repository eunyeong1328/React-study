let http = require('http');
let express = require('express');
let app =  express();

app.set('port',3000);

let server = http.createServer(app).listen(app.get('port'),()=>{
    console.log('express 이용 서버 실행중..');
})

app.use((req,res)=>{
    console.log('미들웨어에서 get방식 전송 데이터 파싱(parsing)');
    //localhost:3000/?name='hong'
    //get 방식으로 전달되는 데이터는 req.query.변수이름
    let userName = req.query.username;
    res.send('userName : ' + userName);
})