import { type TypeGuard } from '@accuser/mdast-util-type-guards';
import type { ContainerDirective } from 'mdast-util-directive';
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
declare const _default: TypeGuard<ContainerDirective>;
export default _default;
