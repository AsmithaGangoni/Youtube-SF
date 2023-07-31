"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _firebase = _interopRequireDefault(require("../firebase"));
var _app = _interopRequireDefault(require("firebase/compat/app"));
var _auth = require("firebase/auth");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Detail = function Detail(userName) {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    detailData = _useState2[0],
    setDetailData = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    comments = _useState4[0],
    setComments = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    newComment = _useState6[0],
    setNewComment = _useState6[1];
  var auth = (0, _auth.getAuth)();
  var user = auth.currentUser;
  if (user !== null) {
    var displayName = user.displayName;
  }
  (0, _react.useEffect)(function () {
    _firebase.default.collection("movies").doc(id).get().then(function (doc) {
      if (doc.exists) {
        setDetailData(doc.data());
      } else {
        console.log("no such document in firebase 🔥");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }, [id]);
  (0, _react.useEffect)(function () {
    var unsubscribe;
    if (id) {
      unsubscribe = _firebase.default.collection("movies").doc(id).collection("comments").orderBy('timestamp', 'desc').onSnapshot(function (snapshot) {
        setComments(snapshot.docs.map(function (doc) {
          return {
            id: doc.id,
            comment: doc.data()
          };
        }));
      });
    }
    return function () {
      unsubscribe();
    };
  }, [id]);
  var postComment = function postComment(event) {
    event.preventDefault();
    _firebase.default.collection("movies").doc(id).collection("comments").add({
      text: newComment,
      username: user.displayName,
      timestamp: _app.default.firestore.FieldValue.serverTimestamp()
    });
    setNewComment('');
  };
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Background, null, /*#__PURE__*/React.createElement("img", {
    alt: detailData.title,
    src: detailData.backgroundImg
  })), /*#__PURE__*/React.createElement(ImageTitle, null, /*#__PURE__*/React.createElement("img", {
    alt: detailData.title,
    src: detailData.titleImg
  })), /*#__PURE__*/React.createElement(ContentMeta, null, /*#__PURE__*/React.createElement(Controls, null, /*#__PURE__*/React.createElement("a", {
    href: detailData.youtube
  }, /*#__PURE__*/React.createElement(Player, null, /*#__PURE__*/React.createElement("img", {
    src: "/images/play-icon-black.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "PLAY")))), /*#__PURE__*/React.createElement(SubTitle, null, detailData.subTitle), /*#__PURE__*/React.createElement(Description, null, detailData.description)), /*#__PURE__*/React.createElement(CommentBox, null, user && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: "post__commentbox"
  }, /*#__PURE__*/React.createElement("input", {
    className: "post__input",
    type: "text",
    placeholder: "Add a comment...",
    value: newComment,
    onChange: function onChange(e) {
      return setNewComment(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "post__button",
    disabled: !newComment,
    type: "submit",
    onClick: postComment
  }, "POST")))), /*#__PURE__*/React.createElement(Commenting, {
    className: "post_comments"
  }, comments.map(function (_ref) {
    var id = _ref.id,
      comment = _ref.comment;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      key: id
    }, /*#__PURE__*/React.createElement("b", null, comment.username), ": \xA0", comment.text));
  })));
};
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   min-height: calc(100vh - 70px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n"])));
var Commenting = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nwidth: 1308px;\nheight: 142px;\nflex-shrink: 0;\nborder-radius: 10px;\nborder: 1px solid #BABABA;\nbackground: #1F1F1F;\ntext-align: start;\npadding: 10px;\n\n\n"])));
var CommentBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nmargin-bottom: 10px;\nmargin-top: 15px;\n\n\n"])));
var Background = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n\n  img {\n    width: 100vw;\n    height: 100vh;\n\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"])));
var ImageTitle = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nalign-items: flex-end;\ndisplay: flex;\n-webkit-box-pack: start;\njustify-content: flex-start;\nmargin: 0px auto;\nheight: 30vw;\nmin-height: 170px;\npadding-bottom: 24px;\nwidth: 100%;\n\nimg {\n  max-width: 600px;\n  min-width: 200px;\n  width: 35vw;\n}\n"])));
var ContentMeta = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  max-width: 874px;\n"])));
var Controls = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"])));
var Player = _styledComponents.default.button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n  width: 200px;\n\n  img {\n    width: 32px;\n  }\n\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n\n    img {\n      width: 25px;\n    }\n  }\n"])));
var SubTitle = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"])));
var Description = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"])));
var _default = Detail;
exports.default = _default;