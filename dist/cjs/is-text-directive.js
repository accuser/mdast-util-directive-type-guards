"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mdast_util_type_guards_1 = require("@accuser/mdast-util-type-guards");
/**
 * Type guard that checks if a value is a {@link TextDirective}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link TextDirective}.
 *
 * @example
 * ```ts
 * const node = { type: 'textDirective', name: 'text', children: [] };
 * isTextDirective(node); //=> true, node is TextDirective
 * ```
 */
exports.default = ((value) => (0, mdast_util_type_guards_1.isParent)(value) &&
    value.type === 'textDirective' &&
    'name' in value &&
    typeof value.name === 'string');
