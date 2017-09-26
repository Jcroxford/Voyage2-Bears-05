const helloController = require('../controllers/helloController')

module.exports = (app) => {
  app.get('/hello', helloController.hello)
}
