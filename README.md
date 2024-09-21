# TypeScript Type Guards for Mdast Directive Nodes

This package provides TypeScript type guards for [Mdast](https://github.com/syntax-tree/mdast) [Directive](https://github.com/syntax-tree/mdast-util-directive) nodes.

## Installation

```sh
npm install @accuser/mdast-util-directive-type-guards
```

## Usage

```ts
import { isTextDirective } from '@accuser/mdast-util-directive-type-guards';

const node = {
  type: 'textDirective',
  name: 'foo',
  children: [{ type: 'text', value: 'Hello, world!' }]
} as unknown;

if (isTextDirective(node)) {
	// node is TextDirective
}
```

## API

This package exports the identifiers:

- [`isContainerDirective`](api-iscontainterdirective)
- [`isLeafDirective`](api-isleafdirective)
- [`isTextDirective`](api-istextdirective)

There is no default export.

### `isContainerDirective(node: unknown): node is ContainerDirective`

Test if a given value is a valid Mdast `ContainerDirective` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid `ContainerDirective` node.

###### Example

```ts
import { isContainerDirective } from '@accuser/mdast-util-directive-type-guards';

const node = {
  type: 'containerDirective',
  name: 'foo',
  children: [{ type: 'text', value: 'Hello, world!' }]
} as unknown;

if (isContainerDirective(node)) {
	console.log(node.name); // 'foo'
	console.log(node.children[0]); // { type: 'text', value: 'Hello, world!' }
}
```

### `isLeftDirective(node: unknown): node is LeftDirective`

Test if a given value is a valid Mdast `LeafDirective` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid `LeafDirective` node.

###### Example

```ts
import { isLeafDirective } from '@accuser/mdast-util-directive-type-guards';

const node = {
  type: 'textDirective',
  name: 'foo',
  children: [{ type: 'text', value: 'Hello, world!' }]
} as unknown;

if (isLeafDirective(node)) {
	console.log(node.name); // 'foo'
	console.log(node.children[0]); // { type: 'text', value: 'Hello, world!' }
}
```

### `isTextDirective(node: unknown): node is TextDirective`

Test if a given value is a valid Mdast `TextDirective` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid `TextDirective` node.

###### Example

```ts
import { isTextDirective } from '@accuser/mdast-util-directive-type-guards';

const node = {
  type: 'textDirective',
  name: 'foo',
  children: [{ type: 'text', value: 'Hello, world!' }]
} as unknown;

if (isTextDirective(node)) {
	console.log(node.name); // 'foo'
	console.log(node.children[0]); // { type: 'text', value: 'Hello, world!' }
}
```

## Tests

```sh
npm test
```

## License

[MIT](https://raw.githubusercontent.com/accuser/unist-util-type-guards/main/LICENSE)

[api-iscontainterdirective]: #iscontainerdirectivenode-unknown-node-is-containerdirective
[api-isleafdirective]: #isleafdirectivenode-unknown-node-is-leafdirective
[api-istextdirective]: #istextdirectivenode-unknown-node-is-textdirective
