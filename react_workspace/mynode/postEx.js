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
const { urlencoded } = require('express');

let pathName = path.join(__dirname, 'public'); //__dirname 현재 디렉토리 정보
console.log('pathName :' + pathName);

app.use('/public', static(pathName)); //localhost:3000/public/으로 public 폴더 접근가능
app.use(static(pathName));//loaclhost:3000/ 로 접근가능

app.use(express.urlencoded());//post : application/x-www-form-urlencoded
app.use(express.json());//post : application//json

app.use((req,res) =>{
    console.log('post 방식 데이터 처리');
    let id = req.body.id || req.query.id; //get방식 || post 방식
    let password = req.body.password || req.query.password; //get방식 || post 방식
    console.log('id: ' + id + ', password : ' + password);

     res.send('id: ' + id + ', password : ' + password);
})