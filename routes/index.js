let { Router } = require('express');
let router = Router();

router.get('/', async (request, response) => {
  return response.status(200).sendFile('index.html');
});

module.exports = router;
