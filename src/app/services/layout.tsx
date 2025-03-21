import type React from "react"
import LayoutWrapper from "@/components/layout-wrapper"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

