import { MobileNav } from "@/components/mobile-nav";
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
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const navItems = [
    { icon: <Home size={20} />, text: "Home", active: true },
    { icon: <User size={20} />, text: "About" },
    { icon: <LayoutList size={20} />, text: "Services" },
    { icon: <Briefcase size={20} />, text: "Portfolio" },
    { icon: <MessageSquare size={20} />, text: "Contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8f9ff] dark:bg-gray-900">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b">
        <div className="flex items-center">
          <div className="relative">
            <span className="text-2xl font-serif italic font-semibold text-gray-800 dark:text-white">
              Cod
            </span>
            <div className="absolute -top-1 -left-2 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
            <div className="absolute -bottom-1 -right-2 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>
          </div>
        </div>
        <MobileNav items={navItems} />
      </header>

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
                  href="#"
                  className={`flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    item.active
                      ? "border-l-4 border-red-500 bg-gray-50 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  <span
                    className={`mr-3 ${
                      item.active
                        ? "text-red-500"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      item.active
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
      <main className="flex-1 p-4 md:p-12 relative overflow-hidden">
        {/* Top right controls */}
        <div className="absolute top-4 md:top-6 right-4 md:right-6 flex items-center space-x-2 md:space-x-4">
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm">
            <Info size={18} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm">
            <Settings size={18} className="text-gray-600 dark:text-gray-300" />
          </button>
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-medium text-gray-700 dark:text-gray-200">
              Salut , je me nomme{" "}
              <span className="text-red-500 font-script">Haqeem</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium text-gray-700 dark:text-gray-200 mt-2">
              Je suis un <span className="text-red-500">SOFTWARE ENGINEER</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Je suis un développeur fullstack spécialiste en Python, avec une
              expérience de plus de 5 ans. Mon expertise consiste à créer des
              sites web, du design graphique, et bien plus encore. Actuellement,
              je teste TypeScript, mais je connais déjà Next.js, même si je ne
              l'ai pas encore utilisé avec TypeScript.
            </p>
            <button className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
              En savoir plus sur moi
            </button>
          </div>
          <div className="relative mt-8 lg:mt-0">
            {/* Red corner decorations */}
            <div className="absolute -top-4 right-0 w-16 md:w-24 h-16 md:h-24 border-t-4 border-r-4 border-red-500"></div>
            <div className="absolute -bottom-4 left-0 w-16 md:w-24 h-16 md:h-24 border-b-4 border-l-4 border-red-500"></div>

            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Profile Photo"
                width={400}
                height={500}
                className="rounded-md shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
