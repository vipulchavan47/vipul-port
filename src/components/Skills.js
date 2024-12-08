import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiOracle, SiPython, SiC, SiMysql, SiGit, SiGithub, SiIntellijidea, SiLinux } from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import { SiVsco } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Java', icon: SiOracle },
  { name: 'Python', icon: SiPython },
  { name: 'C', icon: SiC },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'VS Code', icon: SiVsco },
  { name: 'IntelliJ', icon: SiIntellijidea },
  { name: 'Linux', icon: SiLinux },
  { name: 'Windows', icon: FaWindows },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                <skill.icon className="text-blue-600 dark:text-blue-400 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
