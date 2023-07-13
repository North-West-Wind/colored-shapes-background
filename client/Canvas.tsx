import React, { useEffect, useRef } from "react";
import { DrawFunction } from "./types/misc";
import { getInheritedBackgroundColor } from "./helpers/style";

const Canvas: React.FC<{ draw: DrawFunction }> = props => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const bg = getInheritedBackgroundColor(canvas);
    const ctx = canvas.getContext('2d')!;
    let frameCount = 0;
    let animationFrameId: number;

		const onResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		window.addEventListener("resize", onResize);
    onResize();
    
    const render = () => {
      frameCount++;
      draw(ctx, bg);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", onResize);
    }
  }, [draw]);

	return <canvas ref={canvasRef} {...rest} />
}

export default Canvas;