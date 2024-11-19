import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeDetails = {
    name: "Prathamesh R. Kamble",
    contact: {
      email: "truepratham2801@gmail.com",
      phone: "9867104527",
      address: "A/301 Shree Sadguru Apt, Shiv Sena Shaka, Central Park, Nallasopara (East) - 401209"
    },
    profile: "Recently graduated with a B.Sc. in Computer Science, highly interested in Full Stack Development. Excels in collaborative environments with strong problem-solving skills.",
    education: [
      {
        period: "2022 – 2024",
        degree: "BSc Computer Science",
        institution: "Annasaheb Vartak College",
        location: "Vasai"
      },
      {
        period: "2021 – 2022",
        degree: "HSC",
        institution: "Viva College of Science and Arts",
        location: "Virar"
      },
      {
        period: "2018 – 2019",
        degree: "SSC",
        institution: "St. Aloysius High School",
        location: "Nallasopara"
      }
    ],
    experience: [
      {
        period: "2024/04 – Present",
        role: "Software Trainer",
        company: "I-Tech"
      }
    ],
    skills: {
      webDevelopment: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      programming: ["React.js", "Node.js", "Express.js", "Core Java"],
      languages: ["C/C++"],
      spoken: ["English", "Hindi", "Marathi"]
    },
    projects: [
      "Visitor Management System",
      "Personal Portfolio"
    ]
  };

  const handleDownload = () => {
    // Replace with actual path to your resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-[#151c35] text-white rounded-xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-400">Resume</h2>
              <button 
                onClick={onClose} 
                className="hover:bg-red-500/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Personal Info */}
              <section>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <p><strong>Name:</strong> {resumeDetails.name}</p>
                  <p><strong>Email:</strong> {resumeDetails.contact.email}</p>
                  <p><strong>Phone:</strong> {resumeDetails.contact.phone}</p>
                  <p><strong>Address:</strong> {resumeDetails.contact.address}</p>
                </div>
              </section>

              {/* Profile */}
              <section>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Profile</h3>
                <p>{resumeDetails.profile}</p>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Education</h3>
                {resumeDetails.education.map((edu, index) => (
                  <div key={index} className="mb-3 bg-[#1f2937] p-4 rounded-lg">
                    <p className="font-bold text-blue-300">{edu.degree}</p>
                    <p>{edu.institution}, {edu.location}</p>
                    <p className="text-gray-400">{edu.period}</p>
                  </div>
                ))}
              </section>

              {/* Skills */}
              <section>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeDetails.skills.webDevelopment.map((skill, index) => (
                        <span key={index} className="bg-blue-500/20 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeDetails.skills.programming.map((skill, index) => (
                        <span key={index} className="bg-teal-500/20 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Projects</h3>
                <ul className="list-disc pl-5">
                  {resumeDetails.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button 
                onClick={handleDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
