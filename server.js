'use strict';
let dotenv = require('dotenv');

let express = require('express');
let app = express();
let http = require('http').createServer(app);

let { json, urlencoded } = require('body-parser');
let compression = require('compression');
let cors = require('cors');

let api = require('./api');
let routes = require('./routes');

let port = process.env.PORT || 8080;

app.use(express.static('build'));

app.use(compression());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

app.use('/api', api);
app.use('/', routes);

http.listen(port, () => console.log(`Listening on http://localhost:${port}`));
