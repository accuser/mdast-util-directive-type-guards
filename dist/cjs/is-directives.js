"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_container_directive_js_1 = __importDefault(require("./is-container-directive.js"));
const is_leaf_directive_js_1 = __importDefault(require("./is-leaf-directive.js"));
const is_text_directive_js_1 = __importDefault(require("./is-text-directive.js"));
/**
 * Type guard that checks if a value is a {@link Directives}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link LeafDirective}.
 *
 * @example
 * ```ts
 * const node = { type: 'leafDirective', name: 'leaf', children: [] };
 * isDirectives(node); //=> true, node is Directives
 * ```
 */
exports.default = ((value) => (0, is_container_directive_js_1.default)(value) ||
    (0, is_leaf_directive_js_1.default)(value) ||
    (0, is_text_directive_js_1.default)(value));
