"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mdast_util_type_guards_1 = require("@accuser/mdast-util-type-guards");
/**
 * Type guard that checks if a value is a {@link LeafDirective}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link LeafDirective}.
 *
 * @example
 * ```ts
 * const node = { type: 'leafDirective', name: 'leaf', children: [] };
 * isLeafDirective(node); //=> true, node is LeafDirective
 * ```
 */
exports.default = ((value) => (0, mdast_util_type_guards_1.isParent)(value) &&
    value.type === 'leafDirective' &&
    'name' in value &&
    typeof value.name === 'string');
