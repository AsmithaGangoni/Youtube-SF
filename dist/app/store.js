"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _userSlice = _interopRequireDefault(require("../features/user/userSlice"));
var _movieSlice = _interopRequireDefault(require("../features/movie/movieSlice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (0, _toolkit.configureStore)({
  reducer: {
    user: _userSlice.default,
    movie: _movieSlice.default
  },
  middleware: (0, _toolkit.getDefaultMiddleware)({
    serializableCheck: false
  })
});
exports.default = _default;