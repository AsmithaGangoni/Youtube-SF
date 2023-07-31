"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserLoginDetails = exports.setSignOutState = exports.selectUserPhoto = exports.selectUserName = exports.selectUserEmail = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  name: "",
  email: "",
  photo: ""
};
var userSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserLoginDetails: function setUserLoginDetails(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: function setSignOutState(state) {
      state.name = null;
      state.email = null;
      state.photo = null;
    }
  }
});
var _userSlice$actions = userSlice.actions,
  setUserLoginDetails = _userSlice$actions.setUserLoginDetails,
  setSignOutState = _userSlice$actions.setSignOutState;
exports.setSignOutState = setSignOutState;
exports.setUserLoginDetails = setUserLoginDetails;
var selectUserName = function selectUserName(state) {
  return state.user.name;
};
exports.selectUserName = selectUserName;
var selectUserEmail = function selectUserEmail(state) {
  return state.user.email;
};
exports.selectUserEmail = selectUserEmail;
var selectUserPhoto = function selectUserPhoto(state) {
  return state.user.photo;
};
exports.selectUserPhoto = selectUserPhoto;
var _default = userSlice.reducer;
exports.default = _default;