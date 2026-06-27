import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenisScroll(options = {}) {
  useEffect(() => {
    if (typeof window === "undefined") {
      console.warn("[useLenisScroll] skipped because window is undefined");
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.55,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
      smoothTouch: false,
      infinite: false,
      ...options,
    });

    let animationFrameId = 0;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(raf);
    }

    animationFrameId = window.requestAnimationFrame(raf);
    console.log("[useLenisScroll] animation started", animationFrameId);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [options]);
}
