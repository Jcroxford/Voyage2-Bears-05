const helloController = require('../controllers/helloController')
const userController  = require('../controllers/userController')

module.exports = (app) => {
  app.get('/hello', helloController.hello)

  // ==================================================
  // user routes
  // ==================================================
  app.post('/api/user', userController.create)
}
