import { useEffect, useRef, useState } from "react";

export default function shouldShowComponentBasedOnScroll({
  isProjectPage = false,
  resetKey = null,
  threshold = 40,
} = {}) {
  const [isComponentVisible, setComponentVisible] = useState(true);
  const lastScrollPositionRef = useRef(0);
  const isRequestAnimationFramePending = useRef(false);

  useEffect(() => {
    setComponentVisible(true);
    lastScrollPositionRef.current =
      typeof window !== "undefined" ? window.scrollY : 0;
  }, [resetKey]);

  useEffect(() => {
    function handleScroll() {
      if (isRequestAnimationFramePending.current) return;
      isRequestAnimationFramePending.current = true;

      requestAnimationFrame(() => {
        const currentScrollTop = window.scrollY;
        const lastScrollTop = lastScrollPositionRef.current;
        const delta = currentScrollTop - lastScrollTop;

        if (!isProjectPage) {
          setComponentVisible(currentScrollTop < threshold);
        } else {
          setComponentVisible(
            shouldShowComponent({
              currentScrollTop,
              lastScrollTop,
              threshold,
              previousVisibility: isComponentVisible,
              delta,
            }),
          );
        }

        lastScrollPositionRef.current = currentScrollTop;
        isRequestAnimationFramePending.current = false;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isProjectPage, threshold, isComponentVisible]);

  return isComponentVisible;
}

function shouldShowComponent({
  currentScrollTop,
  threshold,
  previousVisibility,
  delta,
}) {
  if (currentScrollTop < threshold) return true;

  const upScroll = delta < -3;
  const downScroll = delta > 3;

  if (upScroll) return true;
  if (downScroll) return false;

  return previousVisibility;
}
