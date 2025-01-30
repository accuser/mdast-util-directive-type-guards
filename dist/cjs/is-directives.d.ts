import { type TypeGuard } from '@accuser/mdast-util-type-guards';
import type { Directives } from 'mdast-util-directive';
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
declare const _default: TypeGuard<Directives>;
export default _default;
