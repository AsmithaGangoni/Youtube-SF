"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Login = function Login(props) {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CTALogoTwo, {
    src: "/images/image (1).png"
  }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(CTA, null, /*#__PURE__*/React.createElement(CTALogoOne, {
    src: "/images/logo.png"
  })), /*#__PURE__*/React.createElement(Description, null, "Get all here")));
};
var Container = _styledComponents.default.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\noverflow: hidden;\ndisplay: flex;\nflex-direction: row;\ntext-align: center;\nheight: 100vh;\n"])));
var Content = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-bottom: 100vh;\n    width: 100%;\n    position: relative;\n    min-height: 100vh;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;//horizontal shift\n    align-items: center;//vertical shift\n    flex-direction: column;\n    padding: 80px 40px;\n    height: 100%;\n    margin-right: 200px;\n\n"])));
var CTALogoTwo = _styledComponents.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-items: center;\nwidth: 381px;\nheight: 650px;\njustify-content: left;\n\n"])));
var CTA = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\nmargin-bottom: 2vw;\nmax-width: 900px;\n\ndisplay: flex;\nflex-direction: row;\n\nmargin-top: -100px;\n\nmargin-right: auto;\nmargin-left: auto;\nwidth: 100%;\n"])));
var CTALogoOne = _styledComponents.default.img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\n\nwidth: 700px;\nheight: 200px;\nflex-shrink: 0;\ndisplay: flex;\nmargin-left: 90px;\nalign-items: center;\njustify-content: center;\n\n\n\n"])));
var Description = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\nwidth: 570px;\nheight: 58px;\nflex-shrink: 0;\nborder-radius: 4px;\nbackground: #E60000;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ntext-transform: uppercase;\ncolor: #F9F9F9;\ntext-align: center;\nfont-family: Roboto;\nfont-size: 18px;\nfont-style: normal;\nfont-weight: 700;\nline-height: normal;\nletter-spacing: 1.5px;\nmargin-top: 10px;\n\n"])));
var _default = Login;
exports.default = _default;