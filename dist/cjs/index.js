"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTextDirective = exports.isLeafDirective = exports.isContainerDirective = void 0;
var is_container_directive_js_1 = require("./is-container-directive.js");
Object.defineProperty(exports, "isContainerDirective", { enumerable: true, get: function () { return __importDefault(is_container_directive_js_1).default; } });
var is_leaf_directive_js_1 = require("./is-leaf-directive.js");
Object.defineProperty(exports, "isLeafDirective", { enumerable: true, get: function () { return __importDefault(is_leaf_directive_js_1).default; } });
var is_text_directive_js_1 = require("./is-text-directive.js");
Object.defineProperty(exports, "isTextDirective", { enumerable: true, get: function () { return __importDefault(is_text_directive_js_1).default; } });
