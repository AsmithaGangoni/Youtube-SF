"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _Login = _interopRequireDefault(require("./components/Login"));
var _Header = _interopRequireDefault(require("./components/Header"));
require("./App.css");
var _Home = _interopRequireDefault(require("./components/Home"));
var _Award = _interopRequireDefault(require("./components/Award"));
var _Detail = _interopRequireDefault(require("./components/Detail"));
var _Genre = _interopRequireDefault(require("./components/Genre"));
var _Contact = _interopRequireDefault(require("./components/Contact"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React.createElement(_Login.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/home"
  }, /*#__PURE__*/React.createElement(_Home.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/detail/:id"
  }, /*#__PURE__*/React.createElement(_Detail.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/horrorGenre"
  }, /*#__PURE__*/React.createElement("horrorDetail", null)))));
}
var _default = App;
exports.default = _default;