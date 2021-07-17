let { Router } = require('express');
let router = Router();
let uuid = require('uuid');
let bcrypt = require('bcrypt');
let { User } = require('../data/models');
let { IUserType } = require('../types');
let jwt = require('jsonwebtoken');
let fs = require('fs');

router.post('/admin', async (request, response) => {
  let { body } = request;

  let privKey = fs.readFileSync('certs/privateKey.pem', {
    encoding: 'utf8',
  });

  if (await User.findOne({ userEmail: body.email }))
    return response.status(500).json({ error: 'user-already-exists' });

  let user = new User({
    userId: uuid.v4(),
    userFirstName: body.firstName,
    userLastName: body.lastName,
    userEmail: body.email,
    userPassword: await bcrypt.hashSync(body.password, 1024),
    userType: IUserType.ADMIN,
  });

  try {
    user.save();

    let data = user.toJSON();

    let token = jwt.sign(
      {
        sub: data._id,
        iat: Date.now(),
      },
      privKey,
      { expiresIn: 1000 * 60 * 60 * 24, algorithm: 'RS256' }
    );

    return response.status(200).json({
      success: 'user-registered',
      data: {
        userId: data.userId,
        userFirstName: data.userFirstName,
        userLastName: data.userLastName,
        userEmail: data.userEmail,
        userType: data.userType,
        userAuthenticationToken: token,
      },
    });
  } catch (error) {
    return response.status(200).json({
      error,
    });
  }
});

module.exports = router;
