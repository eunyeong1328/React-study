let http = require('http');
let express = require('express');
let app = express();

app.set('port', 3000);

let server = http.createServer(app).listen(app.get('port'), () => {
    console.log('express 이용 서버 실행중...');
});

// 특정 폴더를 URL로 접근하기 위한 설정(미들웨어 이용)
let static = require('serve-static');
let path = require('path');  // 현재 디렉토리 정보

let pathName = path.join(__dirname, 'public');  // __dirname: 현재 디렉토리 정보
console.log('pathName: ' + pathName);
app.use('/public', static(pathName));  // localhost:3000/public/login.html 입력 시 접근
app.use(static(pathName));  // localhost:3000/login.html 입력 시 접근

app.use(express.urlencoded());  // post: application/x-www-form-urlencoded 방식으로 전달되는것을 처리하기 위한 코드
app.use(express.json());  // post: application/json 방식으로 전달되는것을 처리하기 위한 코드

// mysql 이용 데이터베이스 처리
let mysql = require("mysql");
const { rootCertificates } = require('tls');

// DB Connection pool 설정
let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'nodedb'
});

// 라우터 구현
let router = express.Router();
app.use('/', router);
router.route('/process/addUser/').all((req, res) => {
    console.log('/process/addUser/ => ');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;
    let name = req.body.name || req.query.name;
    let age = req.body.age || req.query.age;

    console.log(`${id}, ${password}, ${name}, ${age}`);

    age = Number(age);
    pool.getConnection((err, conn) => {
        if (err) {
            console.log(`err: ${err}`);
            if (conn) {
                conn.release();
            }
            return;
        }

        let data = [id, password, name, age];
        let sql = 'INSERT INTO user VALUES(?, ?, ?, ?);';
        conn.query(sql, data, (err, results) => {
            conn.release();
            if (err) {
                console.log('Query 실행 시 에러발생: ' + err);
                return ;
            }
            if (results) {
                res.send('사용자 추가 성공!');
            }
            else {
                res.send('사용자 추가 실패!');
            }
        });
    });
});

// 사용자 리스트 보기
router.route('/process/listuser/').all((req, res) => {  // localhost:3000/process/listuser/ 들어가면 유저정보를 리스트 형태로 출력해줌.ㄴ
    console.log('/process/listuser/ --> ');
    pool.getConnection((err, conn) => {
        if (err) {
            console.log('getConnection() 에러: ' + err);
            if (conn) {
                conn.release();
            }
            return ;
        }

        let sql = "SELECT * FROM user;";
        conn.query(sql, (err, results) => {
            conn.release();
            if (err) {
                console.log("Query 에러: " + err);
                return ;
            }
            res.send(results);
        });
    });
});