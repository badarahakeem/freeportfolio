import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function AboutPage() {
  // Skills data with percentages
  const skills = [
    { name: "Python", percentage: 98 },
    { name: "Django", percentage: 92 },
    { name: "Java", percentage: 70 },
    { name: "Next.js", percentage: 90 },
    { name: "TypeScript", percentage: 55 },
    { name: "React Native", percentage: 90 },
  ];

  // Education data
  const education = [
    {
      period: "2016",
      degree: "Baccalauréat",
      description:
        "Obtention du baccalauréat en 2016, marquant le début de mon parcours académique en informatique.",
    },
    {
      period: "2018",
      degree: "BTS en Informatique",
      description:
        "Diplôme de Brevet de Technicien Supérieur (BTS) en 2018, consolidant mes bases en développement et en gestion de systèmes.",
    },
    {
      period: "2019",
      degree: "Licence 3 en Informatique - UCAD",
      description:
        "Licence 3 en informatique obtenue à l'Université Cheikh Anta Diop de Dakar, approfondissant mes compétences en programmation et en algorithmique.",
    },
    {
      period: "2023",
      degree: "Master en Informatique - OpenClassrooms",
      description:
        "Master en informatique obtenu en 2023 sur OpenClassrooms, avec une spécialisation en développement web et mobile.",
    },
  ];

  // Experience data
  const experience = [
    {
      period: "2019",
      position: "Stagiaire Développeur",
      company: "TechInnov Solutions",
      description:
        "Développement et maintenance d'applications web en Python et Django.",
    },
    {
      period: "2020 - 2021",
      position: "Développeur Full-Stack",
      company: "SoftEdge Technologies",
      description:
        "Conception et développement d'applications en React Native. Collaboration avec les équipes backend en Django.",
    },
    {
      period: "2021 - 2022",
      position: "Ingénieur Logiciel",
      company: "SoftEdge Technologies",
      description:
        "Optimisation des performances des applications et mise en place d'architectures scalables. Déploiement sur AWS et gestion de bases de données SQL et NoSQL.",
    },
    {
      period: "2022 - 2023",
      position: "Lead Développeur Backend/Frontend",
      company: "CodeWave Solutions",
      description:
        "Responsable de la conception UI/UX et du développement frontend avec ReactJs, TailwindCSS et Next.js et backend avec Django et PHP. Encadrement d'une équipe de développeurs juniors.",
    },
    {
      period: "2023 - Présent",
      position: "Architecte Logiciel",
      company: "CodeWave Solutions",
      description:
        "Définition des architectures logicielles, intégration des meilleures pratiques DevOps et veille technologique pour améliorer la qualité des produits.",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-[#f8f9ff] dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            A Propos de Moi
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-6"></div>

          <h2 className="text-3xl font-medium text-gray-700 dark:text-gray-200 mb-4">
            Je suis Haqeem et{" "}
            <span className="text-red-500">Ingenieur Logiciel</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aspernatur mollitia officia rem doloremque! Esse veniam vel repellat
            ipsa molestiae consequatur vitae! Quis vitae fuga, eos aperiam a
            officiis nobis? Esse veniam vel repellat ipsa molestiae consequatur
            vitae! Quis vitae fuga, eos apeEsse veniam vel repellat ipsa
            molestiae consequatur vitae! Quis vitae fuga, eos ape
          </p>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Date de Naissance :
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  5 juillet 1999
                </span>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Site Web :
                </span>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500"
                >
                  www.domain.com
                </a>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Niveau d'etude :
                </span>
                <span className="text-gray-600 dark:text-gray-400">Bac +5</span>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Ville :
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Dakar/ Senegal
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Age :
                </span>
                <span className="text-gray-600 dark:text-gray-400">25</span>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Email :
                </span>
                <a
                  href="mailto:info@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500"
                >
                  info@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Téléphone :
                </span>
                <a
                  href="tel:+221 77 123 45 67"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500"
                >
                  +221 77 123 45 67
                </a>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300 w-32">
                  Freelance :
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Disponible
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-6">
              Telecharger CV
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-6">
              Contacter Moi
            </Button>
          </div>
        </div>

        {/* Education and Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Education
            </h2>
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-500"></div>

              {education.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Experience
            </h2>
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-500"></div>

              {experience.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {item.position}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
