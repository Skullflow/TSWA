const createValuesString = (body) => {
  return "'" + body.firstname + "','"
    + body.lastname + "','"
    + body.email + "','"
    + body.password + "'"
};

module.exports = {
  createValuesString
}
