/*
* Depencencies
*/
const express  = require('express')
const mysql = require('mysql')
const config = require('./config')
const bp = require('body-parser')
/*
* Variables
*/
const app = express()

/*
* Config Server
*/
// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
// parse application/json
app.use(bp.json())

const connection_data = {
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db
}

/*
* SQL Connection and start Server
*/

const connection = mysql.createConnection(connection_data)

connection.connect((err) => {
  if (err) {
    console.log('Error connecting: ' + err.stack);
    return
  } else {
    //assign db instance
    config.setSQLConnection(connection);

    const routes = require('./routes')
    //Initialize server routes
    routes.init(app);
    //Listener on port
    app.listen(config.port, () => {
      console.log("TSA listening on 3000...")
    })
  }
})
