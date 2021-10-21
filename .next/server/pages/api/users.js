"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "./helpers/api/api-handler.js":
/*!************************************!*\
  !*** ./helpers/api/api-handler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHandler\": () => (/* binding */ apiHandler)\n/* harmony export */ });\n/* harmony import */ var helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/api */ \"./helpers/api/index.js\");\n\n\n\nfunction apiHandler(handler) {\n  return async (req, res) => {\n    const method = req.method.toLowerCase(); // check handler supports HTTP method\n\n    if (!handler[method]) return res.status(405).end(`Method ${req.method} Not Allowed`);\n\n    try {\n      // global middleware\n      await (0,helpers_api__WEBPACK_IMPORTED_MODULE_0__.jwtMiddleware)(req, res); // route handler\n\n      await handler[method](req, res);\n    } catch (err) {\n      // global error handler\n      (0,helpers_api__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(err, res);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS9hcGktaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0UsVUFBVCxDQUFvQkMsT0FBcEIsRUFBNkI7QUFDekIsU0FBTyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDdkIsVUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNFLE1BQUosQ0FBV0MsV0FBWCxFQUFmLENBRHVCLENBR3ZCOztBQUNBLFFBQUksQ0FBQ0osT0FBTyxDQUFDRyxNQUFELENBQVosRUFDSSxPQUFPRCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFxQixVQUFTTCxHQUFHLENBQUNFLE1BQU8sY0FBekMsQ0FBUDs7QUFFSixRQUFJO0FBQ0E7QUFDQSxZQUFNTCwwREFBYSxDQUFDRyxHQUFELEVBQU1DLEdBQU4sQ0FBbkIsQ0FGQSxDQUlBOztBQUNBLFlBQU1GLE9BQU8sQ0FBQ0csTUFBRCxDQUFQLENBQWdCRixHQUFoQixFQUFxQkMsR0FBckIsQ0FBTjtBQUNILEtBTkQsQ0FNRSxPQUFPSyxHQUFQLEVBQVk7QUFDVjtBQUNBVixNQUFBQSx5REFBWSxDQUFDVSxHQUFELEVBQU1MLEdBQU4sQ0FBWjtBQUNIO0FBQ0osR0FqQkQ7QUFrQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLXJlZ2lzdHJhdGlvbi1sb2dpbi1leGFtcGxlLy4vaGVscGVycy9hcGkvYXBpLWhhbmRsZXIuanM/NzU0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlcnJvckhhbmRsZXIsIGp3dE1pZGRsZXdhcmUgfSBmcm9tICdoZWxwZXJzL2FwaSc7XG5cbmV4cG9ydCB7IGFwaUhhbmRsZXIgfTtcblxuZnVuY3Rpb24gYXBpSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaGFuZGxlciBzdXBwb3J0cyBIVFRQIG1ldGhvZFxuICAgICAgICBpZiAoIWhhbmRsZXJbbWV0aG9kXSlcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBnbG9iYWwgbWlkZGxld2FyZVxuICAgICAgICAgICAgYXdhaXQgand0TWlkZGxld2FyZShyZXEsIHJlcyk7XG5cbiAgICAgICAgICAgIC8vIHJvdXRlIGhhbmRsZXJcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXJbbWV0aG9kXShyZXEsIHJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZ2xvYmFsIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihlcnIsIHJlcyk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbImVycm9ySGFuZGxlciIsImp3dE1pZGRsZXdhcmUiLCJhcGlIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvTG93ZXJDYXNlIiwic3RhdHVzIiwiZW5kIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/api/api-handler.js\n");

/***/ }),

/***/ "./helpers/api/error-handler.js":
/*!**************************************!*\
  !*** ./helpers/api/error-handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorHandler\": () => (/* binding */ errorHandler)\n/* harmony export */ });\n\n\nfunction errorHandler(err, res) {\n  if (typeof err === 'string') {\n    // custom application error\n    const is404 = err.toLowerCase().endsWith('not found');\n    const statusCode = is404 ? 404 : 400;\n    return res.status(statusCode).json({\n      message: err\n    });\n  }\n\n  if (err.name === 'UnauthorizedError') {\n    // jwt authentication error\n    return res.status(401).json({\n      message: 'Invalid Token'\n    });\n  } // default to 500 server error\n\n\n  console.error(err);\n  return res.status(500).json({\n    message: err.message\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS9lcnJvci1oYW5kbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDNUIsTUFBSSxPQUFRRCxHQUFSLEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCO0FBQ0EsVUFBTUUsS0FBSyxHQUFHRixHQUFHLENBQUNHLFdBQUosR0FBa0JDLFFBQWxCLENBQTJCLFdBQTNCLENBQWQ7QUFDQSxVQUFNQyxVQUFVLEdBQUdILEtBQUssR0FBRyxHQUFILEdBQVMsR0FBakM7QUFDQSxXQUFPRCxHQUFHLENBQUNLLE1BQUosQ0FBV0QsVUFBWCxFQUF1QkUsSUFBdkIsQ0FBNEI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFUjtBQUFYLEtBQTVCLENBQVA7QUFDSDs7QUFFRCxNQUFJQSxHQUFHLENBQUNTLElBQUosS0FBYSxtQkFBakIsRUFBc0M7QUFDbEM7QUFDQSxXQUFPUixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0gsR0FYMkIsQ0FhNUI7OztBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY1gsR0FBZDtBQUNBLFNBQU9DLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLElBQUFBLE9BQU8sRUFBRVIsR0FBRyxDQUFDUTtBQUFmLEdBQXJCLENBQVA7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtcmVnaXN0cmF0aW9uLWxvZ2luLWV4YW1wbGUvLi9oZWxwZXJzL2FwaS9lcnJvci1oYW5kbGVyLmpzPzFlMzQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZXJyb3JIYW5kbGVyIH07XG5cbmZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnIsIHJlcykge1xuICAgIGlmICh0eXBlb2YgKGVycikgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGN1c3RvbSBhcHBsaWNhdGlvbiBlcnJvclxuICAgICAgICBjb25zdCBpczQwNCA9IGVyci50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCdub3QgZm91bmQnKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGlzNDA0ID8gNDA0IDogNDAwO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhzdGF0dXNDb2RlKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICAgIH1cblxuICAgIGlmIChlcnIubmFtZSA9PT0gJ1VuYXV0aG9yaXplZEVycm9yJykge1xuICAgICAgICAvLyBqd3QgYXV0aGVudGljYXRpb24gZXJyb3JcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgVG9rZW4nIH0pO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgdG8gNTAwIHNlcnZlciBlcnJvclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbn0iXSwibmFtZXMiOlsiZXJyb3JIYW5kbGVyIiwiZXJyIiwicmVzIiwiaXM0MDQiLCJ0b0xvd2VyQ2FzZSIsImVuZHNXaXRoIiwic3RhdHVzQ29kZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibmFtZSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/api/error-handler.js\n");

/***/ }),

/***/ "./helpers/api/index.js":
/*!******************************!*\
  !*** ./helpers/api/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-handler */ \"./helpers/api/api-handler.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _api_handler__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _api_handler__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ \"./helpers/api/error-handler.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _error_handler__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _error_handler__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-middleware */ \"./helpers/api/jwt-middleware.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _jwt_middleware__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./omit */ \"./helpers/api/omit.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _omit__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _omit__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _users_repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-repo */ \"./helpers/api/users-repo.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _users_repo__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _users_repo__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtcmVnaXN0cmF0aW9uLWxvZ2luLWV4YW1wbGUvLi9oZWxwZXJzL2FwaS9pbmRleC5qcz81OTU0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYXBpLWhhbmRsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci1oYW5kbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vand0LW1pZGRsZXdhcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vbWl0JztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcnMtcmVwbyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/api/index.js\n");

/***/ }),

/***/ "./helpers/api/jwt-middleware.js":
/*!***************************************!*\
  !*** ./helpers/api/jwt-middleware.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jwtMiddleware\": () => (/* binding */ jwtMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\nconst expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nconst util = __webpack_require__(/*! util */ \"util\");\n\n\nconst {\n  serverRuntimeConfig\n} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\n\n\nfunction jwtMiddleware(req, res) {\n  const middleware = expressJwt({\n    secret: serverRuntimeConfig.secret,\n    algorithms: ['HS256']\n  }).unless({\n    path: [// public routes that don't require authentication\n    '/api/users/register', '/api/users/authenticate']\n  });\n  return util.promisify(middleware)(req, res);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS9qd3QtbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBO0FBRUEsTUFBTTtBQUFFRyxFQUFBQTtBQUFGLElBQTBCRCxrREFBUyxFQUF6QztBQUVBOztBQUVBLFNBQVNFLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM3QixRQUFNQyxVQUFVLEdBQUdSLFVBQVUsQ0FBQztBQUFFUyxJQUFBQSxNQUFNLEVBQUVMLG1CQUFtQixDQUFDSyxNQUE5QjtBQUFzQ0MsSUFBQUEsVUFBVSxFQUFFLENBQUMsT0FBRDtBQUFsRCxHQUFELENBQVYsQ0FBMEVDLE1BQTFFLENBQWlGO0FBQ2hHQyxJQUFBQSxJQUFJLEVBQUUsQ0FDRjtBQUNBLHlCQUZFLEVBR0YseUJBSEU7QUFEMEYsR0FBakYsQ0FBbkI7QUFRQSxTQUFPVixJQUFJLENBQUNXLFNBQUwsQ0FBZUwsVUFBZixFQUEyQkYsR0FBM0IsRUFBZ0NDLEdBQWhDLENBQVA7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtcmVnaXN0cmF0aW9uLWxvZ2luLWV4YW1wbGUvLi9oZWxwZXJzL2FwaS9qd3QtbWlkZGxld2FyZS5qcz83NWM4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3NKd3QgPSByZXF1aXJlKCdleHByZXNzLWp3dCcpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5jb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuXG5leHBvcnQgeyBqd3RNaWRkbGV3YXJlIH07XG5cbmZ1bmN0aW9uIGp3dE1pZGRsZXdhcmUocmVxLCByZXMpIHtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gZXhwcmVzc0p3dCh7IHNlY3JldDogc2VydmVyUnVudGltZUNvbmZpZy5zZWNyZXQsIGFsZ29yaXRobXM6IFsnSFMyNTYnXSB9KS51bmxlc3Moe1xuICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAvLyBwdWJsaWMgcm91dGVzIHRoYXQgZG9uJ3QgcmVxdWlyZSBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgJy9hcGkvdXNlcnMvcmVnaXN0ZXInLFxuICAgICAgICAgICAgJy9hcGkvdXNlcnMvYXV0aGVudGljYXRlJ1xuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXRpbC5wcm9taXNpZnkobWlkZGxld2FyZSkocmVxLCByZXMpO1xufSJdLCJuYW1lcyI6WyJleHByZXNzSnd0IiwicmVxdWlyZSIsInV0aWwiLCJnZXRDb25maWciLCJzZXJ2ZXJSdW50aW1lQ29uZmlnIiwiand0TWlkZGxld2FyZSIsInJlcSIsInJlcyIsIm1pZGRsZXdhcmUiLCJzZWNyZXQiLCJhbGdvcml0aG1zIiwidW5sZXNzIiwicGF0aCIsInByb21pc2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/api/jwt-middleware.js\n");

/***/ }),

/***/ "./helpers/api/omit.js":
/*!*****************************!*\
  !*** ./helpers/api/omit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"omit\": () => (/* binding */ omit)\n/* harmony export */ });\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\nfunction omit(obj, key) {\n  const {\n    [key]: omitted\n  } = obj,\n        rest = _objectWithoutProperties(obj, [key].map(_toPropertyKey));\n\n  return rest;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS9vbWl0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsR0FBbkIsRUFBd0I7QUFDcEIsUUFBTTtBQUFFLEtBQUNBLEdBQUQsR0FBT0M7QUFBVCxNQUE4QkYsR0FBcEM7QUFBQSxRQUEyQkcsSUFBM0IsNEJBQW9DSCxHQUFwQyxHQUFTQyxHQUFUOztBQUNBLFNBQU9FLElBQVA7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtcmVnaXN0cmF0aW9uLWxvZ2luLWV4YW1wbGUvLi9oZWxwZXJzL2FwaS9vbWl0LmpzPzQwZGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgb21pdCB9O1xuXG5mdW5jdGlvbiBvbWl0KG9iaiwga2V5KSB7XG4gICAgY29uc3QgeyBba2V5XTogb21pdHRlZCwgLi4ucmVzdCB9ID0gb2JqO1xuICAgIHJldHVybiByZXN0O1xufSJdLCJuYW1lcyI6WyJvbWl0Iiwib2JqIiwia2V5Iiwib21pdHRlZCIsInJlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/api/omit.js\n");

/***/ }),

/***/ "./helpers/api/users-repo.js":
/*!***********************************!*\
  !*** ./helpers/api/users-repo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersRepo\": () => (/* binding */ usersRepo)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\"); // users in JSON file for simplicity, store in a db for production applications\n\n\nlet users = __webpack_require__(/*! data/users.json */ \"./data/users.json\");\n\nconst usersRepo = {\n  getAll: () => users,\n  getById: id => users.find(x => x.id.toString() === id.toString()),\n  find: x => users.find(x),\n  create,\n  update,\n  delete: _delete\n};\n\nfunction create(user) {\n  // generate new user id\n  user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1; // set date created and updated\n\n  user.dateCreated = new Date().toISOString();\n  user.dateUpdated = new Date().toISOString(); // add and save user\n\n  users.push(user);\n  saveData();\n}\n\nfunction update(id, params) {\n  const user = users.find(x => x.id.toString() === id.toString()); // set date updated\n\n  user.dateUpdated = new Date().toISOString(); // update and save\n\n  Object.assign(user, params);\n  saveData();\n} // prefixed with underscore '_' because 'delete' is a reserved word in javascript\n\n\nfunction _delete(id) {\n  // filter out deleted user and save\n  users = users.filter(x => x.id.toString() !== id.toString());\n  saveData();\n} // private helper functions\n\n\nfunction saveData() {\n  fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS91c2Vycy1yZXBvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBRCxDQUFsQixFQUVBOzs7QUFDQSxJQUFJQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsMENBQUQsQ0FBbkI7O0FBRU8sTUFBTUUsU0FBUyxHQUFHO0FBQ3JCQyxFQUFBQSxNQUFNLEVBQUUsTUFBTUYsS0FETztBQUVyQkcsRUFBQUEsT0FBTyxFQUFFQyxFQUFFLElBQUlKLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0YsRUFBRixDQUFLRyxRQUFMLE9BQW9CSCxFQUFFLENBQUNHLFFBQUgsRUFBcEMsQ0FGTTtBQUdyQkYsRUFBQUEsSUFBSSxFQUFFQyxDQUFDLElBQUlOLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxDQUFYLENBSFU7QUFJckJFLEVBQUFBLE1BSnFCO0FBS3JCQyxFQUFBQSxNQUxxQjtBQU1yQkMsRUFBQUEsTUFBTSxFQUFFQztBQU5hLENBQWxCOztBQVNQLFNBQVNILE1BQVQsQ0FBZ0JJLElBQWhCLEVBQXNCO0FBQ2xCO0FBQ0FBLEVBQUFBLElBQUksQ0FBQ1IsRUFBTCxHQUFVSixLQUFLLENBQUNhLE1BQU4sR0FBZUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR2YsS0FBSyxDQUFDZ0IsR0FBTixDQUFVVixDQUFDLElBQUlBLENBQUMsQ0FBQ0YsRUFBakIsQ0FBWixJQUFvQyxDQUFuRCxHQUF1RCxDQUFqRSxDQUZrQixDQUlsQjs7QUFDQVEsRUFBQUEsSUFBSSxDQUFDSyxXQUFMLEdBQW1CLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFuQjtBQUNBUCxFQUFBQSxJQUFJLENBQUNRLFdBQUwsR0FBbUIsSUFBSUYsSUFBSixHQUFXQyxXQUFYLEVBQW5CLENBTmtCLENBUWxCOztBQUNBbkIsRUFBQUEsS0FBSyxDQUFDcUIsSUFBTixDQUFXVCxJQUFYO0FBQ0FVLEVBQUFBLFFBQVE7QUFDWDs7QUFFRCxTQUFTYixNQUFULENBQWdCTCxFQUFoQixFQUFvQm1CLE1BQXBCLEVBQTRCO0FBQ3hCLFFBQU1YLElBQUksR0FBR1osS0FBSyxDQUFDSyxJQUFOLENBQVdDLENBQUMsSUFBSUEsQ0FBQyxDQUFDRixFQUFGLENBQUtHLFFBQUwsT0FBb0JILEVBQUUsQ0FBQ0csUUFBSCxFQUFwQyxDQUFiLENBRHdCLENBR3hCOztBQUNBSyxFQUFBQSxJQUFJLENBQUNRLFdBQUwsR0FBbUIsSUFBSUYsSUFBSixHQUFXQyxXQUFYLEVBQW5CLENBSndCLENBTXhCOztBQUNBSyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2IsSUFBZCxFQUFvQlcsTUFBcEI7QUFDQUQsRUFBQUEsUUFBUTtBQUNYLEVBRUQ7OztBQUNBLFNBQVNYLE9BQVQsQ0FBaUJQLEVBQWpCLEVBQXFCO0FBQ2pCO0FBQ0FKLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDMEIsTUFBTixDQUFhcEIsQ0FBQyxJQUFJQSxDQUFDLENBQUNGLEVBQUYsQ0FBS0csUUFBTCxPQUFvQkgsRUFBRSxDQUFDRyxRQUFILEVBQXRDLENBQVI7QUFDQWUsRUFBQUEsUUFBUTtBQUVYLEVBRUQ7OztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEJ4QixFQUFBQSxFQUFFLENBQUM2QixhQUFILENBQWlCLGlCQUFqQixFQUFvQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWU3QixLQUFmLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBQXBDO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLXJlZ2lzdHJhdGlvbi1sb2dpbi1leGFtcGxlLy4vaGVscGVycy9hcGkvdXNlcnMtcmVwby5qcz8xNWFiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuLy8gdXNlcnMgaW4gSlNPTiBmaWxlIGZvciBzaW1wbGljaXR5LCBzdG9yZSBpbiBhIGRiIGZvciBwcm9kdWN0aW9uIGFwcGxpY2F0aW9uc1xubGV0IHVzZXJzID0gcmVxdWlyZSgnZGF0YS91c2Vycy5qc29uJyk7XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlcG8gPSB7XG4gICAgZ2V0QWxsOiAoKSA9PiB1c2VycyxcbiAgICBnZXRCeUlkOiBpZCA9PiB1c2Vycy5maW5kKHggPT4geC5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpKSxcbiAgICBmaW5kOiB4ID0+IHVzZXJzLmZpbmQoeCksXG4gICAgY3JlYXRlLFxuICAgIHVwZGF0ZSxcbiAgICBkZWxldGU6IF9kZWxldGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZSh1c2VyKSB7XG4gICAgLy8gZ2VuZXJhdGUgbmV3IHVzZXIgaWRcbiAgICB1c2VyLmlkID0gdXNlcnMubGVuZ3RoID8gTWF0aC5tYXgoLi4udXNlcnMubWFwKHggPT4geC5pZCkpICsgMSA6IDE7XG5cbiAgICAvLyBzZXQgZGF0ZSBjcmVhdGVkIGFuZCB1cGRhdGVkXG4gICAgdXNlci5kYXRlQ3JlYXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICB1c2VyLmRhdGVVcGRhdGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgLy8gYWRkIGFuZCBzYXZlIHVzZXJcbiAgICB1c2Vycy5wdXNoKHVzZXIpO1xuICAgIHNhdmVEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShpZCwgcGFyYW1zKSB7XG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoeCA9PiB4LmlkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCkpO1xuXG4gICAgLy8gc2V0IGRhdGUgdXBkYXRlZFxuICAgIHVzZXIuZGF0ZVVwZGF0ZWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAvLyB1cGRhdGUgYW5kIHNhdmVcbiAgICBPYmplY3QuYXNzaWduKHVzZXIsIHBhcmFtcyk7XG4gICAgc2F2ZURhdGEoKTtcbn1cblxuLy8gcHJlZml4ZWQgd2l0aCB1bmRlcnNjb3JlICdfJyBiZWNhdXNlICdkZWxldGUnIGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBqYXZhc2NyaXB0XG5mdW5jdGlvbiBfZGVsZXRlKGlkKSB7XG4gICAgLy8gZmlsdGVyIG91dCBkZWxldGVkIHVzZXIgYW5kIHNhdmVcbiAgICB1c2VycyA9IHVzZXJzLmZpbHRlcih4ID0+IHguaWQudG9TdHJpbmcoKSAhPT0gaWQudG9TdHJpbmcoKSk7XG4gICAgc2F2ZURhdGEoKTtcbiAgICBcbn1cblxuLy8gcHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICAgIGZzLndyaXRlRmlsZVN5bmMoJ2RhdGEvdXNlcnMuanNvbicsIEpTT04uc3RyaW5naWZ5KHVzZXJzLCBudWxsLCA0KSk7XG59Il0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsInVzZXJzIiwidXNlcnNSZXBvIiwiZ2V0QWxsIiwiZ2V0QnlJZCIsImlkIiwiZmluZCIsIngiLCJ0b1N0cmluZyIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSIsIl9kZWxldGUiLCJ1c2VyIiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsIm1hcCIsImRhdGVDcmVhdGVkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZGF0ZVVwZGF0ZWQiLCJwdXNoIiwic2F2ZURhdGEiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaWx0ZXIiLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/api/users-repo.js\n");

/***/ }),

/***/ "./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/api */ \"./helpers/api/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,helpers_api__WEBPACK_IMPORTED_MODULE_0__.apiHandler)({\n  get: getUsers\n}));\n\nfunction getUsers(req, res) {\n  // return users without hashed passwords in the response\n  const response = helpers_api__WEBPACK_IMPORTED_MODULE_0__.usersRepo.getAll().map(x => (0,helpers_api__WEBPACK_IMPORTED_MODULE_0__.omit)(x, 'hash'));\n  return res.status(200).json(response);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLGlFQUFlQSx1REFBVSxDQUFDO0FBQ3RCRyxFQUFBQSxHQUFHLEVBQUVDO0FBRGlCLENBQUQsQ0FBekI7O0FBSUEsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3hCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHTix5REFBQSxHQUFtQlEsR0FBbkIsQ0FBdUJDLENBQUMsSUFBSVIsaURBQUksQ0FBQ1EsQ0FBRCxFQUFJLE1BQUosQ0FBaEMsQ0FBakI7QUFDQSxTQUFPSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsUUFBckIsQ0FBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy1yZWdpc3RyYXRpb24tbG9naW4tZXhhbXBsZS8uL3BhZ2VzL2FwaS91c2Vycy9pbmRleC5qcz9jNWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaUhhbmRsZXIsIHVzZXJzUmVwbywgb21pdCB9IGZyb20gJ2hlbHBlcnMvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgYXBpSGFuZGxlcih7XG4gICAgZ2V0OiBnZXRVc2Vyc1xufSk7XG5cbmZ1bmN0aW9uIGdldFVzZXJzKHJlcSwgcmVzKSB7XG4gICAgLy8gcmV0dXJuIHVzZXJzIHdpdGhvdXQgaGFzaGVkIHBhc3N3b3JkcyBpbiB0aGUgcmVzcG9uc2VcbiAgICBjb25zdCByZXNwb25zZSA9IHVzZXJzUmVwby5nZXRBbGwoKS5tYXAoeCA9PiBvbWl0KHgsICdoYXNoJykpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG59XG4iXSwibmFtZXMiOlsiYXBpSGFuZGxlciIsInVzZXJzUmVwbyIsIm9taXQiLCJnZXQiLCJnZXRVc2VycyIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwiZ2V0QWxsIiwibWFwIiwieCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/users/index.js\n");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "./data/users.json":
/*!*************************!*\
  !*** ./data/users.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"firstName":"jwpark","lastName":"jwpark","username":"jwpark","hash":"$2a$10$xBaX/dVaQhRQTTfvQzMHlumXVUkJHew1Yx/O3hhsx9nN0ORG69dwu","id":1,"dateCreated":"2021-10-15T07:16:37.695Z","dateUpdated":"2021-10-15T07:16:37.695Z"},{"firstName":"kikiyaa","lastName":"kikiyaa","username":"kikiyaa","hash":"$2a$10$CrxCa/flVcoKI.dgZexs/Oppxzdu9aWX7mGfsVcUkdjeBkU7qBfjK","id":2,"dateCreated":"2021-10-15T08:30:43.784Z","dateUpdated":"2021-10-15T08:30:43.784Z"},{"firstName":"infraa01","lastName":"infraa01","username":"infraa01","hash":"$2a$10$PU9VmGyzh0.WqLc/CuEEduvI/RmrxEg/D.sWZu.mKFdImQgeMW7Ja","id":3,"dateCreated":"2021-10-21T02:18:22.640Z","dateUpdated":"2021-10-21T02:18:22.640Z"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();