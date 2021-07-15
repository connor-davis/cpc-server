let express = require('express');
let http = require('http').createServer(express);
let router = express.Router();

let log = (...args) => console.log(...args);

let create = async ({ port }) => {
  express.use(express.static('build'));

  router.get('/', async (request, response) =>
    response.status(200).send('hello')
  );

  http.listen(port, () => log(`Listening on http://localhost:${port}`));

  return { close: () => http.close() };
};

module.exports = {
  create,
};
