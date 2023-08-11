"use strict";

var _sequelize = require("sequelize");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _index = _interopRequireDefault(require("../database/models/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
_dotenv.default.config();
app.use((0, _cors.default)({
  origin: '*'
}));
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  PORT
} = process.env;
const server = app.listen(PORT);
const sequelize = new _sequelize.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
}); // Ibi ntago biba bikenwe muri entry file yawe, wabishyira muri /models/index.js
const dbCon = async () => {
  try {
    await _index.default.sequelize.authenticate();
  } catch (error) {
    console.log(`db error: ${error.message}`);
  }
};
Promise.all([dbCon(), server]).then(() => {
  console.log(`Server listening on port:${PORT}`);
  console.log('DB connection successful');
});