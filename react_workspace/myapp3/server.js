let http = require('http');
let express = require('express');
let app = express();

app.set('port', 5000);  // 리액트 서버가 3000번을 사용할 예정이므로 nodejs 서버는 5000번을 사용하도록 함

let server = http.createServer(app).listen(app.get('port'), () => {
    console.log('express 이용 서버 실행중...');
});

let static = require('serve-static');
let path = require('path');

let pathName = path.join(__dirname, 'public');
console.log('pathName: ' + pathName);
app.use('/public', static(pathName));
app.use(static(pathName));

app.use(express.urlencoded());
app.use(express.json());

const fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: conf.connectionLimit,
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
});

//디비에서 데이터 가져오기
let router = express.Router();
app.use('/',router); //중요 

router.route('/api/customerList/').all((req,res)=>{
    // console.log('/api/customerList/');
    pool.getConnection((err,conn)=>{
        if(err){
            console.log('getConnection() 에러 --> ' + err);
            if(conn){
                conn.release();
            }
            return
        }

        let sql = 'select * from customer';
        conn.query(sql, (err, result) => {
            conn.release();
            if(err){
                console.log('query() 에러 ');
                return;
            }
            res.send(result); 
        })

    })

})

//데이터 디비에 저장하기
const multer = require('multer');
const upload = multer({dest : './upload'}); //사진을 덤프 시켜서 upload한다.
app.use('/image', express.static('./upload'));

router.route('/api/customerUplaod/').all(upload.single('file'), (req,res) =>{
    console.log('/api/customerUpload-->');
    let image = '/image/' + req.file.filename;
    let name = req.body.username;
    let birthday = req.body.birthday;
    let job = req.body.job;

    console.log(`server data ${image}, ${name}, ${birthday}, ${job}`);

    pool.getConnection((err,conn)=>{
        if(err){
            console.log('getConnection() 에러 --> ' + err);
            if(conn){
                conn.release();
            }
            return;
        }

        let params = [null, image, name, birthday, job];
        let sql = "insert into customer values(?,?,?,?,?)";
        conn.query(sql, params, (err, results) => {
            conn.release();
            if(err){
                console.log('query() 에러 --> ', err);
                return;
            }
            res.send(results); 
        })
    })

});