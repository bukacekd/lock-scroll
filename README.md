# Lock scroll

<p>
    <a href="https://www.npmjs.com/package/@js4y/lock-scroll"><img src="https://img.shields.io/badge/dependencies-none-green.svg" alt="none dependencies"></a>
    <a href="https://www.npmjs.com/package/@js4y/lock-scroll"><img src="https://img.shields.io/npm/v/%40js4y%2Flock-scroll" alt="npm"></a>
    <a href="https://www.npmjs.com/package/@js4y/lock-scroll"><img src="https://img.shields.io/bundlephobia/minzip/%40js4y%2Flock-scroll" alt="npm bundle size"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/%40js4y%2Flock-scroll" alt="license"></a>
</p>

A set of methods to lock scrolling within an element or an entire page on mobile devices, tablets and desktops.

Live Demo: https://bukacekd.github.io/lock-scroll

## Features

- [easy to use](#usage)
- compatible with Android, IOS, MacOS and Windows
- compatible with mobile devices, tablets and desktops
- preserves the space corresponding to the width of the scrollbar

## Installation

Npm

```bash
npm install @js4y/lock-scroll
```

CDN

```bash
<script src="https://unpkg.com/@js4y/lock-scroll/dist/index.js"></script>
```

## Usage

Npm

```javascript
import {lockScroll, unlockScroll} from '@js4y/lock-scroll';

// lock scrolling
lockScroll();
// unlock scrolling
unlockScroll();
```

CDN

```javascript
<script src="https://unpkg.com/@js4y/lock-scroll/dist/index.js"></script>

<script>
    // lock scrolling
    js4y.scrolling.lockScroll();
    // unlock scrolling
    js4y.scrolling.unlockScroll();
<script>
```

## Methods

### lockScroll(target?: HTMLElement): void

Lock scrolling within an element or an entire page.

```javascript
// lock page scrolling
lockScroll();

// lock scrolling for specific element
lockScroll(document.getElementById('scrollable-element'));
```

### unlockScroll(target?: HTMLElement): void

Unlock scrolling within an element or an entire page.

```javascript
// unlock page scrolling
unlockScroll();

// unlock scrolling for specific element
unlockScroll(document.getElementById('scrollable-element'));
```

## Browser support

| ![alt chrome](images/chrome.png) | ![alt edge](images/edge.png)  | ![alt firefox](images/firefox.png)  | ![alt opera](images/opera.png) | ![alt safari](images/safari.png) |
| :-: | :-: | :-: | :-: | :-: |
| Chrome 69+ | Edge 79+ | Firefox 41+ | Opera 56+ | Safari 12.1+ |

## License

The project is licensed under [MIT license](https://opensource.org/license/mit/).

## Related

- [Dialog](https://github.com/bukacekd/Dialog) - A tiny dependency-free JavaSript ES6 library built on a dialog element with minimal configuration.