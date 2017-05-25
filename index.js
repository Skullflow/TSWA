/*
* Depencencies
*/
const express  = require('express')
const mysql = require('mysql')
const config = require('./config')
const routes = require('./routes')
/*
* Variables
*/
const app = express()
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
    //Initialize server routes
    routes.init(app);
    //Listener on port
    app.listen(config.port, () => {
      console.log("TSA listening on 3000...")
    })
  }
});
