import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "www.project1.com",
      category: "Web Design",
      image: "/6.jpg?height=600&width=800",
      description: "Modern e-commerce website with responsive design",
      demoUrl: "https://www.project1.com",
      githubUrl: "https://github.com/username/project1",
    },
    {
      id: 2,
      title: "www.project2.com",
      category: "Mobile App",
      image: "/5.jpg?height=600&width=800",
      description: "Food delivery application with real-time tracking",
      demoUrl: "https://www.project2.com",
      githubUrl: "https://github.com/username/project2",
    },
    {
      id: 3,
      title: "www.project3.com",
      category: "UI/UX Design",
      image: "/4.jpg?height=600&width=800",
      description: "Dashboard interface for analytics platform",
      demoUrl: "https://www.project3.com",
      githubUrl: "https://github.com/username/project3",
    },
    {
      id: 4,
      title: "www.project4.com",
      category: "Web Development",
      image: "/3.avif?height=600&width=800",
      description: "Portfolio website for a photography studio",
      demoUrl: "https://www.project4.com",
      githubUrl: "https://github.com/username/project4",
    },
    {
      id: 5,
      title: "www.project5.com",
      category: "Mobile App",
      image: "/1.avif?height=600&width=800",
      description: "Fitness tracking application with social features",
      demoUrl: "https://www.project5.com",
      githubUrl: "https://github.com/username/project5",
    },
    {
      id: 6,
      title: "www.project6.com",
      category: "Web Design",
      image: "/2.avif?height=600&width=800",
      description: "Corporate website with booking system",
      demoUrl: "https://www.project6.com",
      githubUrl: "https://github.com/username/project6",
    },
  ];

  // Categories for filtering (derived from projects)
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <div className="p-6 md:p-12 bg-[#f8f9ff] dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Portfolio
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-8"></div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-red-500 hover:bg-red-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-white dark:bg-gray-800 border-none shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        className="rounded-full bg-red-500 hover:bg-red-600"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        className="rounded-full bg-red-500 hover:bg-red-600"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
