export class Vec2 {
	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	add(x: number, y: number) {
		return new Vec2(this.x + x, this.y + y);
	}

	addVec(vec: Vec2) {
		return this.add(vec.x, vec.y);
	}

	addX(x: number) {
		return this.add(x, 0);
	}

	addY(y: number) {
		return this.add(0, y);
	}

	distanceTo(vec: Vec2) {
		return Math.sqrt(this.distanceToSqr(vec));
	}

	distanceToSqr(vec: Vec2) {
		return this.addVec(vec.inverse()).magnitudeSqr();
	}

	inverse() {
		return this.scaleAll(-1);
	}

	magnitude() {
		return Math.sqrt(this.magnitudeSqr());
	}

	magnitudeSqr() {
		return this.x * this.x + this.y * this.y;
	}

	scale(x: number, y: number) {
		return new Vec2(this.x * x, this.y * y);
	}

	scaleAll(k: number) {
		return this.scale(k, k);
	}

	scaleX(x: number) {
		return this.scale(x, 1);
	}

	scaleY(y: number) {
		return this.scale(1, y);
	}
}