let http = require('http');
let server = http.createServer();

var host  = 'localhost';
var port  = 3000;


//웹서버 사용자 접속 대기
server.listen(port, host, 100, () => {
    console.log(`웹서버 대기중 ip: ${host} port:${port}`);
});

//클라이언트 서버 접속
//http://localhost:3000/ 엔터
//connection.request 이벤트 발생
server.on('connection',()=>{
    console.log('클라이언트가 접속됨 ... !!') //접속 시 여러개 던지기 때문에 여러개 찍힐 수 있음
})

server.on('request',(req,res)=>{
    console.log('클라이언트의 요청에 응답함!!');
    res.writeHead(250,{"Content-type":"text/html;charset=utf-8"});
    res.write('<h2>웹서버에서 응답함</h2>');
    //서버로부터 클라이언트에 메세지 전송
    res.end();
})