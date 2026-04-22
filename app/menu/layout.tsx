import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Sidetrack menu: hand-tossed pizzas, pasta, classics from the fryer and grill, and the full bar. Powers, Michigan.",
};

export default function MenuLayout({ children }: { children: ReactNode }) {
  return children;
}
