import React from 'react';
import { motion } from 'framer-motion';
import zensar from "../assets/zensar.jpg";
import siemens from "../assets/siemens.jpg";
import acm from "../assets/acm.jpg";

// Added 'image' field to the data
const experiences = [
  {
    title: "Engineering Intern",
    company: "Zensar Technologies",
    duration: "Oct 2025 - Present",
    description: "Great opportunity to collaborate with cross-functional teams and brightest minds in industries.",
    color: "#ff69b4",
    image: zensar
  },
  {
    title: "Software Engineer Intern",
    company: "Siemens Digital Industries Software",
    duration: "Jun 2025 - Aug 2025",
    description: "Worked on Bazel-based build systems to improve build performance and maintainability.",
    color: "#b0b0ff",
    image: siemens
  },
  {
    title: "Event Lead",
    company: "WCE ACM Student Chapter",
    duration: "Apr 2024 - Jul 2025",
    description: "Led events and managed cross-functional teams for technical and non-technical initiatives.",
    color: "#ff1493",
    image: acm
  }
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl font-black text-white font-fredoka text-center mb-16 uppercase tracking-tighter"
        >
          My Experience
        </motion.h2>

        <div className="relative">
          {/* Central Dotted Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-slate-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`mb-20 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              
              {/* Glowing Quest Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="z-20 w-10 h-10 rounded-full bg-slate-900 border-4 border-pink-500 shadow-[0_0_15px_rgba(255,105,180,0.8)] flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </motion.div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-5/12 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-pink-500/50 transition-all group overflow-hidden shadow-2xl"
              >
                {/* Image Section with Gradient Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.company} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay to blend image with card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <span className="text-pink-500 font-bold text-sm tracking-widest uppercase">{exp.duration}</span>
                  <h3 className="text-2xl font-bold mt-1 group-hover:text-pink-400 transition-colors">{exp.title}</h3>
                  <h4 className="text-purple-400 font-medium mb-4 italic">@ {exp.company}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;