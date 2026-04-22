"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollTopHard() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Scrolls to top on client navigations. useLayoutEffect runs before paint so we beat scroll restoration. */
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
    const t = setTimeout(scrollTopHard, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
