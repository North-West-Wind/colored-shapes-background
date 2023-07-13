import tinycolor from "tinycolor2";
import { pass } from "./util";

export function clamp(x: number, min: number, max: number) {
	return Math.max(min, Math.min(max, x));
}

export function randomBetween(min: number, max: number, int = false) {
	return (int ? Math.round : pass)(Math.random() * (max - min)) + min;
}

export function randomChance(chance: number) {
	return Math.random() < chance;
}

export function randomColor() {
	return tinycolor(randomBetween(0, 16777216, true).toString(16));
}

export function flipColor(color: tinycolor.Instance) {
	const rgb = <any> color.toRgb();
	for (const prop in rgb) {
		if (prop == "a") continue;
		rgb[prop] = 255 - rgb[prop];
	}
	return tinycolor(rgb);
}