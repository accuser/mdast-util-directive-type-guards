import { type TypeGuard } from '@accuser/mdast-util-type-guards';
import type { LeafDirective } from 'mdast-util-directive';
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
declare const _default: TypeGuard<LeafDirective>;
export default _default;
