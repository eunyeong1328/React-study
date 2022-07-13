let http = require('http');
let express = require('express');
let app =  express();

app.set('port',3000);

let server = http.createServer(app).listen(app.get('port'),()=>{
    console.log('express 이용 서버 실행중..');
})

//특정 폴더를 url로 접근하기 위한 설정(미들웨어)
let static = require('serve-static');
let path = require('path'); //현재 디렉토리 정보

let pathName = path.join(__dirname, 'public'); //__dirname 현재 디렉토리 정보
console.log('pathName :' + pathName);

app.use('/public', static(pathName)); //localhost:3000/public/으로 public 폴더 접근가능
app.use(static(pathName));//loaclhost:3000/ 로 접근가능