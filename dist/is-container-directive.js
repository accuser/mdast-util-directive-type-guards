import { isParent } from '@accuser/mdast-util-type-guards';
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
export default ((value) => isParent(value) &&
    value.type === 'containerDirective' &&
    'name' in value &&
    typeof value.name === 'string');
