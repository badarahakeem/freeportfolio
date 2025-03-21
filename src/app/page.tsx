"use client";

import LayoutWrapper from "@/components/layout-wrapper";
import { Briefcase, Home, LayoutList, MessageSquare, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
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
    <LayoutWrapper>
      {/* Hero Section */}
      <div className="p-6 md:p-12 mt-6 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-200">
              Salut , je me nomme{" "}
              <span className="text-red-500 font-script">Haqeem</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-200 mt-2">
              <span className="text-red-500">SOFTWARE ENGINEER</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
              Je suis un développeur fullstack spécialiste en Python, avec une
              expérience de plus de 5 ans. Mon expertise consiste à créer des
              sites web, du design graphique, et bien plus encore. Actuellement,
              je teste TypeScript, mais je connais déjà Next.js, même si je ne
              l'ai pas encore utilisé avec TypeScript.
            </p>
            <button className="mt-8 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
              En savoir plus sur moi
            </button>
          </div>
          <div className="relative">
            {/* Red corner decorations */}
            <div className="absolute -top-4 right-0 w-24 h-24 border-t-4 border-r-4 border-red-500"></div>
            <div className="absolute -bottom-4 left-0 w-24 h-24 border-b-4 border-l-4 border-red-500"></div>

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
      </div>
    </LayoutWrapper>
  );
}
