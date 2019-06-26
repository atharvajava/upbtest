webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pretty-ms */ "./node_modules/pretty-ms/index.js");
/* harmony import */ var pretty_ms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pretty_ms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/atharva/Documents/UPB/jobtest/pages/index.js";






var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "startTimer",
    value: function startTimer() {
      var _this2 = this;

      this.setState({
        time: this.state.time,
        start: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - this.state.time,
        isOn: true
      });
      this.timer = setInterval(function () {
        return _this2.setState({
          time: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - _this2.state.start
        });
      }, 1);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      this.setState({
        isOn: false
      });
      clearInterval(this.timer);
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      this.setState({
        time: 0
      });
    }
  }, {
    key: "setTime",
    value: function setTime() {
      var currentdate = new Date();
      var hours = currentdate.getUTCHours() + 2;

      if (hours >= 24) {
        hours -= 24;
      }

      if (hours < 0) {
        hours += 12;
      }

      hours = hours + "";

      if (hours.length == 1) {
        hours = "0" + hours;
      }

      var minutes = currentdate.getUTCMinutes();
      minutes = minutes + "";

      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }

      var seconds = currentdate.getUTCSeconds(); //console.log(hours, minutes, seconds)

      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        time: 0,
        start: 0,
        isOn: false
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setTime();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
    }
  }]);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    global__WEBPACK_IMPORTED_MODULE_10___default.a.setInterval(function () {
      this.setTime();
    }.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this)), 1000);
    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "render",
    value: function render() {
      var start = this.state.time == 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.startTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "start") : null;
      var stop = this.state.isOn ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.stopTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "stop") : null;
      var reset = this.state.time != 0 && !this.state.isOn ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.resetTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "reset") : null;
      var resume = this.state.time != 0 && !this.state.isOn ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.startTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "resume") : null;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Timer Project"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Real - Time : "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: {
          "textDecoration": "underline"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.state.hours, ":", this.state.minutes, ":", this.state.seconds)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "timer: ", pretty_ms__WEBPACK_IMPORTED_MODULE_9___default()(this.state.time)), start, resume, stop, reset);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4b28dae5f80b9694a883.hot-update.js.map