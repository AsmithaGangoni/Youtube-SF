"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _movieSlice = require("../features/movie/movieSlice");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var NewDisney = function NewDisney(props) {
  var movies = (0, _reactRedux.useSelector)(_movieSlice.selectNewDisney);
  console.log(movies, ":🛢️");
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement("h4", null, "Hindi Short-Films"), /*#__PURE__*/_react.default.createElement(Content, null, movies && movies.map(function (movie, key) {
    return /*#__PURE__*/_react.default.createElement(Wrap, {
      key: key
    }, movie.id, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/detail/" + movie.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: movie.cardImg,
      alt: movie.title
    })));
  })));
};
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\npadding: 0 0 26px;\n"])));
var Content = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ndisplay: grid;\ngrid-gap: 25px;\ngap: 25px;\ngrid-template-columns: repeat(4, minmax(0, 1fr));\n\n@media (max-width: 768px) {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n"])));
var Wrap = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\npadding-top: 56.25%;\nborder-radius: 10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n  rgb(0 0 0 / 73%) 0px 16px 10px -10px;\ncursor: pointer;\noverflow: hidden;\nposition: relative;\ntransition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\nborder: 3px solid rgba(249, 249, 249, 0.1);\n\n\nimg{\n    inset: 0px;\n    display: block;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    z-index: 1;\n    top: 0;\n}\n&:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"])));
var _default = NewDisney;
exports.default = _default;