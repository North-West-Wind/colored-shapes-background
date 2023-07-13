// https://stackoverflow.com/questions/46336002/how-to-get-computed-background-color-style-inherited-from-parent-element
export function getInheritedBackgroundColor(el: Element) {
	const defaultStyle = getDefaultBackground();
	const backgroundColor = window.getComputedStyle(el).backgroundColor;
	if (backgroundColor != defaultStyle) return backgroundColor;
	if (!el.parentElement) return defaultStyle;
	return getInheritedBackgroundColor(el.parentElement);
}

function getDefaultBackground() {
	const div = document.createElement("div");
	document.head.appendChild(div);
	const bg = window.getComputedStyle(div).backgroundColor;
	document.head.removeChild(div);
	return bg;
}