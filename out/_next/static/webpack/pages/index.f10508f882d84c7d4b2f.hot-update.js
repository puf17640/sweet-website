webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ \"./data.js\");\n\n\n\nvar _jsxFileName = \"/Users/julian/sweet-website/pages/index.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar MainButton = function MainButton(_ref) {\n  var title = _ref.title,\n      url = _ref.url;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    _hover: {\n      textDecoration: \"none\"\n    },\n    href: url,\n    title: title,\n    fontSize: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    colorScheme: \"gray\",\n    w: \"full\",\n    textTransform: \"uppercase\",\n    letterSpacing: 2,\n    fontFamily: \"Be Vietnam, sans-serif\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, title));\n};\n\n_c = MainButton;\nfunction Home() {\n  var _this2 = this,\n      _jsx;\n\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    alignItems: \"center\",\n    direction: \"column\",\n    bg: \"black\",\n    minH: \"100vh\",\n    h: \"100vh\",\n    w: \"full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    flexGrow: 1,\n    direction: {\n      base: \"column\",\n      lg: \"row\"\n    },\n    justifyContent: \"space-evenly\",\n    alignItems: \"center\",\n    w: \"full\",\n    py: 4,\n    px: {\n      base: 4,\n      md: 32\n    },\n    spacing: {\n      base: 2,\n      lg: 0\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    align: \"center\",\n    maxW: \"sm\",\n    maxH: \"sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    rounded: \"lg\",\n    src: \"/static/profile.png\",\n    objectPosition: \"center\",\n    objectFit: \"cover\",\n    w: \"full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    minW: {\n      base: \"100%\",\n      lg: \"300\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    fontSize: \"6xl\",\n    color: \"whiteAlpha.900\",\n    align: \"center\",\n    fontFamily: \"Alatsi, sans-serif\",\n    letterSpacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, \"SWEET\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    fontSize: \"3xl\",\n    color: \"whiteAlpha.700\",\n    align: \"center\",\n    fontFamily: \"Alegreya Sans SC, sans-serif\",\n    letterSpacing: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, \"Vienna\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    mt: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, _data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (entry) {\n    return __jsx(MainButton, Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      key: entry.title\n    }, entry, {\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 15\n      }\n    }));\n  })))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], (_jsx = {\n    align: \"center\",\n    color: \"whiteAlpha.600\",\n    p: 4,\n    borderBottom: 2\n  }, Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"borderBottom\", \"6px solid\"), Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"borderColor\", \"white\"), Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", this), Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 7\n  }), _jsx), \"Website by\", \" \", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    target: \"_blank\",\n    href: \"https://pufler.dev\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, \"Julian Pufler\")));\n}\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MainButton\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluQnV0dG9uIiwidGl0bGUiLCJ1cmwiLCJ0ZXh0RGVjb3JhdGlvbiIsIkhvbWUiLCJiYXNlIiwibGciLCJtZCIsImRhdGEiLCJtYXAiLCJlbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQSxNQUFqQkMsS0FBaUIsUUFBakJBLEtBQWlCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3JDLFNBQ0UsTUFBQyxxREFBRDtBQUNFLFVBQU0sRUFBRTtBQUFFQyxvQkFBYyxFQUFFO0FBQWxCLEtBRFY7QUFFRSxRQUFJLEVBQUVELEdBRlI7QUFHRSxTQUFLLEVBQUVELEtBSFQ7QUFJRSxZQUFRLEVBQUUsSUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx1REFBRDtBQUNFLGVBQVcsRUFBRSxNQURmO0FBRUUsS0FBQyxFQUFFLE1BRkw7QUFHRSxpQkFBYSxFQUFFLFdBSGpCO0FBSUUsaUJBQWEsRUFBRSxDQUpqQjtBQUtFLGNBQVUsRUFBRSx3QkFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dBLEtBUEgsQ0FORixDQURGO0FBa0JELENBbkJEOztLQUFNRCxVO0FBcUJTLFNBQVNJLElBQVQsR0FBZ0I7QUFBQTtBQUFBOztBQUM3QixTQUNFLE1BQUMsc0RBQUQ7QUFDRSxjQUFVLEVBQUUsUUFEZDtBQUVFLGFBQVMsRUFBRSxRQUZiO0FBR0UsTUFBRSxFQUFFLE9BSE47QUFJRSxRQUFJLEVBQUUsT0FKUjtBQUtFLEtBQUMsRUFBRSxPQUxMO0FBTUUsS0FBQyxFQUFFLE1BTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsc0RBQUQ7QUFDRSxZQUFRLEVBQUUsQ0FEWjtBQUVFLGFBQVMsRUFBRTtBQUFFQyxVQUFJLEVBQUUsUUFBUjtBQUFrQkMsUUFBRSxFQUFFO0FBQXRCLEtBRmI7QUFHRSxrQkFBYyxFQUFFLGNBSGxCO0FBSUUsY0FBVSxFQUFFLFFBSmQ7QUFLRSxLQUFDLEVBQUUsTUFMTDtBQU1FLE1BQUUsRUFBRSxDQU5OO0FBT0UsTUFBRSxFQUFFO0FBQUVELFVBQUksRUFBRSxDQUFSO0FBQVdFLFFBQUUsRUFBRTtBQUFmLEtBUE47QUFRRSxXQUFPLEVBQUU7QUFBRUYsVUFBSSxFQUFFLENBQVI7QUFBV0MsUUFBRSxFQUFFO0FBQWYsS0FSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQyxvREFBRDtBQUFLLFNBQUssRUFBRSxRQUFaO0FBQXNCLFFBQUksRUFBRSxJQUE1QjtBQUFrQyxRQUFJLEVBQUUsSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTyxXQUFPLEVBQUUsSUFBaEI7QUFBc0IsT0FBRyxFQUFFLHFCQUEzQjtBQUFrRCxrQkFBYyxFQUFFLFFBQWxFO0FBQTRFLGFBQVMsRUFBRSxPQUF2RjtBQUFnRyxLQUFDLEVBQUUsTUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsRUFhRSxNQUFDLG9EQUFEO0FBQUssUUFBSSxFQUFFO0FBQUVELFVBQUksRUFBRSxNQUFSO0FBQWdCQyxRQUFFLEVBQUU7QUFBcEIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFlBQVEsRUFBRSxLQURaO0FBRUUsU0FBSyxFQUFFLGdCQUZUO0FBR0UsU0FBSyxFQUFFLFFBSFQ7QUFJRSxjQUFVLEVBQUUsb0JBSmQ7QUFLRSxpQkFBYSxFQUFFLENBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVVFLE1BQUMsd0RBQUQ7QUFDRSxZQUFRLEVBQUUsS0FEWjtBQUVFLFNBQUssRUFBRSxnQkFGVDtBQUdFLFNBQUssRUFBRSxRQUhUO0FBSUUsY0FBVSxFQUFFLDhCQUpkO0FBS0UsaUJBQWEsRUFBRSxDQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUFtQkUsTUFBQyxzREFBRDtBQUFPLE1BQUUsRUFBRSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsNkNBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLEtBQUQ7QUFBQSxXQUNSLE1BQUMsVUFBRDtBQUFZLFNBQUcsRUFBRUEsS0FBSyxDQUFDVDtBQUF2QixPQUFrQ1MsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURRO0FBQUEsR0FBVCxDQURILENBbkJGLENBYkYsQ0FSRixFQStDRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFFLFFBRFQ7QUFFRSxTQUFLLEVBQUUsZ0JBRlQ7QUFHRSxLQUFDLEVBQUUsQ0FITDtBQUlFLGdCQUFZLEVBQUU7QUFKaEIsNkpBS2dCLFdBTGhCLDBKQU1lLE9BTmY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFRYSxHQVJiLEVBU0UsTUFBQyxxREFBRDtBQUFNLFVBQU0sRUFBRSxRQUFkO0FBQXdCLFFBQUksRUFBRSxvQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixDQS9DRixDQURGO0FBK0REO01BaEV1Qk4sSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU3RhY2ssXG4gIEJveCxcbiAgSW1hZ2UsXG4gIEhlYWRpbmcsXG4gIEJ1dHRvbixcbiAgTGluayxcbiAgRGl2aWRlcixcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhXCI7XG5cbmNvbnN0IE1haW5CdXR0b24gPSAoeyB0aXRsZSwgdXJsIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgX2hvdmVyPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgaHJlZj17dXJsfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgZm9udFNpemU9e1wibGdcIn1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yU2NoZW1lPXtcImdyYXlcIn1cbiAgICAgICAgdz17XCJmdWxsXCJ9XG4gICAgICAgIHRleHRUcmFuc2Zvcm09e1widXBwZXJjYXNlXCJ9XG4gICAgICAgIGxldHRlclNwYWNpbmc9ezJ9XG4gICAgICAgIGZvbnRGYW1pbHk9e1wiQmUgVmlldG5hbSwgc2Fucy1zZXJpZlwifVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgIGRpcmVjdGlvbj17XCJjb2x1bW5cIn1cbiAgICAgIGJnPXtcImJsYWNrXCJ9XG4gICAgICBtaW5IPXtcIjEwMHZoXCJ9XG4gICAgICBoPXtcIjEwMHZoXCJ9XG4gICAgICB3PXtcImZ1bGxcIn1cbiAgICA+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBsZzogXCJyb3dcIiB9fVxuICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1ldmVubHlcIn1cbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgdz17XCJmdWxsXCJ9XG4gICAgICAgIHB5PXs0fVxuICAgICAgICBweD17eyBiYXNlOiA0LCBtZDogMzIgfX1cbiAgICAgICAgc3BhY2luZz17eyBiYXNlOiAyLCBsZzogMCB9fVxuICAgICAgPlxuICAgICAgICA8Qm94IGFsaWduPXtcImNlbnRlclwifSBtYXhXPXtcInNtXCJ9IG1heEg9e1wic21cIn0+XG4gICAgICAgICAgPEltYWdlIHJvdW5kZWQ9e1wibGdcIn0gc3JjPXtcIi9zdGF0aWMvcHJvZmlsZS5wbmdcIn0gb2JqZWN0UG9zaXRpb249e1wiY2VudGVyXCJ9IG9iamVjdEZpdD17XCJjb3ZlclwifSB3PXtcImZ1bGxcIn0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggbWluVz17eyBiYXNlOiBcIjEwMCVcIiwgbGc6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgIGZvbnRTaXplPXtcIjZ4bFwifVxuICAgICAgICAgICAgY29sb3I9e1wid2hpdGVBbHBoYS45MDBcIn1cbiAgICAgICAgICAgIGFsaWduPXtcImNlbnRlclwifVxuICAgICAgICAgICAgZm9udEZhbWlseT17XCJBbGF0c2ksIHNhbnMtc2VyaWZcIn1cbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9ezJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU1dFRVRcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgIGZvbnRTaXplPXtcIjN4bFwifVxuICAgICAgICAgICAgY29sb3I9e1wid2hpdGVBbHBoYS43MDBcIn1cbiAgICAgICAgICAgIGFsaWduPXtcImNlbnRlclwifVxuICAgICAgICAgICAgZm9udEZhbWlseT17XCJBbGVncmV5YSBTYW5zIFNDLCBzYW5zLXNlcmlmXCJ9XG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPXsxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZW5uYVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8U3RhY2sgbXQ9ezZ9PlxuICAgICAgICAgICAge2RhdGEubWFwKChlbnRyeSkgPT4gKFxuICAgICAgICAgICAgICA8TWFpbkJ1dHRvbiBrZXk9e2VudHJ5LnRpdGxlfSB7Li4uZW50cnl9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8VGV4dFxuICAgICAgICBhbGlnbj17XCJjZW50ZXJcIn1cbiAgICAgICAgY29sb3I9e1wid2hpdGVBbHBoYS42MDBcIn1cbiAgICAgICAgcD17NH1cbiAgICAgICAgYm9yZGVyQm90dG9tPXsyfVxuICAgICAgICBib3JkZXJCb3R0b209e1wiNnB4IHNvbGlkXCJ9XG4gICAgICAgIGJvcmRlckNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICA+XG4gICAgICAgIFdlYnNpdGUgYnl7XCIgXCJ9XG4gICAgICAgIDxMaW5rIHRhcmdldD17XCJfYmxhbmtcIn0gaHJlZj17XCJodHRwczovL3B1Zmxlci5kZXZcIn0+XG4gICAgICAgICAgSnVsaWFuIFB1ZmxlclxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1RleHQ+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})