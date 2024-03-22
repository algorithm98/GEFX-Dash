"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/aria-hidden";
exports.ids = ["vendor-chunks/aria-hidden"];
exports.modules = {

/***/ "(ssr)/./node_modules/aria-hidden/dist/es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/aria-hidden/dist/es2015/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideOthers: () => (/* binding */ hideOthers),\n/* harmony export */   inertOthers: () => (/* binding */ inertOthers),\n/* harmony export */   supportsInert: () => (/* binding */ supportsInert),\n/* harmony export */   suppressOthers: () => (/* binding */ suppressOthers)\n/* harmony export */ });\nvar getDefaultParent = function(originalTarget) {\n    if (typeof document === \"undefined\") {\n        return null;\n    }\n    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;\n    return sampleTarget.ownerDocument.body;\n};\nvar counterMap = new WeakMap();\nvar uncontrolledNodes = new WeakMap();\nvar markerMap = {};\nvar lockCount = 0;\nvar unwrapHost = function(node) {\n    return node && (node.host || unwrapHost(node.parentNode));\n};\nvar correctTargets = function(parent, targets) {\n    return targets.map(function(target) {\n        if (parent.contains(target)) {\n            return target;\n        }\n        var correctedTarget = unwrapHost(target);\n        if (correctedTarget && parent.contains(correctedTarget)) {\n            return correctedTarget;\n        }\n        console.error(\"aria-hidden\", target, \"in not contained inside\", parent, \". Doing nothing\");\n        return null;\n    }).filter(function(x) {\n        return Boolean(x);\n    });\n};\n/**\n * Marks everything except given node(or nodes) as aria-hidden\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @param {String} [controlAttribute] - html Attribute to control\n * @return {Undo} undo command\n */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {\n    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [\n        originalTarget\n    ]);\n    if (!markerMap[markerName]) {\n        markerMap[markerName] = new WeakMap();\n    }\n    var markerCounter = markerMap[markerName];\n    var hiddenNodes = [];\n    var elementsToKeep = new Set();\n    var elementsToStop = new Set(targets);\n    var keep = function(el) {\n        if (!el || elementsToKeep.has(el)) {\n            return;\n        }\n        elementsToKeep.add(el);\n        keep(el.parentNode);\n    };\n    targets.forEach(keep);\n    var deep = function(parent) {\n        if (!parent || elementsToStop.has(parent)) {\n            return;\n        }\n        Array.prototype.forEach.call(parent.children, function(node) {\n            if (elementsToKeep.has(node)) {\n                deep(node);\n            } else {\n                var attr = node.getAttribute(controlAttribute);\n                var alreadyHidden = attr !== null && attr !== \"false\";\n                var counterValue = (counterMap.get(node) || 0) + 1;\n                var markerValue = (markerCounter.get(node) || 0) + 1;\n                counterMap.set(node, counterValue);\n                markerCounter.set(node, markerValue);\n                hiddenNodes.push(node);\n                if (counterValue === 1 && alreadyHidden) {\n                    uncontrolledNodes.set(node, true);\n                }\n                if (markerValue === 1) {\n                    node.setAttribute(markerName, \"true\");\n                }\n                if (!alreadyHidden) {\n                    node.setAttribute(controlAttribute, \"true\");\n                }\n            }\n        });\n    };\n    deep(parentNode);\n    elementsToKeep.clear();\n    lockCount++;\n    return function() {\n        hiddenNodes.forEach(function(node) {\n            var counterValue = counterMap.get(node) - 1;\n            var markerValue = markerCounter.get(node) - 1;\n            counterMap.set(node, counterValue);\n            markerCounter.set(node, markerValue);\n            if (!counterValue) {\n                if (!uncontrolledNodes.has(node)) {\n                    node.removeAttribute(controlAttribute);\n                }\n                uncontrolledNodes.delete(node);\n            }\n            if (!markerValue) {\n                node.removeAttribute(markerName);\n            }\n        });\n        lockCount--;\n        if (!lockCount) {\n            // clear\n            counterMap = new WeakMap();\n            counterMap = new WeakMap();\n            uncontrolledNodes = new WeakMap();\n            markerMap = {};\n        }\n    };\n};\n/**\n * Marks everything except given node(or nodes) as aria-hidden\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */ var hideOthers = function(originalTarget, parentNode, markerName) {\n    if (markerName === void 0) {\n        markerName = \"data-aria-hidden\";\n    }\n    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [\n        originalTarget\n    ]);\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\n    if (!activeParentNode) {\n        return function() {\n            return null;\n        };\n    }\n    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10\n    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll(\"[aria-live]\")));\n    return applyAttributeToOthers(targets, activeParentNode, markerName, \"aria-hidden\");\n};\n/**\n * Marks everything except given node(or nodes) as inert\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */ var inertOthers = function(originalTarget, parentNode, markerName) {\n    if (markerName === void 0) {\n        markerName = \"data-inert-ed\";\n    }\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\n    if (!activeParentNode) {\n        return function() {\n            return null;\n        };\n    }\n    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, \"inert\");\n};\n/**\n * @returns if current browser supports inert\n */ var supportsInert = function() {\n    return typeof HTMLElement !== \"undefined\" && HTMLElement.prototype.hasOwnProperty(\"inert\");\n};\n/**\n * Automatic function to \"suppress\" DOM elements - _hide_ or _inert_ in the best possible way\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */ var suppressOthers = function(originalTarget, parentNode, markerName) {\n    if (markerName === void 0) {\n        markerName = \"data-suppressed\";\n    }\n    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJpYS1oaWRkZW4vZGlzdC9lczIwMTUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUlBLG1CQUFtQixTQUFVQyxjQUFjO0lBQzNDLElBQUksT0FBT0MsYUFBYSxhQUFhO1FBQ2pDLE9BQU87SUFDWDtJQUNBLElBQUlDLGVBQWVDLE1BQU1DLE9BQU8sQ0FBQ0osa0JBQWtCQSxjQUFjLENBQUMsRUFBRSxHQUFHQTtJQUN2RSxPQUFPRSxhQUFhRyxhQUFhLENBQUNDLElBQUk7QUFDMUM7QUFDQSxJQUFJQyxhQUFhLElBQUlDO0FBQ3JCLElBQUlDLG9CQUFvQixJQUFJRDtBQUM1QixJQUFJRSxZQUFZLENBQUM7QUFDakIsSUFBSUMsWUFBWTtBQUNoQixJQUFJQyxhQUFhLFNBQVVDLElBQUk7SUFDM0IsT0FBT0EsUUFBU0EsQ0FBQUEsS0FBS0MsSUFBSSxJQUFJRixXQUFXQyxLQUFLRSxVQUFVO0FBQzNEO0FBQ0EsSUFBSUMsaUJBQWlCLFNBQVVDLE1BQU0sRUFBRUMsT0FBTztJQUMxQyxPQUFPQSxRQUNGQyxHQUFHLENBQUMsU0FBVUMsTUFBTTtRQUNyQixJQUFJSCxPQUFPSSxRQUFRLENBQUNELFNBQVM7WUFDekIsT0FBT0E7UUFDWDtRQUNBLElBQUlFLGtCQUFrQlYsV0FBV1E7UUFDakMsSUFBSUUsbUJBQW1CTCxPQUFPSSxRQUFRLENBQUNDLGtCQUFrQjtZQUNyRCxPQUFPQTtRQUNYO1FBQ0FDLFFBQVFDLEtBQUssQ0FBQyxlQUFlSixRQUFRLDJCQUEyQkgsUUFBUTtRQUN4RSxPQUFPO0lBQ1gsR0FDS1EsTUFBTSxDQUFDLFNBQVVDLENBQUM7UUFBSSxPQUFPQyxRQUFRRDtJQUFJO0FBQ2xEO0FBQ0E7Ozs7Ozs7Q0FPQyxHQUNELElBQUlFLHlCQUF5QixTQUFVNUIsY0FBYyxFQUFFZSxVQUFVLEVBQUVjLFVBQVUsRUFBRUMsZ0JBQWdCO0lBQzNGLElBQUlaLFVBQVVGLGVBQWVELFlBQVlaLE1BQU1DLE9B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ZS1hY2Nlc3MvLi9ub2RlX21vZHVsZXMvYXJpYS1oaWRkZW4vZGlzdC9lczIwMTUvaW5kZXguanM/YTlmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2V0RGVmYXVsdFBhcmVudCA9IGZ1bmN0aW9uIChvcmlnaW5hbFRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgc2FtcGxlVGFyZ2V0ID0gQXJyYXkuaXNBcnJheShvcmlnaW5hbFRhcmdldCkgPyBvcmlnaW5hbFRhcmdldFswXSA6IG9yaWdpbmFsVGFyZ2V0O1xuICAgIHJldHVybiBzYW1wbGVUYXJnZXQub3duZXJEb2N1bWVudC5ib2R5O1xufTtcbnZhciBjb3VudGVyTWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciB1bmNvbnRyb2xsZWROb2RlcyA9IG5ldyBXZWFrTWFwKCk7XG52YXIgbWFya2VyTWFwID0ge307XG52YXIgbG9ja0NvdW50ID0gMDtcbnZhciB1bndyYXBIb3N0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiAobm9kZS5ob3N0IHx8IHVud3JhcEhvc3Qobm9kZS5wYXJlbnROb2RlKSk7XG59O1xudmFyIGNvcnJlY3RUYXJnZXRzID0gZnVuY3Rpb24gKHBhcmVudCwgdGFyZ2V0cykge1xuICAgIHJldHVybiB0YXJnZXRzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAocGFyZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvcnJlY3RlZFRhcmdldCA9IHVud3JhcEhvc3QodGFyZ2V0KTtcbiAgICAgICAgaWYgKGNvcnJlY3RlZFRhcmdldCAmJiBwYXJlbnQuY29udGFpbnMoY29ycmVjdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvcnJlY3RlZFRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKCdhcmlhLWhpZGRlbicsIHRhcmdldCwgJ2luIG5vdCBjb250YWluZWQgaW5zaWRlJywgcGFyZW50LCAnLiBEb2luZyBub3RoaW5nJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIEJvb2xlYW4oeCk7IH0pO1xufTtcbi8qKlxuICogTWFya3MgZXZlcnl0aGluZyBleGNlcHQgZ2l2ZW4gbm9kZShvciBub2RlcykgYXMgYXJpYS1oaWRkZW5cbiAqIEBwYXJhbSB7RWxlbWVudCB8IEVsZW1lbnRbXX0gb3JpZ2luYWxUYXJnZXQgLSBlbGVtZW50cyB0byBrZWVwIG9uIHRoZSBwYWdlXG4gKiBAcGFyYW0gW3BhcmVudE5vZGVdIC0gdG9wIGVsZW1lbnQsIGRlZmF1bHRzIHRvIGRvY3VtZW50LmJvZHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFya2VyTmFtZV0gLSBhIHNwZWNpYWwgYXR0cmlidXRlIHRvIG1hcmsgZXZlcnkgbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IFtjb250cm9sQXR0cmlidXRlXSAtIGh0bWwgQXR0cmlidXRlIHRvIGNvbnRyb2xcbiAqIEByZXR1cm4ge1VuZG99IHVuZG8gY29tbWFuZFxuICovXG52YXIgYXBwbHlBdHRyaWJ1dGVUb090aGVycyA9IGZ1bmN0aW9uIChvcmlnaW5hbFRhcmdldCwgcGFyZW50Tm9kZSwgbWFya2VyTmFtZSwgY29udHJvbEF0dHJpYnV0ZSkge1xuICAgIHZhciB0YXJnZXRzID0gY29ycmVjdFRhcmdldHMocGFyZW50Tm9kZSwgQXJyYXkuaXNBcnJheShvcmlnaW5hbFRhcmdldCkgPyBvcmlnaW5hbFRhcmdldCA6IFtvcmlnaW5hbFRhcmdldF0pO1xuICAgIGlmICghbWFya2VyTWFwW21hcmtlck5hbWVdKSB7XG4gICAgICAgIG1hcmtlck1hcFttYXJrZXJOYW1lXSA9IG5ldyBXZWFrTWFwKCk7XG4gICAgfVxuICAgIHZhciBtYXJrZXJDb3VudGVyID0gbWFya2VyTWFwW21hcmtlck5hbWVdO1xuICAgIHZhciBoaWRkZW5Ob2RlcyA9IFtdO1xuICAgIHZhciBlbGVtZW50c1RvS2VlcCA9IG5ldyBTZXQoKTtcbiAgICB2YXIgZWxlbWVudHNUb1N0b3AgPSBuZXcgU2V0KHRhcmdldHMpO1xuICAgIHZhciBrZWVwID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmICghZWwgfHwgZWxlbWVudHNUb0tlZXAuaGFzKGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRzVG9LZWVwLmFkZChlbCk7XG4gICAgICAgIGtlZXAoZWwucGFyZW50Tm9kZSk7XG4gICAgfTtcbiAgICB0YXJnZXRzLmZvckVhY2goa2VlcCk7XG4gICAgdmFyIGRlZXAgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIGlmICghcGFyZW50IHx8IGVsZW1lbnRzVG9TdG9wLmhhcyhwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChwYXJlbnQuY2hpbGRyZW4sIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudHNUb0tlZXAuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyID0gbm9kZS5nZXRBdHRyaWJ1dGUoY29udHJvbEF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGFscmVhZHlIaWRkZW4gPSBhdHRyICE9PSBudWxsICYmIGF0dHIgIT09ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZXJWYWx1ZSA9IChjb3VudGVyTWFwLmdldChub2RlKSB8fCAwKSArIDE7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclZhbHVlID0gKG1hcmtlckNvdW50ZXIuZ2V0KG5vZGUpIHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICBjb3VudGVyTWFwLnNldChub2RlLCBjb3VudGVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIG1hcmtlckNvdW50ZXIuc2V0KG5vZGUsIG1hcmtlclZhbHVlKTtcbiAgICAgICAgICAgICAgICBoaWRkZW5Ob2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyVmFsdWUgPT09IDEgJiYgYWxyZWFkeUhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICB1bmNvbnRyb2xsZWROb2Rlcy5zZXQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXJrZXJWYWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShtYXJrZXJOYW1lLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFscmVhZHlIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoY29udHJvbEF0dHJpYnV0ZSwgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZGVlcChwYXJlbnROb2RlKTtcbiAgICBlbGVtZW50c1RvS2VlcC5jbGVhcigpO1xuICAgIGxvY2tDb3VudCsrO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpZGRlbk5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjb3VudGVyVmFsdWUgPSBjb3VudGVyTWFwLmdldChub2RlKSAtIDE7XG4gICAgICAgICAgICB2YXIgbWFya2VyVmFsdWUgPSBtYXJrZXJDb3VudGVyLmdldChub2RlKSAtIDE7XG4gICAgICAgICAgICBjb3VudGVyTWFwLnNldChub2RlLCBjb3VudGVyVmFsdWUpO1xuICAgICAgICAgICAgbWFya2VyQ291bnRlci5zZXQobm9kZSwgbWFya2VyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFjb3VudGVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVuY29udHJvbGxlZE5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShjb250cm9sQXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5jb250cm9sbGVkTm9kZXMuZGVsZXRlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtYXJrZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG1hcmtlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbG9ja0NvdW50LS07XG4gICAgICAgIGlmICghbG9ja0NvdW50KSB7XG4gICAgICAgICAgICAvLyBjbGVhclxuICAgICAgICAgICAgY291bnRlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgICAgICBjb3VudGVyTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgICAgIHVuY29udHJvbGxlZE5vZGVzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgICAgIG1hcmtlck1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vKipcbiAqIE1hcmtzIGV2ZXJ5dGhpbmcgZXhjZXB0IGdpdmVuIG5vZGUob3Igbm9kZXMpIGFzIGFyaWEtaGlkZGVuXG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBFbGVtZW50W119IG9yaWdpbmFsVGFyZ2V0IC0gZWxlbWVudHMgdG8ga2VlcCBvbiB0aGUgcGFnZVxuICogQHBhcmFtIFtwYXJlbnROb2RlXSAtIHRvcCBlbGVtZW50LCBkZWZhdWx0cyB0byBkb2N1bWVudC5ib2R5XG4gKiBAcGFyYW0ge1N0cmluZ30gW21hcmtlck5hbWVdIC0gYSBzcGVjaWFsIGF0dHJpYnV0ZSB0byBtYXJrIGV2ZXJ5IG5vZGVcbiAqIEByZXR1cm4ge1VuZG99IHVuZG8gY29tbWFuZFxuICovXG5leHBvcnQgdmFyIGhpZGVPdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpIHtcbiAgICBpZiAobWFya2VyTmFtZSA9PT0gdm9pZCAwKSB7IG1hcmtlck5hbWUgPSAnZGF0YS1hcmlhLWhpZGRlbic7IH1cbiAgICB2YXIgdGFyZ2V0cyA9IEFycmF5LmZyb20oQXJyYXkuaXNBcnJheShvcmlnaW5hbFRhcmdldCkgPyBvcmlnaW5hbFRhcmdldCA6IFtvcmlnaW5hbFRhcmdldF0pO1xuICAgIHZhciBhY3RpdmVQYXJlbnROb2RlID0gcGFyZW50Tm9kZSB8fCBnZXREZWZhdWx0UGFyZW50KG9yaWdpbmFsVGFyZ2V0KTtcbiAgICBpZiAoIWFjdGl2ZVBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG4gICAgfVxuICAgIC8vIHdlIHNob3VsZCBub3QgaGlkZSBhcmlhTGl2ZSBlbGVtZW50cyAtIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvYXJpYS1oaWRkZW4vaXNzdWVzLzEwXG4gICAgdGFyZ2V0cy5wdXNoLmFwcGx5KHRhcmdldHMsIEFycmF5LmZyb20oYWN0aXZlUGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1saXZlXScpKSk7XG4gICAgcmV0dXJuIGFwcGx5QXR0cmlidXRlVG9PdGhlcnModGFyZ2V0cywgYWN0aXZlUGFyZW50Tm9kZSwgbWFya2VyTmFtZSwgJ2FyaWEtaGlkZGVuJyk7XG59O1xuLyoqXG4gKiBNYXJrcyBldmVyeXRoaW5nIGV4Y2VwdCBnaXZlbiBub2RlKG9yIG5vZGVzKSBhcyBpbmVydFxuICogQHBhcmFtIHtFbGVtZW50IHwgRWxlbWVudFtdfSBvcmlnaW5hbFRhcmdldCAtIGVsZW1lbnRzIHRvIGtlZXAgb24gdGhlIHBhZ2VcbiAqIEBwYXJhbSBbcGFyZW50Tm9kZV0gLSB0b3AgZWxlbWVudCwgZGVmYXVsdHMgdG8gZG9jdW1lbnQuYm9keVxuICogQHBhcmFtIHtTdHJpbmd9IFttYXJrZXJOYW1lXSAtIGEgc3BlY2lhbCBhdHRyaWJ1dGUgdG8gbWFyayBldmVyeSBub2RlXG4gKiBAcmV0dXJuIHtVbmRvfSB1bmRvIGNvbW1hbmRcbiAqL1xuZXhwb3J0IHZhciBpbmVydE90aGVycyA9IGZ1bmN0aW9uIChvcmlnaW5hbFRhcmdldCwgcGFyZW50Tm9kZSwgbWFya2VyTmFtZSkge1xuICAgIGlmIChtYXJrZXJOYW1lID09PSB2b2lkIDApIHsgbWFya2VyTmFtZSA9ICdkYXRhLWluZXJ0LWVkJzsgfVxuICAgIHZhciBhY3RpdmVQYXJlbnROb2RlID0gcGFyZW50Tm9kZSB8fCBnZXREZWZhdWx0UGFyZW50KG9yaWdpbmFsVGFyZ2V0KTtcbiAgICBpZiAoIWFjdGl2ZVBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG4gICAgfVxuICAgIHJldHVybiBhcHBseUF0dHJpYnV0ZVRvT3RoZXJzKG9yaWdpbmFsVGFyZ2V0LCBhY3RpdmVQYXJlbnROb2RlLCBtYXJrZXJOYW1lLCAnaW5lcnQnKTtcbn07XG4vKipcbiAqIEByZXR1cm5zIGlmIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBpbmVydFxuICovXG5leHBvcnQgdmFyIHN1cHBvcnRzSW5lcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgSFRNTEVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpO1xufTtcbi8qKlxuICogQXV0b21hdGljIGZ1bmN0aW9uIHRvIFwic3VwcHJlc3NcIiBET00gZWxlbWVudHMgLSBfaGlkZV8gb3IgX2luZXJ0XyBpbiB0aGUgYmVzdCBwb3NzaWJsZSB3YXlcbiAqIEBwYXJhbSB7RWxlbWVudCB8IEVsZW1lbnRbXX0gb3JpZ2luYWxUYXJnZXQgLSBlbGVtZW50cyB0byBrZWVwIG9uIHRoZSBwYWdlXG4gKiBAcGFyYW0gW3BhcmVudE5vZGVdIC0gdG9wIGVsZW1lbnQsIGRlZmF1bHRzIHRvIGRvY3VtZW50LmJvZHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFya2VyTmFtZV0gLSBhIHNwZWNpYWwgYXR0cmlidXRlIHRvIG1hcmsgZXZlcnkgbm9kZVxuICogQHJldHVybiB7VW5kb30gdW5kbyBjb21tYW5kXG4gKi9cbmV4cG9ydCB2YXIgc3VwcHJlc3NPdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpIHtcbiAgICBpZiAobWFya2VyTmFtZSA9PT0gdm9pZCAwKSB7IG1hcmtlck5hbWUgPSAnZGF0YS1zdXBwcmVzc2VkJzsgfVxuICAgIHJldHVybiAoc3VwcG9ydHNJbmVydCgpID8gaW5lcnRPdGhlcnMgOiBoaWRlT3RoZXJzKShvcmlnaW5hbFRhcmdldCwgcGFyZW50Tm9kZSwgbWFya2VyTmFtZSk7XG59O1xuIl0sIm5hbWVzIjpbImdldERlZmF1bHRQYXJlbnQiLCJvcmlnaW5hbFRhcmdldCIsImRvY3VtZW50Iiwic2FtcGxlVGFyZ2V0IiwiQXJyYXkiLCJpc0FycmF5Iiwib3duZXJEb2N1bWVudCIsImJvZHkiLCJjb3VudGVyTWFwIiwiV2Vha01hcCIsInVuY29udHJvbGxlZE5vZGVzIiwibWFya2VyTWFwIiwibG9ja0NvdW50IiwidW53cmFwSG9zdCIsIm5vZGUiLCJob3N0IiwicGFyZW50Tm9kZSIsImNvcnJlY3RUYXJnZXRzIiwicGFyZW50IiwidGFyZ2V0cyIsIm1hcCIsInRhcmdldCIsImNvbnRhaW5zIiwiY29ycmVjdGVkVGFyZ2V0IiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwieCIsIkJvb2xlYW4iLCJhcHBseUF0dHJpYnV0ZVRvT3RoZXJzIiwibWFya2VyTmFtZSIsImNvbnRyb2xBdHRyaWJ1dGUiLCJtYXJrZXJDb3VudGVyIiwiaGlkZGVuTm9kZXMiLCJlbGVtZW50c1RvS2VlcCIsIlNldCIsImVsZW1lbnRzVG9TdG9wIiwia2VlcCIsImVsIiwiaGFzIiwiYWRkIiwiZm9yRWFjaCIsImRlZXAiLCJwcm90b3R5cGUiLCJjYWxsIiwiY2hpbGRyZW4iLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiYWxyZWFkeUhpZGRlbiIsImNvdW50ZXJWYWx1ZSIsImdldCIsIm1hcmtlclZhbHVlIiwic2V0IiwicHVzaCIsInNldEF0dHJpYnV0ZSIsImNsZWFyIiwicmVtb3ZlQXR0cmlidXRlIiwiZGVsZXRlIiwiaGlkZU90aGVycyIsImZyb20iLCJhY3RpdmVQYXJlbnROb2RlIiwiYXBwbHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5lcnRPdGhlcnMiLCJzdXBwb3J0c0luZXJ0IiwiSFRNTEVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cHByZXNzT3RoZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/aria-hidden/dist/es2015/index.js\n");

/***/ })

};
;