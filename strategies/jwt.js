let Strategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

let { User } = require('../api/data/models');

let fs = require('fs');

let pubKey = fs.readFileSync('certs/publicKey.pem', {
  encoding: 'utf8',
});

let options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: pubKey,
  algorithms: ['RS256'],
};

module.exports = new Strategy(options, (payload, done) => {
  User.findById(payload.sub, (error, document) => {
    if (error) {
      return done(error, false);
    }

    if (document) {
      return done(null, document);
    } else {
      return done(null, false);
    }
  });
});
