import { isContainerDirective } from '@accuser/mdast-util-directive-type-guards';
import { describe, expect, it } from 'vitest';

describe('isContainerDirective', () => {
	it('returns `true` for a blockquote node', () => {
		expect(
			isContainerDirective({ type: 'containerDirective', name: 'container', children: [] })
		).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'blockquote',
		42,
		[],
		{},
		{ type: 'containerDirective' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false` for an non-string value', () => {
			expect(isContainerDirective(value)).toBe(false);
		});
	}
});
