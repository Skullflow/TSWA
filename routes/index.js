const users = require('./users');

const init = (app) => {
  app.use('/users', users);
}

module.exports = {
  init
}
