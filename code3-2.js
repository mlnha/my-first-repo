const express = require('express'); //express 모듈 가져옴
const app = express(); //웹 서버의 설계에 대한 정보를 담고 있는 app 객체 생성
const port = 3000;

//첫 번째 미들웨어
app.use((req, res, next) => {
    const randomNumber = Math.floor(Math.random() * 10); //랜덤 정수를 뽑아 randomNumber에 저장
    console.log('Random Number: ${randomNumber'); //randomNumber 출력
    if (randomNumer % 3) return next(); //randomNumber가 3의 배수이면 다음 함수 next 호출
    else return res.sendStatus(403); //그렇지 않으면 403 Forbidden 에러를 응답으로 보냄
});
//두 번째 미들웨어
app.use((req, res, next) => {
    const {method, path} = req; //요청 객체(req)에서 요청의 메서드와 경로를 가져와
    console.log('${method} ${path}'); //라우트를 출력하고
    return next(); //다음 함수(next) 호출
});

//그 이후 라우팅을 통해 각 요청에 맞는 응답을 보냄
app.get('/', (req, res) => res.send('GET /'));
app.post('/', (req, res) => res.send('POST /'));
app.listen(port, () => console.log('Server listening on port ${port}!'));
