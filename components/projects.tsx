import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("common");
  const projects = [
    {
      title: "SkollCoaching",
      href: "https://skollcoaching.com",
      technologies: ["React", "GatsbyJS", "Tailwind CSS", "PWA"],
      description: t("skollcoaching_desc"),
      imageUrl: "/skollcoaching.png",
    },
    {
      title: "Portfolio",
      href: "https://alexandermay.dev",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      description: t("portfolio_desc"),
      imageUrl: "/portfolio.png",
    },
    {
      title: t("your_next_project"),
      href: "mailto:alexander.may@hey.com",
      technologies: [t("any")],
      description: t("your_next_project_desc"),
      imageUrl: "/pitching.png",
      buttonText: t("message_me"),
    },
  ];
  return (
    <div className="relative bg-gray-50 dark:bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white dark:bg-gray-800 h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            id="projects"
            className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t("projects")}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            {t("examples")}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-100 transform hover:scale-105 dark:border dark:border-white">
              <div className="flex-shrink-0 relative w-full h-48">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="space-x-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-auto">
                    <a
                      href={project.href}
                      rel="noreferrer"
                      target="_blank"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      {project.buttonText || t("visit")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
