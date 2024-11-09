const lockElements = new WeakSet();

const isBodyOrHTML = (target: HTMLElement) => target === document.body || target === document.documentElement;

const isIOS = /iPad|iPhone|iPod/.test(globalThis.navigator?.userAgent);

const getTarget = (target?: HTMLElement) => {
	if (target == undefined) {
		return document.documentElement;
	}

	if (target instanceof HTMLElement) {
		return target;
	}

	throw TypeError('First argument must be HTMLElement');
};

let scrolloptions: ScrollToOptions = {};

export const lockScroll = (target?: HTMLElement) => {
	const el = getTarget(target);

	if (lockElements.has(el)) {
		return;
	}

	if (isIOS && isBodyOrHTML(el)) {
		scrolloptions = {left: window.scrollX, top: window.scrollY, behavior: 'instant'};
		el.style.cssText = `left: -${scrolloptions.left}px; position: fixed; top: -${scrolloptions.top}px;`;
	} else {
		const scrollbarWidth = (isBodyOrHTML(el) ? window.innerWidth : el.offsetWidth) - el.clientWidth;
		el.style.cssText = `overflow: hidden; padding-inline-end: ${scrollbarWidth}px`;
	}

	lockElements.add(el);
};

export const unlockScroll = (target?: HTMLElement) => {
	const el = getTarget(target);
	el.style.cssText = '';

	if (isIOS && isBodyOrHTML(el)) {
		document.documentElement.scrollTo(scrolloptions);
	}
	lockElements.delete(el);
};
