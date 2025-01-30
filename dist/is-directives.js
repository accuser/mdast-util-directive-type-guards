import isContainerDirective from './is-container-directive.js';
import isLeafDirective from './is-leaf-directive.js';
import isTextDirective from './is-text-directive.js';
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
export default ((value) => isContainerDirective(value) ||
    isLeafDirective(value) ||
    isTextDirective(value));
