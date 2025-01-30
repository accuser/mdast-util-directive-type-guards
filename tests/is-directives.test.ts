import { isDirectives } from '@accuser/mdast-util-directive-type-guards';
import { describe, expect, it } from 'vitest';

describe('isDirectives', () => {
	it('returns `true` for a containerDirective node', () => {
		expect(isDirectives({ type: 'containerDirective', name: 'container', children: [] })).toBe(
			true
		);
	});

	it('returns `true` for a leafDirective node', () => {
		expect(isDirectives({ type: 'leafDirective', name: 'leaf', children: [] })).toBe(true);
	});

	it('returns `true` for a textDirective node', () => {
		expect(isDirectives({ type: 'textDirective', name: 'text', children: [] })).toBe(true);
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
		{ type: 'leafDirective' },
		{ type: 'textDirective' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false` for an non-string value', () => {
			expect(isDirectives(value)).toBe(false);
		});
	}
});
