import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
          <p className="py-6 text-gray-600 dark:text-gray-300">
            Let's connect and discuss potential opportunities
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8">
          <a 
            href="https://www.linkedin.com/in/vipulchavan47" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="text-6xl" />
          </a>
          <a 
            href="https://github.com/vipulchavan47" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            <FaGithub className="text-6xl" />
          </a>
          <a 
            href="mailto:vipulchavan3301@gmail.com"
            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600 transition-colors"
          >
            <FaEnvelope className="text-6xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;