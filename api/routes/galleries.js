const { index, show, create, update, destroy } = require('../controllers/galleries');
const passport = require('passport');

module.exports = (router) => {
  router.get('/gallery', index);
  // router.get('/gallery/show', passport.authenticate('jwt', { session: false }), show);
  router.get('/gallery/:id', show);
  router.post('/gallery', create);
  // router.post('/gallery/update', passport.authenticate('jwt', { session: false }), update);
  router.post('/gallery/update', update);
  // router.post('/gallery/destroy', passport.authenticate('jwt', { session: false }), destroy);
  router.post('/gallery/destroy', destroy);
  return router;
};