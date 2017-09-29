const helloController = require('../controllers/helloController')
const userController  = require('../controllers/userController')
const organizationController  = require('../controllers/organizationController')

module.exports = (app) => {
  app.get('/hello', helloController.hello)

  // ==================================================
  // user routes
  // ==================================================
  app.post('/api/user', userController.create)
  app.post('/api/organization', organizationController.create)
}
