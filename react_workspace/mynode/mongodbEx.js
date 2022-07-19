let http = require('http');
let express = require('express');
let app =  express();

app.set('port',3000);

let server = http.createServer(app).listen(app.get('port'),()=>{
    console.log('express 이용 서버 실행중..');
    connectDB(); //호출을 해야한다.
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

//라우터 처리 
let router = express.Router();
//중요. '/' 입력되면, router객체로 연결
app.use('/',router);

//mongoDB 연결
let mongoClient = require('mongodb').MongoClient;
let database = null;

const connectDB  = () => {
    let dbUrl = 'mongodb://localhost:27017/nodeDB'
    mongoClient.connect(dbUrl, (err,db) => {
        if(err){
            console.log('몽고디비 연결 실패!!');
            return;
        }
        database = db.db('nodeDB'); //local 디비에 접근 전역변수로, 제대로 연결이 되어있는지 확인
        console.log('몽고디비 연결 성공!!');
    })
}