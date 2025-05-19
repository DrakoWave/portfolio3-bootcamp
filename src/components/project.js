import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A React app to check the weather.",
      link: "https://example.com",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "To-Do List",
      description: "A simple task manager.",
      link: "https://example.com",
      technologies: ["React", "LocalStorage", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      link: "https://example.com",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication.",
      link: "https://example.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
  ];
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="pb-2  text-4xl font-bold bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            Showcase of all my works
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-red-600 transition-shadow duration-200 p-5"
            >
              <h2 className="text-2xl text-gray-800 mb-5 font-semibold">
                My Projects
              </h2>
              <p className=" text-center text-gray-600 pb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="mt-3 inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-all duration-200 "
              >
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
