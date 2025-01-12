import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, githubLink }) => (
  <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl hover:translate-y-2 group">
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
    <div className="relative z-10 p-6">
      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
        {description}
      </p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg transform transition-all duration-300 group-hover:bg-blue-700 hover:scale-105"
      >
        <FaGithub className="mr-3 text-lg transform group-hover:scale-110 transition-transform" />
        View on GitHub
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'TypeTurtle: Typing Speed Tester',
    description: 'An interactive platform to test and improve typing speed and accuracy. Built using HTML, CSS, JavaScript.It offers real-time analytics (WPM and accuracy), and an engaging user experience.',
    githubLink: 'https://github.com/vipulchavan47/TypeTurtle',
    },
    {
      title: 'Employee Management System',
      description: 'A Java and MySQL-based application to manage employee records, including CRUD operations and data analytics.',
      githubLink: 'https://github.com/vipulchavan47/employee-management'
    },
    {
      title: 'Text-to-Speech Application',
      description: 'A Python-based app using pyttsx3 and pytesseract for converting text from images and PDFs into speech.',
      githubLink: 'https://github.com/vipulchavan47/python-tts'
    }
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="pb-8 text-center">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300">
            My Projects
          </h2>
          <p className="py-6 text-lg text-gray-600 dark:text-gray-300">
            Explore my recent projects:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
