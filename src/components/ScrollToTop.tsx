"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Must use behavior "auto" so CSS `scroll-smooth` on :root cannot slow or block reaching y=0.
 * Mobile Safari sometimes applies scroll restoration after paint; we repeat a few times.
 */
function scrollTopHard() {
  const y = 0;
  window.scrollTo({ top: y, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = y;
  document.documentElement.scrollTo({ top: y, left: 0, behavior: "auto" });
  document.body.scrollTop = y;
  document.body.scrollTo({ top: y, left: 0, behavior: "auto" });
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    scrollTopHard();
  }, [pathname]);

  useEffect(() => {
    scrollTopHard();
    const raf1 = requestAnimationFrame(() => {
      scrollTopHard();
      requestAnimationFrame(scrollTopHard);
    });
    const timeouts = [0, 50, 120, 280, 450].map((ms) => setTimeout(scrollTopHard, ms));
    return () => {
      cancelAnimationFrame(raf1);
      timeouts.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
