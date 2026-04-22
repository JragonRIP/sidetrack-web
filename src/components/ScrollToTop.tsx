"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scrolls to top when navigating between pages (mobile + desktop). */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
