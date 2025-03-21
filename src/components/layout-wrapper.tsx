"use client";

import type React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Briefcase,
  Home,
  Info,
  LayoutList,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Home size={20} />, text: "Home", href: "/" },
    { icon: <User size={20} />, text: "About", href: "/about" },
    { icon: <LayoutList size={20} />, text: "Services", href: "/services" },
    { icon: <Briefcase size={20} />, text: "Portfolio", href: "/portfolio" },
    { icon: <MessageSquare size={20} />, text: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8f9ff] dark:bg-gray-900">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <Link href="/">
          <div className="relative">
            <span className="text-2xl font-serif italic font-semibold text-gray-800 dark:text-white">
              Cyber&Code
            </span>
            <div className="absolute -top-1 -left-2 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
            <div className="absolute -bottom-1 -right-2 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>
          </div>
        </Link>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <nav className="py-2">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="mb-1">
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      pathname === item.href
                        ? "border-l-4 border-red-500 bg-gray-50 dark:bg-gray-700"
                        : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span
                      className={`mr-3 ${
                        pathname === item.href
                          ? "text-red-500"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`${
                        pathname === item.href
                          ? "text-red-500 font-medium"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar */}
      <aside className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="p-6">
          <div className="flex items-center">
            <div className="relative">
              <span className="text-3xl font-serif italic font-semibold text-gray-800 dark:text-white">
                Cyber&Code
              </span>
              <div className="absolute -top-2 -left-4 w-6 h-6 border-t-2 border-l-2 border-red-500"></div>
              <div className="absolute -bottom-2 -right-4 w-6 h-6 border-b-2 border-r-2 border-red-500"></div>
            </div>
          </div>
        </div>
        <nav className="mt-8">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    pathname === item.href
                      ? "border-l-4 border-red-500 bg-gray-50 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  <span
                    className={`mr-3 ${
                      pathname === item.href
                        ? "text-red-500"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      pathname === item.href
                        ? "text-red-500 font-medium"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Top right controls on desktop */}
        <div className="absolute top-6 right-6 hidden md:flex items-center space-x-4 z-10">
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm">
            <Info size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm">
            <Settings size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
          <ThemeToggle />
        </div>

        {children}
      </main>
    </div>
  );
}
