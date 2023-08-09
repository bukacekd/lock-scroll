import {expect, test } from 'vitest';
import {lockScroll, unlockScroll} from '../src/index';

test('lock/unlock page scrolling', () => {
    lockScroll();
    expect(document.documentElement.style.overflow).toBe('hidden');
    unlockScroll();
    expect(document.documentElement.style.overflow).toBe('');
});

test('lock/unlock element scrolling', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    lockScroll(element);
    expect(element.style.overflow).toBe('hidden');
    unlockScroll(element);
    expect(element.style.overflow).toBe('');
});
