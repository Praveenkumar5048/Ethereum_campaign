"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar.js */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer.js */ \"./components/footer.js\");\n/* harmony import */ var _Ethereum_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Ethereum/factory.js */ \"./Ethereum/factory.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCampaigns = async ()=>{\n            try {\n                const campaigns = await _Ethereum_factory_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.getDeployedCampaigns().call();\n                const itemsList = campaigns.map((address)=>({\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/campaigns/\".concat(address),\n                            children: \"View Campaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, undefined),\n                        fluid: true\n                    }));\n                setItems(itemsList);\n            } catch (error) {\n                console.error(\"Error fetching campaigns:\", error);\n            }\n        };\n        getCampaigns();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                children: [\n                    !loader,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Loader, {\n                        active: true,\n                        inline: \"centered\",\n                        content: \"Loading\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Available Campaigns\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"campaigns/new\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            inverted: true,\n                            color: \"green\",\n                            floated: \"right\",\n                            children: \"Create Campaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardGroup, {\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Ethereum\\\\vision_vault\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"dhIRiBOk40u7AqVaU6AYX/Qrrg8=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQytDO0FBQ25EO0FBQ0E7QUFDQztBQUNqQjtBQUU3QixNQUFNYyxPQUFPOztJQUVYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2dCLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXJDQyxnREFBU0EsQ0FBRztRQUNSLE1BQU1pQixlQUFlO1lBQ25CLElBQUk7Z0JBQ0YsTUFBTUMsWUFBWSxNQUFNUixvRUFBZSxDQUFDVSxvQkFBb0IsR0FBR0MsSUFBSTtnQkFDbkUsTUFBTUMsWUFBWUosVUFBVUssR0FBRyxDQUFDLENBQUNDLFVBQWE7d0JBQzFDQyxRQUFRRDt3QkFDUkUsMkJBQ0UsOERBQUNmLGtEQUFJQTs0QkFBQ2dCLE1BQU0sY0FBc0IsT0FBUkg7c0NBQVc7Ozs7Ozt3QkFJdkNJLE9BQU87b0JBQ1g7Z0JBQ0FkLFNBQVNRO1lBQ1gsRUFBRSxPQUFPTyxPQUFPO2dCQUNaQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtZQUMvQztRQUNGO1FBQ0FaO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNBLDhEQUFDVCw2REFBTUE7Ozs7OzBCQUNQLDhEQUFDRix3REFBU0E7O29CQUVQLENBQUNTO2tDQUNGLDhEQUFDYixxREFBTUE7d0JBQUM2QixNQUFNO3dCQUFDQyxRQUFPO3dCQUFVQyxTQUFROzs7Ozs7a0NBR3hDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDdkIsa0RBQUlBO3dCQUFDZ0IsTUFBSztrQ0FDVCw0RUFBQ3ZCLHFEQUFNQTs0QkFBQytCLFFBQVE7NEJBQUNDLE9BQU07NEJBQVFDLFNBQVE7c0NBQVE7Ozs7Ozs7Ozs7O2tDQUlqRCw4REFBQzlCLHdEQUFTQTt3QkFBQ00sT0FBT0E7Ozs7Ozs7Ozs7OzswQkFHcEIsOERBQUNKLDZEQUFNQTs7Ozs7OztBQUdYO0dBL0NNRztLQUFBQTtBQWlETixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtTZWdtZW50LCBMb2FkZXIsIERpbW1lciwgQnV0dG9uLCBJbWFnZSwgQ29udGFpbmVyLCBDYXJkR3JvdXAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyLmpzJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vRXRoZXJldW0vZmFjdG9yeS5qcycgO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QgKCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdldENhbXBhaWducyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gICAgICAgICAgY29uc3QgaXRlbXNMaXN0ID0gY2FtcGFpZ25zLm1hcCgoYWRkcmVzcykgPT4gKHtcclxuICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IENhbXBhaWduXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIHNldEl0ZW1zKGl0ZW1zTGlzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhbXBhaWduczpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZ2V0Q2FtcGFpZ25zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxOYXZiYXIgLz5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIFxyXG4gICAgICB7IWxvYWRlciB9XHJcbiAgICAgIDxMb2FkZXIgYWN0aXZlIGlubGluZT0nY2VudGVyZWQnY29udGVudD0nTG9hZGluZycgLz5cclxuXHJcblxyXG4gICAgICA8aDI+QXZhaWxhYmxlIENhbXBhaWduczwvaDI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCJjYW1wYWlnbnMvbmV3XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBpbnZlcnRlZCBjb2xvcj0nZ3JlZW4nIGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgQ3JlYXRlIENhbXBhaWduXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPENhcmRHcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcblxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VnbWVudCIsIkxvYWRlciIsIkRpbW1lciIsIkJ1dHRvbiIsIkltYWdlIiwiQ29udGFpbmVyIiwiQ2FyZEdyb3VwIiwiTmF2YmFyIiwiRm9vdGVyIiwiZmFjdG9yeSIsIkxpbmsiLCJIb21lIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxvYWRlciIsInNldExvYWRlciIsImdldENhbXBhaWducyIsImNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJpdGVtc0xpc3QiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJocmVmIiwiZmx1aWQiLCJlcnJvciIsImNvbnNvbGUiLCJhY3RpdmUiLCJpbmxpbmUiLCJjb250ZW50IiwiaDIiLCJpbnZlcnRlZCIsImNvbG9yIiwiZmxvYXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});