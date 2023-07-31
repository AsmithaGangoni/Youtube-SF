"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMovies = exports.selectTrending = exports.selectOriginal = exports.selectNewDisney = exports.selectHorror = exports.selectAward = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  award: null,
  hindi: null,
  thriller: null,
  telugu: null,
  horror: null
};
var movieSlice = (0, _toolkit.createSlice)({
  name: "movie",
  initialState: initialState,
  reducers: {
    setMovies: function setMovies(state, action) {
      state.award = action.payload.award;
      state.hindi = action.payload.hindi;
      state.thriller = action.payload.thriller;
      state.telugu = action.payload.telugu;
      state.horror = action.payload.horror;
    }
  }
});
var setMovies = movieSlice.actions.setMovies;
exports.setMovies = setMovies;
var selectAward = function selectAward(state) {
  return state.movie.award;
};
exports.selectAward = selectAward;
var selectNewDisney = function selectNewDisney(state) {
  return state.movie.hindi;
};
exports.selectNewDisney = selectNewDisney;
var selectOriginal = function selectOriginal(state) {
  return state.movie.thriller;
};
exports.selectOriginal = selectOriginal;
var selectTrending = function selectTrending(state) {
  return state.movie.telugu;
};
exports.selectTrending = selectTrending;
var selectHorror = function selectHorror(state) {
  return state.movie.horror;
};
exports.selectHorror = selectHorror;
var _default = movieSlice.reducer;
exports.default = _default;