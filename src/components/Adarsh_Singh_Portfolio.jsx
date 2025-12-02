import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center py-16 px-6">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Adarsh Singh
        </h1>
        <p className="text-xl text-gray-300">
          UI/UX Designer • Frontend Developer • Creative Thinker
        </p>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-300">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am a passionate front-end developer and designer who loves creating
          beautiful and meaningful digital experiences. I specialize in modern
          UI/UX, responsive web design, and motion-rich interfaces.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 max-w-3xl"
      >
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300 text-center text-lg">
          <div className="bg-gray-800 py-4 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition">React</div>
          <div className="bg-gray-800 py-4 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition">Tailwind CSS</div>
          <div className="bg-gray-800 py-4 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition">Figma</div>
          <div className="bg-gray-800 py-4 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition">UI Animation</div>
          <div className="bg-gray-800 py-4 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition">JavaScript</div>
          <div className="bg-gray-800 py-4 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition">Wireframing</div>
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold text-green-300 mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-6 text-lg">Let’s work together! Reach me at:</p>
        <a
          href="mailto:adarshsingh5846@gmail.com"
          className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-500 transition text-lg"
        >
          Email Me
        </a>
      </motion.div>
    </div>
  );
}
