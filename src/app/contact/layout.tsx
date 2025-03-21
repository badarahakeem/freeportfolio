import type React from "react"
import LayoutWrapper from "@/components/layout-wrapper"

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

