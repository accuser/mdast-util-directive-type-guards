import { type TypeGuard } from '@accuser/mdast-util-type-guards';
import type { TextDirective } from 'mdast-util-directive';
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
declare const _default: TypeGuard<TextDirective>;
export default _default;
