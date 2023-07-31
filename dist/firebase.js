"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.provider = exports.default = exports.auth = void 0;
var _app = _interopRequireDefault(require("firebase/compat/app"));
require("firebase/compat/firestore");
require("firebase/compat/auth");
require("firebase/compat/storage");
var _auth2 = require("firebase/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var firebaseConfig = {
  apiKey: "AIzaSyBVH-A2mXJ1JEm3iOeN0KXDLGuwX38uAvU",
  authDomain: "disneyplus-clone-1e5ab.firebaseapp.com",
  projectId: "disneyplus-clone-1e5ab",
  storageBucket: "disneyplus-clone-1e5ab.appspot.com",
  messagingSenderId: "1035499228909",
  appId: "1:1035499228909:web:ec0136c67f14ac820446e4",
  measurementId: "G-9FDXBW64LE"
};
var firebaseApp = _app.default.initializeApp(firebaseConfig);
var db = firebaseApp.firestore();
var auth = _app.default.auth();
exports.auth = auth;
var provider = new _app.default.auth.GoogleAuthProvider();
exports.provider = provider;
var storage = _app.default.storage();
exports.storage = storage;
var _default = db;
exports.default = _default;