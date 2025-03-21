"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileNavProps {
  items: {
    icon: React.ReactNode
    text: string
    active?: boolean
  }[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="relative z-50">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X size={24} />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex-1">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className={`flex items-center py-3 ${
                        item.active ? "text-red-500 font-medium" : "text-gray-700 dark:text-gray-300"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

