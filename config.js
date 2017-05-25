let SQLConnection;

const setSQLConnection = (sqlc) => {
  SQLConnection = sqlc;
}

const getSQLConnection = () => {
  return SQLConnection;
}

module.exports = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sys',
  port: 3000,
  setSQLConnection,
  getSQLConnection
};
