/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar.js */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer.js */ \"./components/footer.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_footer_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Ethereum_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Ethereum/factory.js */ \"./Ethereum/factory.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCampaigns = async ()=>{\n            try {\n                const campaigns = await _Ethereum_factory_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.getDeployedCampaigns().call();\n                const itemsList = campaigns.map((address)=>({\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/campaigns/\".concat(address),\n                            children: \"View Campaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, undefined),\n                        fluid: true\n                    }));\n                setItems(itemsList);\n            } catch (error) {\n                console.error(\"Error fetching campaigns:\", error);\n            }\n        };\n        getCampaigns();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Available Campaigns\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"campaigns/new\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            inverted: true,\n                            color: \"green\",\n                            floated: \"right\",\n                            children: \"Create Campaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardGroup, {\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_footer_js__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"E85yb7BhBnl3/OpymRdjFiQJ97s=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNnQjtBQUNwQjtBQUNBO0FBQ0M7QUFDakI7QUFFN0IsTUFBTVUsT0FBTzs7SUFFWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUc7UUFDUixNQUFNVyxlQUFlO1lBQ25CLElBQUk7Z0JBQ0YsTUFBTUMsWUFBWSxNQUFNTixvRUFBZSxDQUFDUSxvQkFBb0IsR0FBR0MsSUFBSTtnQkFDbkUsTUFBTUMsWUFBWUosVUFBVUssR0FBRyxDQUFDLENBQUNDLFVBQWE7d0JBQzFDQyxRQUFRRDt3QkFDUkUsMkJBQ0UsOERBQUNiLGtEQUFJQTs0QkFBQ2MsTUFBTSxjQUFzQixPQUFSSDtzQ0FBVzs7Ozs7O3dCQUl2Q0ksT0FBTztvQkFDWDtnQkFDQVosU0FBU007WUFDWCxFQUFFLE9BQU9PLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1lBQy9DO1FBQ0Y7UUFDQVo7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0EsOERBQUNQLDZEQUFNQTs7Ozs7MEJBQ1AsOERBQUNGLHdEQUFTQTs7a0NBRVIsOERBQUN1QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDbEIsa0RBQUlBO3dCQUFDYyxNQUFLO2tDQUNULDRFQUFDcEIscURBQU1BOzRCQUFDeUIsUUFBUTs0QkFBQ0MsT0FBTTs0QkFBUUMsU0FBUTtzQ0FBUTs7Ozs7Ozs7Ozs7a0NBSWpELDhEQUFDekIsd0RBQVNBO3dCQUFDTSxPQUFPQTs7Ozs7Ozs7Ozs7OzBCQUVwQiw4REFBQ0osOERBQU1BOzs7Ozs7O0FBR1g7R0F6Q01HO0tBQUFBO0FBMkNOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgQ2FyZEdyb3VwIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyLmpzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci5qcyc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL0V0aGVyZXVtL2ZhY3RvcnkuanMnIDtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCAoICgpID0+IHtcclxuICAgICAgY29uc3QgZ2V0Q2FtcGFpZ25zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAgICAgICBjb25zdCBpdGVtc0xpc3QgPSBjYW1wYWlnbnMubWFwKChhZGRyZXNzKSA9PiAoe1xyXG4gICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvJHthZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgQ2FtcGFpZ25cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgc2V0SXRlbXMoaXRlbXNMaXN0KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FtcGFpZ25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBnZXRDYW1wYWlnbnMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPE5hdmJhciAvPlxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgXHJcbiAgICAgIDxoMj5BdmFpbGFibGUgQ2FtcGFpZ25zPC9oMj5cclxuICAgICAgPExpbmsgaHJlZj1cImNhbXBhaWducy9uZXdcIj5cclxuICAgICAgICA8QnV0dG9uIGludmVydGVkIGNvbG9yPSdncmVlbicgZmxvYXRlZD1cInJpZ2h0XCI+XHJcbiAgICAgICAgICBDcmVhdGUgQ2FtcGFpZ25cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8Q2FyZEdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkNhcmRHcm91cCIsIk5hdmJhciIsIkZvb3RlciIsImZhY3RvcnkiLCJMaW5rIiwiSG9tZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJnZXRDYW1wYWlnbnMiLCJjYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiaXRlbXNMaXN0IiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiaHJlZiIsImZsdWlkIiwiZXJyb3IiLCJjb25zb2xlIiwiaDIiLCJpbnZlcnRlZCIsImNvbG9yIiwiZmxvYXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});