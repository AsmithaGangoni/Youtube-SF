"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactSlick = _interopRequireDefault(require("react-slick"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return /*#__PURE__*/_react.default.createElement(Carousel, settings, /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/image slider.png",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/image slider (1).png",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/hope.png",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement(Wrap, null, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/image slider (2).png",
    alt: ""
  }))));
}
var _default = ImgSlider;
exports.default = _default;
var Carousel = (0, _styledComponents.default)(_reactSlick.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-top: 61px;\n    margin-bottom: 50px;\n \n    ul li button {\n        &:before{\n            font-size: 10px;\n            color: rgb(150, 158, 171);\n        }\n    }\n\n    li.slick-active button:before{\n        color: white;\n    }\n\n    .slick-list{\n        overflow: visible;\n    }\n\n    button{\n        z-index: 1;\n    }\n\n"])));
var Wrap = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ncursor: pointer;\n\n    img{\n        border: 4px solid transparent:\n        border-radius: 4px;\n        width: 100%;\n        height: 100%;\n        box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px,\n        rgb(0 0 0 / 73% ) 0px 16px 10px -10px;\n        transition-duration: 300ms;\n\n        &:hover{\n            border: 4px solid rgba(249, 249, 249, 0.8);\n        }\n    }\n"])));