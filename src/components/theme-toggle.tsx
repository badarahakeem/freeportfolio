"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-full bg-white shadow-sm">
        <Moon size={20} className="text-gray-600" />
      </button>
    )
  }

  return (
    <button
      className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-gray-600" />}
    </button>
  )
}

