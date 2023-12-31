"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function Genre() {
  return /*#__PURE__*/_react.default.createElement(Container, null, "Genre");
}
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmargin-top: 100px;\ncolor: white;\nz-index: 3;\nfont-size: 50;\n"])));
var _default = Genre;
exports.default = _default;