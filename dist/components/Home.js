"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ImgSlider = _interopRequireDefault(require("./ImgSlider"));
var _Viewers = _interopRequireDefault(require("./Viewers"));
var _NewDisney = _interopRequireDefault(require("./NewDisney"));
var _Originals = _interopRequireDefault(require("./Originals"));
var _Trending = _interopRequireDefault(require("./Trending"));
var _react = require("react");
var _reactRedux = require("react-redux");
var _firebase = _interopRequireDefault(require("../firebase"));
var _movieSlice = require("../features/movie/movieSlice");
var _userSlice = require("../features/user/userSlice");
var _Award = _interopRequireDefault(require("./Award"));
var _Horror = _interopRequireDefault(require("./Horror"));
var _Contact = _interopRequireDefault(require("./Contact"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Home = function Home(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var userName = (0, _reactRedux.useSelector)(_userSlice.selectUserName);
  var awards = [];
  var hindi = [];
  var thriller = [];
  var telugu = [];
  var horror = [];
  (0, _react.useEffect)(function () {
    console.log("hello");
    _firebase.default.collection("movies").onSnapshot(function (snapshot) {
      snapshot.docs.map(function (doc) {
        console.log(awards);
        switch (doc.data().type) {
          case "awards":
            awards = [].concat(_toConsumableArray(awards), [_objectSpread({
              id: doc.id
            }, doc.data())]);
            break;
          case "hindi":
            hindi = [].concat(_toConsumableArray(hindi), [_objectSpread({
              id: doc.id
            }, doc.data())]);
            break;
          case "thriller":
            thriller = [].concat(_toConsumableArray(thriller), [_objectSpread({
              id: doc.id
            }, doc.data())]);
            break;
          case "telugu":
            telugu = [].concat(_toConsumableArray(telugu), [_objectSpread({
              id: doc.id
            }, doc.data())]);
            break;
          case "horror":
            horror = [].concat(_toConsumableArray(horror), [_objectSpread({
              id: doc.id
            }, doc.data())]);
            break;
        }
      });
      dispatch((0, _movieSlice.setMovies)({
        award: awards,
        hindi: hindi,
        thriller: thriller,
        telugu: telugu,
        horror: horror
      }));
    });
  }, [userName]);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(_ImgSlider.default, null), /*#__PURE__*/React.createElement(_Award.default, null), /*#__PURE__*/React.createElement(_NewDisney.default, null), /*#__PURE__*/React.createElement(_Originals.default, null), /*#__PURE__*/React.createElement(_Trending.default, null), /*#__PURE__*/React.createElement(_Horror.default, null), /*#__PURE__*/React.createElement(_Contact.default, null));
};
var Container = _styledComponents.default.main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-height: calc(100vh - 70px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n    overflow-x: hidden;\n    background-color: black;\n    \n    &:before{\n        background: url(\"/images/home-background.png\") center center /cover no-repeat fixed;\n        content:\"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1;\n\n    }\n    \n"])));
var _default = Home;
exports.default = _default;