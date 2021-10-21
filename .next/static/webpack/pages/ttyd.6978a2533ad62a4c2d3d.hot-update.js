"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ttyd",{

/***/ "./pages/ttyd/index.jsx":
/*!******************************!*\
  !*** ./pages/ttyd/index.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/users */ \"./components/users/index.js\");\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services */ \"./services/index.js\");\n/* harmony import */ var services_ksservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/ksservice */ \"./services/ksservice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/root/blue-eyes/pages/ttyd/index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nfunction Index() {\n  _s();\n\n  var _userService$userValu, _userService$userValu2;\n\n  var timer;\n  var server_url = \"http://150.183.249.17:\";\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      connectLink = _useState[0],\n      setLink = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var username = (_userService$userValu = services__WEBPACK_IMPORTED_MODULE_2__.userService.userValue) === null || _userService$userValu === void 0 ? void 0 : _userService$userValu.firstName;\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    setLink(\"\");\n    setStatus(\"-\");\n    var response = services_ksservice__WEBPACK_IMPORTED_MODULE_3__.ksService.podList(username, \"ttyd\"); //console.log(\"get result\")\n\n    response.then(function (result) {\n      if (result == undefined) {\n        console.log(\"null return\");\n        return;\n      }\n\n      var words = result.text.split(' '); //setLink(result.text)\n\n      setStatus(words[0]);\n\n      if (words[0] == \"Running\") {\n        setLink(server_url + words[1]);\n      }\n    });\n  }, []);\n\n  function click_create() {\n    services_ksservice__WEBPACK_IMPORTED_MODULE_3__.ksService.podCreate(username, \"ttyd\");\n    click_connect();\n  }\n\n  function click_connect() {\n    timer = setTimeout(function () {\n      click_connect();\n    }, 5000);\n    var response = services_ksservice__WEBPACK_IMPORTED_MODULE_3__.ksService.podList(username, \"ttyd\"); //console.log(\"get result\")\n\n    response.then(function (result) {\n      if (result == undefined) {\n        console.log(\"null return\");\n        return;\n      }\n\n      console.log(result.text);\n      var words = result.text.split(' ');\n\n      if (words.length == 2 && words[0] == \"Running\") {\n        setStatus(words[0]);\n        setLink(server_url + words[1]);\n        clearTimeout(timer);\n      }\n    });\n  }\n\n  function click_delete() {\n    services_ksservice__WEBPACK_IMPORTED_MODULE_3__.ksService.podDelete(username, \"ttyd\");\n    setLink(\"\");\n    setStatus(\"-\");\n    clearTimeout(timer);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_users__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Web Terminal\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }, this), \"Hi \", (_userService$userValu2 = services__WEBPACK_IMPORTED_MODULE_2__.userService.userValue) === null || _userService$userValu2 === void 0 ? void 0 : _userService$userValu2.firstName, \"!\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n      className: \"table table-striped\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            style: {\n              width: '30%'\n            },\n            children: \"Pod Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            style: {\n              width: '10%'\n            },\n            children: \"Status\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            style: {\n              width: '50%'\n            },\n            children: \"Link\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: \"TTYD\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: status\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n              href: \"\".concat(connectLink),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                target: \"_blank\",\n                children: connectLink\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 60\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            style: {\n              whiteSpace: 'nowrap'\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              onClick: function onClick() {\n                return click_create();\n              },\n              className: \"btn btn-sm btn-success btn-delete-user\",\n              disabled: false,\n              children: \"create\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 29\n            }, this), \"\\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              onClick: function onClick() {\n                return click_delete();\n              },\n              className: \"btn btn-sm btn-danger btn-delete-user\",\n              disabled: false,\n              children: \"Delete\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Index, \"VZaZqO9S93tMPYtOZQEXT3gqilM=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsa0JBSEosZUFJSTtBQUFJLGlCQUFLLEVBQUU7QUFBRTBCLGNBQUFBLFVBQVUsRUFBRTtBQUFkLGFBQVg7QUFBQSxvQ0FDSTtBQUFRLHFCQUFPLEVBQUU7QUFBQSx1QkFBTVQsWUFBWSxFQUFsQjtBQUFBLGVBQWpCO0FBQXVDLHVCQUFTLEVBQUMsd0NBQWpEO0FBQTBGLHNCQUFRLEVBQUUsS0FBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosdUJBRUk7QUFBUSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1NLFlBQVksRUFBbEI7QUFBQSxlQUFqQjtBQUF1Qyx1QkFBUyxFQUFDLHVDQUFqRDtBQUF5RixzQkFBUSxFQUFFLEtBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7O0dBdkZRMUI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R0eWQvaW5kZXguanN4Pzg1MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy91c2Vycyc7XG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzJztcbmltcG9ydCB7IGtzU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL2tzc2VydmljZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0TnByb2dyZXNzIGZyb20gJ25leHRqcy1wcm9ncmVzc2Jhcic7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICAgIGxldCB0aW1lcjtcbiAgICBjb25zdCBzZXJ2ZXJfdXJsID0gXCJodHRwOi8vMTUwLjE4My4yNDkuMTc6XCJcblxuICAgIGNvbnN0IFtjb25uZWN0TGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZXJTZXJ2aWNlLnVzZXJWYWx1ZT8uZmlyc3ROYW1lXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TGluayhcIlwiKVxuICAgICAgICBzZXRTdGF0dXMoXCItXCIpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ga3NTZXJ2aWNlLnBvZExpc3QodXNlcm5hbWUsIFwidHR5ZFwiKVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0IHJlc3VsdFwiKVxuICAgICAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpe1xuICAgICAgICAgICAgaWYocmVzdWx0ID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJudWxsIHJldHVyblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3b3JkcyA9IHJlc3VsdC50ZXh0LnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAvL3NldExpbmsocmVzdWx0LnRleHQpXG4gICAgICAgICAgICBzZXRTdGF0dXMod29yZHNbMF0pO1xuICAgICAgICAgICAgaWYod29yZHNbMF0gPT0gXCJSdW5uaW5nXCIpe1xuICAgICAgICAgICAgICAgIHNldExpbmsoc2VydmVyX3VybCt3b3Jkc1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIGNsaWNrX2NyZWF0ZSgpIHtcbiAgICAgICAga3NTZXJ2aWNlLnBvZENyZWF0ZSh1c2VybmFtZSwgXCJ0dHlkXCIpXG4gICAgICAgIGNsaWNrX2Nvbm5lY3QoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsaWNrX2Nvbm5lY3QoKXtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsaWNrX2Nvbm5lY3QoKTtcbiAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBrc1NlcnZpY2UucG9kTGlzdCh1c2VybmFtZSwgXCJ0dHlkXCIpXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXQgcmVzdWx0XCIpXG4gICAgICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCl7XG4gICAgICAgICAgICBpZihyZXN1bHQgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm51bGwgcmV0dXJuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gcmVzdWx0LnRleHQuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGlmKHdvcmRzLmxlbmd0aCA9PSAyICYmIHdvcmRzWzBdID09IFwiUnVubmluZ1wiKXtcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMod29yZHNbMF0pO1xuICAgICAgICAgICAgICAgIHNldExpbmsoc2VydmVyX3VybCt3b3Jkc1sxXSk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xpY2tfZGVsZXRlKCl7XG4gICAgICAgIGtzU2VydmljZS5wb2REZWxldGUodXNlcm5hbWUsIFwidHR5ZFwiKVxuICAgICAgICBzZXRMaW5rKFwiXCIpXG4gICAgICAgIHNldFN0YXR1cyhcIi1cIilcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgxPldlYiBUZXJtaW5hbDwvaDE+XG4gICAgICAgICAgICBIaSB7dXNlclNlcnZpY2UudXNlclZhbHVlPy5maXJzdE5hbWV9IVxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzMwJScgfX0+UG9kIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAlJyB9fT5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fT5MaW5rPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRUWUQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGF0dXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TGluayBocmVmPXtgJHtjb25uZWN0TGlua31gfSA+PGEgdGFyZ2V0PSdfYmxhbmsnPntjb25uZWN0TGlua308L2E+PC9MaW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGlja19jcmVhdGUoKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2VzcyBidG4tZGVsZXRlLXVzZXJcIiBkaXNhYmxlZD17ZmFsc2V9PmNyZWF0ZTwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2xpY2tfZGVsZXRlKCl9IGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlciBidG4tZGVsZXRlLXVzZXJcIiBkaXNhYmxlZD17ZmFsc2V9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VyU2VydmljZSIsImtzU2VydmljZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlJlYWN0IiwiTmV4dE5wcm9ncmVzcyIsIk5Qcm9ncmVzcyIsIlJvdXRlciIsIkluZGV4IiwidGltZXIiLCJzZXJ2ZXJfdXJsIiwiY29ubmVjdExpbmsiLCJzZXRMaW5rIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlcm5hbWUiLCJ1c2VyVmFsdWUiLCJmaXJzdE5hbWUiLCJyZXNwb25zZSIsInBvZExpc3QiLCJ0aGVuIiwicmVzdWx0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsIndvcmRzIiwidGV4dCIsInNwbGl0IiwiY2xpY2tfY3JlYXRlIiwicG9kQ3JlYXRlIiwiY2xpY2tfY29ubmVjdCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJjbGVhclRpbWVvdXQiLCJjbGlja19kZWxldGUiLCJwb2REZWxldGUiLCJ3aWR0aCIsIndoaXRlU3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ttyd/index.jsx\n");

/***/ })

});