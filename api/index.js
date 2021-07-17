let { Router } = require('express');
let passport = require('passport');
let router = Router();

router.get('/', async (request, response) => {
  return response.status(200).send('Welcome to CPC Api.');
});

router.get(
  '/authOnly',
  passport.authenticate('jwt', { session: false }),
  async (request, response) => {
    return response
      .status(200)
      .json({ success: 'Authorized.', user: request.user });
  }
);

router.use('/authentication/login', require('./authentication/login'));
router.use('/authentication/register', require('./authentication/register'));

module.exports = router;
