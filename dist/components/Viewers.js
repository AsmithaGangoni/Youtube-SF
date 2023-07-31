"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Genre = _interopRequireDefault(require("./Genre"));
var _reactRouterDom = require("react-router-dom");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Viewers = function Viewers(props) {
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/horrorGenre"
  }, /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/viewers-disney.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("video", {
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: "/videos/1564674844-disney.mp4",
    type: "video/mp4"
  })))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/horrorGenre"
  }, /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/viewers-pixar.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("video", {
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: "/videos/1564676714-pixar.mp4",
    type: "video/mp4"
  })))), /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/viewers-marvel.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("video", {
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: "/videos/1564676115-marvel.mp4",
    type: "video/mp4"
  }))), /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/viewers-starwars.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("video", {
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: "/videos/1608229455-star-wars.mp4",
    type: "video/mp4"
  }))), /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/viewers-national.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("video", {
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: "/videos/1564676296-national-geographic.mp4",
    type: "video/mp4"
  }))));
};
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmargin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"])));
var Wrap = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\npadding-top: 56.25%;\nborder-radius: 10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n  rgb(0 0 0 / 73%) 0px 16px 10px -10px;\ncursor: pointer;\noverflow: hidden;\nposition: relative;\nmargin-top: 20px;\ntransition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\nborder: 3px solid rgba(249, 249, 249, 0.1);\n\nimg {\n  inset: 0px;\n  display: block;\n  height: 100%;\n  object-fit: cover;\n  opacity: 1;\n  position: absolute;\n  transition: opacity 500ms ease-in-out 0s;\n  width: 100%;\n  z-index: 1;\n  top: 0;\n}\n\nvideo {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  opacity: 0;\n  z-index: 0;\n}\n\n&:hover {\n  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n\n  transform: scale(1.05);\n  border-color: rgba(249, 249, 249, 0.8);\n\n  video {\n    opacity: 1;\n  }\n}\n"])));
var _default = Viewers;
exports.default = _default;