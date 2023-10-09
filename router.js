//라우팅 기능을 미들웨어 형태로 구현 -> index.js에서 모듈 형태로 import하여 app 객체에 추가하여 구현
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('GET /'));
router.post('/', (req, res) => res.send('POST /'));

module.exports = router;