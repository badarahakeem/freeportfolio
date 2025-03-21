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
import type React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8f9ff] dark:bg-gray-900">
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
            <NavItem icon={<Home size={20} />} text="Home" href="/" />
            <NavItem
              icon={<User size={20} />}
              text="About"
              href="/about"
              active
            />
            <NavItem
              icon={<LayoutList size={20} />}
              text="Services"
              href="/services"
            />
            <NavItem
              icon={<Briefcase size={20} />}
              text="Portfolio"
              href="/portfolio"
            />
            <NavItem
              icon={<MessageSquare size={20} />}
              text="Contact"
              href="/contact"
            />
          </ul>
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 w-full">
        <Link href="/">
          <div className="relative">
            <span className="text-2xl font-serif italic font-semibold text-gray-800 dark:text-white">
              HAQEEM DEV
            </span>
            <div className="absolute -top-1 -left-2 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
            <div className="absolute -bottom-1 -right-2 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>
          </div>
        </Link>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Top right controls on desktop */}
        <div className="absolute top-6 right-6 hidden md:flex items-center space-x-4">
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

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  active?: boolean;
}

function NavItem({ icon, text, href, active = false }: NavItemProps) {
  return (
    <li className="mb-2">
      <Link
        href={href}
        className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
          active ? "border-l-4 border-red-500 bg-gray-50 dark:bg-gray-700" : ""
        }`}
      >
        <span
          className={`mr-3 ${
            active ? "text-red-500" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {icon}
        </span>
        <span
          className={`${
            active
              ? "text-red-500 font-medium"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
