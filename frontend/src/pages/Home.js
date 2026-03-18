import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">CyberArena</h1>
      <p className="mb-10 text-xl">Learn Real-World Cybersecurity Concepts Safely</p>
      <div className="flex gap-6">
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="bg-red-600 px-6 py-3 rounded-lg shadow-lg"
        >
          <Link to="/redteam">Red Team</Link>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg"
        >
          <Link to="/blueteam">Blue Team</Link>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="bg-cyan-500 px-6 py-3 rounded-lg shadow-lg"
        >
          <Link to="/osint">OSINT</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Home;