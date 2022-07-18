let http = require('http');
let express = require('express');
const { application } = require('express');
let app =  express();

app.set('port',3000);

let server = http.createServer(app).listen(app.get('port'),()=>{
    console.log('express 이용 서버 실행중..');
})

//미들웨어1
app.use((req,res,next)=>{
    console.log('첫번째 미들웨어 !! ');
    req.user = 'hong';
    //res.send('첫번째 미들웨어에서 전송함 : ' + req.user);
    //http요청은 보내면 한번만 보낼 수 있고 또 보낼 수 없어 막아서(주석처리) 한번만 전송
    next();
})

app.use((req,res,next)=>{
    console.log('두번째 미들웨어 !! ');
    // res.send('두번째 미들웨어에서 전송함 : ' + req.user);
    next();
})

app.use((req,res)=>{
    console.log('세번째 미들웨어 !! ');
    let person = {name:'hong', age:20};
    res.send(person);
})

// app.get('/', (req,res) => {
//     res.send("hello!! Nodejs express start!!");
// });