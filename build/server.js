"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// CONFIGURE DOTENV
_dotenv["default"].config();
var app = (0, _express["default"])();
var PORT = process.env.PORT;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
// CREATE EXPRESS SERVER
app.listen(PORT);
app.listen(PORT, function () {
  console.log("server listening on port ".concat(PORT));
});