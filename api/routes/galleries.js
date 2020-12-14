const { index, show, create, update, destroy } = require('../controllers/galleries');
const passport = require('passport');

module.exports = (router) => {
  router.get('/gallery', index);
  router.post('/gallery', passport.authenticate('jwt', { session: false }), create);
  router.post('/gallery/update', passport.authenticate('jwt', { session: false }), update);
  router.post('/gallery/destroy', passport.authenticate('jwt', { session: false }), destroy);
  router.get('/gallery/:id', show);
  return router;
};