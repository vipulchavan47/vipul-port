import React from 'react';
import { FaUniversity, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Get to know more about me and my journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Bio */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              Hi, I'm <span className="font-bold text-blue-600 dark:text-blue-400">Vipul Chavan</span>, an aspiring Information Technology Engineer from Mumbai University, set to graduate in 2026. I'm passionate about building innovative solutions and have experience in Java and web technologies. With a focus on user experience and problem-solving, I aim to contribute to impactful projects.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My expertise includes developing applications using Java, Python, and MySQL. I also have hands-on experience with tools like Git, VS Code, and IntelliJ. I'm eager to learn and take on challenges that drive growth and innovation.
            </p>
          </div>

          {/* Right Section: Education Card */}
          <div className="grid grid-cols-1 gap-6">
            {/* Education Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <FaUniversity className="text-blue-600 dark:text-blue-400 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                Bachelor of Engineering in Information Technology
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Terna Engineering College, Mumbai University
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Graduation: 2026
              </p>
            </div>

            {/* Experience Card (Commented out) */}
            {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-blue-600 dark:text-blue-400 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                Software Developer Intern
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                [Company Name] (Ongoing)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Focused on developing robust solutions using Java and Python.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
