import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Megaphone,
  Monitor,
  Palette,
  Search,
  Smartphone,
} from "lucide-react";

export default function ServicesPage() {
  // Services data
  const services = [
    {
      icon: (
        <Smartphone className="w-12 h-12 text-red-500 bg-red-100 dark:bg-red-900/20 p-2 rounded-full" />
      ),
      title: "Développement Mobile",
      description:
        "Création d'applications mobiles performantes et optimisées pour iOS et Android en utilisant React Native.",
    },
    {
      icon: (
        <Monitor className="w-12 h-12 text-red-500 bg-red-100 dark:bg-red-900/20 p-2 rounded-full" />
      ),
      title: "Développement Web",
      description:
        "Conception et développement d'interfaces modernes et interactives avec Next.js, React et TypeScript.",
    },
    {
      icon: (
        <Palette className="w-12 h-12 text-red-500 bg-red-100 dark:bg-red-900/20 p-2 rounded-full" />
      ),
      title: "Design UI/UX",
      description:
        "Création d'interfaces attrayantes et ergonomiques en utilisant les meilleures pratiques du design moderne.",
    },
    {
      icon: (
        <Code className="w-12 h-12 text-red-500 bg-red-100 dark:bg-red-900/20 p-2 rounded-full" />
      ),
      title: "Développement Backend",
      description:
        "Développement de solutions backend robustes et sécurisées avec Django, Node.js et bases de données SQL/NoSQL.",
    },
    {
      icon: (
        <Search className="w-12 h-12 text-red-500 bg-red-100 dark:bg-red-900/20 p-2 rounded-full" />
      ),
      title: "SEO & Optimisation",
      description:
        "Amélioration des performances et du référencement des sites web pour un meilleur classement sur Google.",
    },
    {
      icon: (
        <Megaphone className="w-12 h-12 text-red-500 bg-red-100 dark:bg-red-900/20 p-2 rounded-full" />
      ),
      title: "Marketing Digital",
      description:
        "Stratégies de marketing numérique et gestion de campagnes publicitaires pour augmenter la visibilité.",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-[#f8f9ff] dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Services
          </h1>
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
