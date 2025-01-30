"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mdast_util_type_guards_1 = require("@accuser/mdast-util-type-guards");
/**
 * Type guard that checks if a value is a {@link ContainerDirective}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link ContainerDirective}.
 *
 * @example
 * ```ts
 * const node = { type: 'containerDirective', name: 'container', children: [] };
 * isContainerDirective(node); //=> true, node is ContainerDirective
 * ```
 */
exports.default = ((value) => (0, mdast_util_type_guards_1.isParent)(value) &&
    value.type === 'containerDirective' &&
    'name' in value &&
    typeof value.name === 'string');
