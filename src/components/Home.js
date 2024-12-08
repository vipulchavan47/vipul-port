import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div 
      name="home" 
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Vipul Chavan
            </h1>
            <div className="text-2xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'Learner',
                  1000,
                  'Tech Enthusiast',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate about creating innovative solutions and pushing the boundaries of web technology. 
              I transform complex problems into elegant, efficient digital experiences.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            {/* <a 
              href="/resume.pdf" 
              target="_blank" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              Download Resume
            </a> */}
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;