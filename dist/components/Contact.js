"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../App.css");
var _firebase = _interopRequireDefault(require("../firebase"));
var _styledComponents = require("styled-components");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Contact = function Contact() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    subTitle = _useState4[0],
    setSubTitle = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    backgroundImg = _useState6[0],
    setBackgroundImg = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    cardImg = _useState8[0],
    setCardImg = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    type = _useState10[0],
    setType = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    description = _useState12[0],
    setDescription = _useState12[1];
  var _useState13 = (0, _react.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    youtube = _useState14[0],
    setYoutube = _useState14[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    _firebase.default.collection("movies").add({
      title: title,
      subTitle: subTitle,
      backgroundImg: backgroundImg,
      cardImg: cardImg,
      type: type,
      description: description,
      youtube: youtube
    }).then(function () {
      alert('Message has been submitted');
    }).catch(function (error) {
      alert(error.message);
    });
    setTitle("");
    setSubTitle("");
    setBackgroundImg("");
    setCardImg("");
    setType("");
    setDescription("");
    setYoutube("");
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(Container, null, "UPLOAD YOUR Favourite short films to the list!"), /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "title",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("label", null, "Sub-Title"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "subTitle",
    value: subTitle,
    onChange: function onChange(e) {
      return setSubTitle(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("label", null, "Background Image"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "backgroundImg",
    value: backgroundImg,
    onChange: function onChange(e) {
      return setBackgroundImg(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("label", null, "Card Image"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "cardImg",
    value: cardImg,
    onChange: function onChange(e) {
      return setCardImg(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("label", null, "Youtube link"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "youtube",
    value: youtube,
    onChange: function onChange(e) {
      return setYoutube(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("label", null, "Type Of Movie"), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "type",
    value: type,
    onChange: function onChange(e) {
      return setType(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("label", null, "Description"), /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: "description",
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Submit"));
};
var Container = _styledComponents.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmargin-top: 300px;\nmargin-bottom: 15px;\ncolor: #FFF;\nfont-family: Manrope;\nfont-size: 24px;\nfont-style: normal;\nfont-weight: 500;\nline-height: normal;\ntext-transform:uppercase;\n\n\n"])));
var _default = Contact;
exports.default = _default;