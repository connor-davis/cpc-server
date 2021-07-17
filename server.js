'use strict';
let dotenv = require('dotenv');
dotenv.config();

let express = require('express');
let app = express();
let http = require('http').createServer(app);

let compression = require('compression');
let cors = require('cors');
let { json, urlencoded } = require('body-parser');
let passport = require('passport');
let mongoose = require('mongoose');

let dev = process.env.NODE_ENV !== 'production';

let JwtStrategy = require('./strategies/jwt');
let session = require('express-session');

let api = require('./api');
let routes = require('./routes');
let { User } = require('./api/data/models');

let port = process.env.PORT || 8080;

(async () => {
  if (!dev) app.use(express.static('build'));

  app.use(cors());
  app.use(compression());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(session({ secret: process.env.ROOT_PASSWORD }));
  app.use(passport.initialize());
  app.use(passport.session());

  await mongoose.connect(
    process.env.MONGOOSE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (error) => {
      if (error) return console.log('Error connecting to database.', error);
      else console.log('Connected to database.');
    }
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, function (error, user) {
      done(error, user);
    });
  });

  passport.use('jwt', JwtStrategy);

  app.use('/api', api);
  if (!dev) app.use('/', routes);

  http.listen(port, () => console.log(`Listening on http://localhost:${port}`));
})();
