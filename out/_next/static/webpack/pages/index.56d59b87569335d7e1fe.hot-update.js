webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ \"./data.js\");\n\n\n\nvar _jsxFileName = \"/Users/julian/sweet-website/pages/index.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar MainButton = function MainButton(_ref) {\n  var title = _ref.title,\n      url = _ref.url;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    _hover: {\n      textDecoration: \"none\"\n    },\n    href: url,\n    title: title,\n    fontSize: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    colorScheme: \"gray\",\n    w: \"full\",\n    textTransform: \"uppercase\",\n    letterSpacing: 2,\n    fontFamily: \"Be Vietnam, sans-serif\",\n    _hover: {\n      bgColor: \"gray.200\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, title));\n};\n\n_c = MainButton;\nfunction Home() {\n  var _this2 = this,\n      _jsx;\n\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    alignItems: \"center\",\n    direction: \"column\",\n    bg: \"black\",\n    minH: \"100vh\",\n    w: \"full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    flexGrow: 1,\n    direction: {\n      base: \"column\",\n      lg: \"row\"\n    },\n    justifyContent: \"space-evenly\",\n    alignItems: \"center\",\n    w: \"full\",\n    py: 4,\n    px: {\n      base: 4,\n      md: 32\n    },\n    spacing: {\n      base: 2,\n      lg: 0\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    align: \"center\",\n    maxW: \"sm\",\n    w: \"full\",\n    minH: {\n      base: \"200px\",\n      md: \"400px\"\n    },\n    flexGrow: 1,\n    bg: \"url(/static/profile.png)\",\n    backgroundPosition: \"center\",\n    backgroundSize: \"cover\",\n    rounded: \"lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    minW: {\n      base: \"100%\",\n      lg: \"300\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    fontSize: \"6xl\",\n    color: \"whiteAlpha.900\",\n    align: \"center\",\n    fontFamily: \"Alatsi, sans-serif\",\n    letterSpacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, \"SWEET\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    fontSize: \"3xl\",\n    color: \"whiteAlpha.700\",\n    align: \"center\",\n    fontFamily: \"Alegreya Sans SC, sans-serif\",\n    letterSpacing: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"Vienna\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    mt: 12,\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, _data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (entry) {\n    return __jsx(MainButton, Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      key: entry.title\n    }, entry, {\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 15\n      }\n    }));\n  })))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], (_jsx = {\n    align: \"center\",\n    color: \"whiteAlpha.600\",\n    borderBottom: 2\n  }, Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"borderBottom\", \"6px solid\"), Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"borderColor\", \"whiteAlpha.600\"), Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"p\", 2), Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", this), Object(_Users_julian_sweet_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 7\n  }), _jsx), \"Website by\", \" \", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    target: \"_blank\",\n    href: \"https://pufler.dev\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, \"Julian Pufler\")));\n}\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MainButton\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluQnV0dG9uIiwidGl0bGUiLCJ1cmwiLCJ0ZXh0RGVjb3JhdGlvbiIsImJnQ29sb3IiLCJIb21lIiwiYmFzZSIsImxnIiwibWQiLCJkYXRhIiwibWFwIiwiZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW9CO0FBQUEsTUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUNyQyxTQUNFLE1BQUMscURBQUQ7QUFDRSxVQUFNLEVBQUU7QUFBRUMsb0JBQWMsRUFBRTtBQUFsQixLQURWO0FBRUUsUUFBSSxFQUFFRCxHQUZSO0FBR0UsU0FBSyxFQUFFRCxLQUhUO0FBSUUsWUFBUSxFQUFFLElBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsdURBQUQ7QUFDRSxlQUFXLEVBQUUsTUFEZjtBQUVFLEtBQUMsRUFBRSxNQUZMO0FBR0UsaUJBQWEsRUFBRSxXQUhqQjtBQUlFLGlCQUFhLEVBQUUsQ0FKakI7QUFLRSxjQUFVLEVBQUUsd0JBTGQ7QUFNRSxVQUFNLEVBQUU7QUFDTkcsYUFBTyxFQUFFO0FBREgsS0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUdILEtBVkgsQ0FORixDQURGO0FBcUJELENBdEJEOztLQUFNRCxVO0FBd0JTLFNBQVNLLElBQVQsR0FBZ0I7QUFBQTtBQUFBOztBQUM3QixTQUNFLE1BQUMsc0RBQUQ7QUFDRSxjQUFVLEVBQUUsUUFEZDtBQUVFLGFBQVMsRUFBRSxRQUZiO0FBR0UsTUFBRSxFQUFFLE9BSE47QUFJRSxRQUFJLEVBQUUsT0FKUjtBQUtFLEtBQUMsRUFBRSxNQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHNEQUFEO0FBQ0UsWUFBUSxFQUFFLENBRFo7QUFFRSxhQUFTLEVBQUU7QUFBRUMsVUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUUsRUFBRTtBQUF0QixLQUZiO0FBR0Usa0JBQWMsRUFBRSxjQUhsQjtBQUlFLGNBQVUsRUFBRSxRQUpkO0FBS0UsS0FBQyxFQUFFLE1BTEw7QUFNRSxNQUFFLEVBQUUsQ0FOTjtBQU9FLE1BQUUsRUFBRTtBQUFFRCxVQUFJLEVBQUUsQ0FBUjtBQUFXRSxRQUFFLEVBQUU7QUFBZixLQVBOO0FBUUUsV0FBTyxFQUFFO0FBQUVGLFVBQUksRUFBRSxDQUFSO0FBQVdDLFFBQUUsRUFBRTtBQUFmLEtBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsb0RBQUQ7QUFDRSxTQUFLLEVBQUUsUUFEVDtBQUVFLFFBQUksRUFBRSxJQUZSO0FBR0UsS0FBQyxFQUFFLE1BSEw7QUFJRSxRQUFJLEVBQUU7QUFBRUQsVUFBSSxFQUFFLE9BQVI7QUFBaUJFLFFBQUUsRUFBRTtBQUFyQixLQUpSO0FBS0UsWUFBUSxFQUFFLENBTFo7QUFNRSxNQUFFLEVBQUUsMEJBTk47QUFPRSxzQkFBa0IsRUFBRSxRQVB0QjtBQVFFLGtCQUFjLEVBQUUsT0FSbEI7QUFTRSxXQUFPLEVBQUUsSUFUWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFxQkUsTUFBQyxvREFBRDtBQUFLLFFBQUksRUFBRTtBQUFFRixVQUFJLEVBQUUsTUFBUjtBQUFnQkMsUUFBRSxFQUFFO0FBQXBCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxZQUFRLEVBQUUsS0FEWjtBQUVFLFNBQUssRUFBRSxnQkFGVDtBQUdFLFNBQUssRUFBRSxRQUhUO0FBSUUsY0FBVSxFQUFFLG9CQUpkO0FBS0UsaUJBQWEsRUFBRSxDQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFVRSxNQUFDLHdEQUFEO0FBQ0UsWUFBUSxFQUFFLEtBRFo7QUFFRSxTQUFLLEVBQUUsZ0JBRlQ7QUFHRSxTQUFLLEVBQUUsUUFIVDtBQUlFLGNBQVUsRUFBRSw4QkFKZDtBQUtFLGlCQUFhLEVBQUUsQ0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLEVBbUJFLE1BQUMsc0RBQUQ7QUFBTyxNQUFFLEVBQUUsRUFBWDtBQUFlLFdBQU8sRUFBRSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLDZDQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxLQUFEO0FBQUEsV0FDUixNQUFDLFVBQUQ7QUFBWSxTQUFHLEVBQUVBLEtBQUssQ0FBQ1Y7QUFBdkIsT0FBa0NVLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEUTtBQUFBLEdBQVQsQ0FESCxDQW5CRixDQXJCRixDQVBGLEVBc0RFLE1BQUMscURBQUQ7QUFDRSxTQUFLLEVBQUUsUUFEVDtBQUVFLFNBQUssRUFBRSxnQkFGVDtBQUdFLGdCQUFZLEVBQUU7QUFIaEIsNkpBSWdCLFdBSmhCLDBKQUtlLGdCQUxmLGdKQU1LLENBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFRYSxHQVJiLEVBU0UsTUFBQyxxREFBRDtBQUFNLFVBQU0sRUFBRSxRQUFkO0FBQXdCLFFBQUksRUFBRSxvQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixDQXRERixDQURGO0FBc0VEO01BdkV1Qk4sSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU3RhY2ssXG4gIEJveCxcbiAgSW1hZ2UsXG4gIEhlYWRpbmcsXG4gIEJ1dHRvbixcbiAgTGluayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhXCI7XG5cbmNvbnN0IE1haW5CdXR0b24gPSAoeyB0aXRsZSwgdXJsIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgX2hvdmVyPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgaHJlZj17dXJsfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgZm9udFNpemU9e1wibGdcIn1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yU2NoZW1lPXtcImdyYXlcIn1cbiAgICAgICAgdz17XCJmdWxsXCJ9XG4gICAgICAgIHRleHRUcmFuc2Zvcm09e1widXBwZXJjYXNlXCJ9XG4gICAgICAgIGxldHRlclNwYWNpbmc9ezJ9XG4gICAgICAgIGZvbnRGYW1pbHk9e1wiQmUgVmlldG5hbSwgc2Fucy1zZXJpZlwifVxuICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICBiZ0NvbG9yOiBcImdyYXkuMjAwXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICBkaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICBiZz17XCJibGFja1wifVxuICAgICAgbWluSD17XCIxMDB2aFwifVxuICAgICAgdz17XCJmdWxsXCJ9XG4gICAgPlxuICAgICAgPFN0YWNrXG4gICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbGc6IFwicm93XCIgfX1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtZXZlbmx5XCJ9XG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgIHc9e1wiZnVsbFwifVxuICAgICAgICBweT17NH1cbiAgICAgICAgcHg9e3sgYmFzZTogNCwgbWQ6IDMyIH19XG4gICAgICAgIHNwYWNpbmc9e3sgYmFzZTogMiwgbGc6IDAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGFsaWduPXtcImNlbnRlclwifVxuICAgICAgICAgIG1heFc9e1wic21cIn1cbiAgICAgICAgICB3PXtcImZ1bGxcIn1cbiAgICAgICAgICBtaW5IPXt7IGJhc2U6IFwiMjAwcHhcIiwgbWQ6IFwiNDAwcHhcIiB9fVxuICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgIGJnPXtcInVybCgvc3RhdGljL3Byb2ZpbGUucG5nKVwifVxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbj17XCJjZW50ZXJcIn1cbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZT17XCJjb3ZlclwifVxuICAgICAgICAgIHJvdW5kZWQ9e1wibGdcIn1cbiAgICAgICAgPjwvQm94PlxuICAgICAgICA8Qm94IG1pblc9e3sgYmFzZTogXCIxMDAlXCIsIGxnOiBcIjMwMFwiIH19PlxuICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICBmb250U2l6ZT17XCI2eGxcIn1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlQWxwaGEuOTAwXCJ9XG4gICAgICAgICAgICBhbGlnbj17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiQWxhdHNpLCBzYW5zLXNlcmlmXCJ9XG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPXsyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNXRUVUXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICBmb250U2l6ZT17XCIzeGxcIn1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlQWxwaGEuNzAwXCJ9XG4gICAgICAgICAgICBhbGlnbj17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiQWxlZ3JleWEgU2FucyBTQywgc2Fucy1zZXJpZlwifVxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZz17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWVubmFcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFN0YWNrIG10PXsxMn0gc3BhY2luZz17Mn0+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgIDxNYWluQnV0dG9uIGtleT17ZW50cnkudGl0bGV9IHsuLi5lbnRyeX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxUZXh0XG4gICAgICAgIGFsaWduPXtcImNlbnRlclwifVxuICAgICAgICBjb2xvcj17XCJ3aGl0ZUFscGhhLjYwMFwifVxuICAgICAgICBib3JkZXJCb3R0b209ezJ9XG4gICAgICAgIGJvcmRlckJvdHRvbT17XCI2cHggc29saWRcIn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e1wid2hpdGVBbHBoYS42MDBcIn1cbiAgICAgICAgcD17Mn1cbiAgICAgID5cbiAgICAgICAgV2Vic2l0ZSBieXtcIiBcIn1cbiAgICAgICAgPExpbmsgdGFyZ2V0PXtcIl9ibGFua1wifSBocmVmPXtcImh0dHBzOi8vcHVmbGVyLmRldlwifT5cbiAgICAgICAgICBKdWxpYW4gUHVmbGVyXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVGV4dD5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})