"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var _store = _interopRequireDefault(require("./app/store"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, /*#__PURE__*/_react.default.createElement(_App.default, null))), document.getElementById("root"));