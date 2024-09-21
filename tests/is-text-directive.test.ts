import { isTextDirective } from '@accuser/mdast-util-directive-type-guards';
import { describe, expect, it } from 'vitest';

describe('isTextDirective', () => {
	it('returns `true` for a blockquote node', () => {
		expect(isTextDirective({ type: 'textDirective', name: 'text', children: [] })).toBe(true);
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
		{ type: 'textDirective' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false` for an non-string value', () => {
			expect(isTextDirective(value)).toBe(false);
		});
	}
});
