import { isParent } from '@accuser/mdast-util-type-guards';
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
export default ((value) => isParent(value) &&
    value.type === 'textDirective' &&
    'name' in value &&
    typeof value.name === 'string');
