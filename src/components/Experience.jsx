import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from '../assets/data/experience';
import { X } from 'lucide-react';

const SkillLevel = ({ level }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-3 h-3 transform rotate-45 ${
            i <= level ? 'bg-yellow-400' : 'bg-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

export default function Experience() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f1630] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          EXPERIENCE
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTech(tech)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-xl p-4 flex items-center justify-center bg-[#1a2547]">
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-center">{tech.name}</h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-[#1a2547] rounded-2xl p-6 max-w-lg w-full relative"
              >
                <button
                  onClick={() => setSelectedTech(null)}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                  aria-label="Close modal"
                >
                  ✕
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#0f1630] rounded-lg p-3">
                    <img
                      src={selectedTech.icon}
                      alt={`${selectedTech.name} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedTech.name}</h3>
                    <div className="flex mt-2 space-x-3">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 mr-1 transform rotate-45 ${
                            i < selectedTech.skill_level ? 'bg-yellow-400' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white text-lg">
                  {selectedTech.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}