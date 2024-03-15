/** @type {import('svelte/action').Action}  */
export function clickOutside(node) {
	/**
	 * @param {MouseEvent} event
	 */
	const handleClick = (event) => {
		const target = /** @type {HTMLElement} */ (event.target);
		if (!node.contains(target)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
