let SQLConnection;

const setSQLConnection = (sqlc) => {
  SQLConnection = sqlc;
}

const getSQLConnection = () => {
  return SQLConnection;
}

module.exports = {
  host: 'localhost',
  user: 'tswa',
  password: 'tswa',
  database: 'tswa',
  port: 3000,
  setSQLConnection,
  getSQLConnection
};
