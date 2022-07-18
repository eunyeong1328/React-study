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

//mysql 이용 데이터베이스 처리
let mysql = require("mysql");

//디비 커넥션 풀 설정
let pool  = mysql.createPool({
  connectionLimit:10,
  host: 'localhost',
  user:'root',
  password:'111111',
  database:'nodeDB'
})

//라우터 구현
let router = express.Router();
app.use('/' , router);

router.route('/process/addUser').all((req,res) =>{
  console.log('/process/addUser/ ===> ');
  let id = req.body.id || id.query.id;
  let password = req.body.password || id.query.password;
  let name = req.body.name || id.query.name;
  let age = req.body.age || id.query.age;

  console.log(` ${id}  ${password}  ${name}  ${age}`);

  age = Number(age);
  pool.getConnection((err,conn) =>{
      if(err){
        console.log(`err ---> ${err}`);
        if(conn){
          conn.release();
        }
        return;
      }

      let data = [id,password,name,age];
      let sql = 'insert into user values(?,?,?,?)';
      conn.query(sql, data, (err, results) => {
          conn.release();
          if(err){
            console.log('query 실행 시 에러발생 : ' + err);
            return;
          }
          if(results){
            res.send('사용자 추가 성공!');
          }
          else{
            res.send('사용자 추가 실패!!');
          }
      });
  })
});

//사용자 리스트 보기
router.route('/process/listuser/').all((req,res) =>{
  console.log('/processor/listuser');
  pool.getConnection((err,conn )=>{
    if(err){
      console.log("getConnection() 에러 : " + err);
      if(conn){
          conn.release();  
      }
      return;
    }

    let sql = 'select * from user';
    conn.query(sql, (err, results) => {
      conn.release();
      if(err){
        console.log('qeury() error --->' + err);
        return;
      }
      res.send(results);

    })

  })
})