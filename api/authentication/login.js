let { Router } = require('express');
let fs = require('fs');
let { User } = require('../data/models');
let router = Router();
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let passport = require('passport');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (request, response) => {
    response.send('welcome');
  }
);

router.post('/admin', async (request, response) => {
  let { body } = request;
  let privKey = fs.readFileSync('certs/privateKey.pem', {
    encoding: 'utf8',
  });

  let user = await User.findOne({ userEmail: body.email });

  if (user && bcrypt.compareSync(body.password, user.userPassword)) {
    let token = jwt.sign(
      { sub: user._id, iat: Date.now() },
      privKey,
      { expiresIn: 1000 * 60 * 60 * 24, algorithm: 'RS256' } // 1000 * 60 * 60 * 24 = 1d
    );

    return response.status(200).json({
      success: 'user-authenticated',
      data: {
        userId: user.userId,
        userFirstName: user.userFirstName,
        userLastName: user.userLastName,
        userEmail: user.userEmail,
        userAuthenticationToken: token,
        userType: user.userType,
      },
    });
  } else {
    return response.status(200).json({
      error: 'user-error',
    });
  }
});

module.exports = router;
