import LayoutWrapper from "@/components/layout-wrapper";
import type React from "react";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
