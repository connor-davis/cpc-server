let { Router } = require('express');
let router = Router();

router.get('/', async (request, response) => {
  return response.status(200).send('Welcome to CPC Api.');
});

module.exports = router;
