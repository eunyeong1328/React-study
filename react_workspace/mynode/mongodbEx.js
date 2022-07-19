let http = require('http');
let express = require('express');
let app =  express();

app.set('port',3000);

let server = http.createServer(app).listen(app.get('port'),()=>{
    console.log('express 이용 서버 실행중..');
    connectDB(); //mongoDB 호출을 해야한다.
})

//특정 폴더를 url로 접근하기 위한 설정(미들웨어)
let static = require('serve-static');
let path = require('path'); //현재 디렉토리 정보
const { urlencoded } = require('express');
const { isFunction, callbackify } = require('util');

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

router.route('/process/adduser').all((req,res)=>{
    console.log('/process/adduser-->');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;
    let name = req.body.name || req.query.name;
    let age = req.body.age || req.query.age;

    console.log(`data confirm ${id}, ${password},${name},${age} `);

    if(database){
        //users 콜렉션에 접근
        let users = database.collection('users');//바로 접근
        let data = [{"id" :id, "password" : password , "name" :name, "age" :age }];
        users.insertMany(data,(err, results)=>{
            if(err){
                console.log('insertMay() err-->');
                return;
            }
            if(results){
                res.send('사용자 추가 성공');
            }
            else{
                res.send('사용자 추가 실패');
            }
        });
    }
    else{
        console.log('몽고디비 연결 실패..');
    }
    
})

//로그인 처리 
router.route('/process/login').all((req, res) =>{
    console.log('/process/login --> ');
    
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;
    console.log(`confirm data ${id} ${password}`);

    if(database){
        let users = database.collection('users');
        let param = {"id" : id, "password" : password}
        users.find(param).toArray((err,results) => {
            if(err){
                console.log('find()--> 에러 발생');
                return;
            }
            if(results.length>0){
                console.log('사용자 찾음 !!');
                res.send('사용자 찾기 성공 !! ')
            }
            else{
                console.log('사용자 찾기 실패 !! ');
                res.send('사용자 찾기 실패 !! ')
            }
        });
    }
    else{
        console.log('디비연결 실패 !!');
    }
});


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