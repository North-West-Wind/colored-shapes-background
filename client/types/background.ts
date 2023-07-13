import tinycolor from "tinycolor2";

export default abstract class Background {
	lastTime = 0;

	render(ctx: CanvasRenderingContext2D, backgroundColor: string) {
		const now = Date.now();
		if (!this.lastTime) this.lastTime = now;
		this.doTick(ctx, now - this.lastTime);
		this.lastTime = now;

		const color = tinycolor(backgroundColor);
		ctx.fillStyle = color.toHexString();
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		if (color.isDark()) ctx.fillStyle = color.lighten(10).toHexString();
		else ctx.fillStyle = color.darken(10).toHexString();
		ctx.font = `${ctx.canvas.height * 0.02}px Arial`;
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Made by NorthWestWind", ctx.canvas.width * 0.01, ctx.canvas.width * 0.01);
		this.doRender(ctx);
	}

	abstract doTick(ctx: CanvasRenderingContext2D, ellapsed: number): void;

	abstract doRender(ctx: CanvasRenderingContext2D): void;
}