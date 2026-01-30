
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";

const cards = [
  {
    title: "Frontend",
    color: "from-cyan-400 via-blue-400 to-purple-400",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "Next.js"
    ]
  },
  {
    title: "Backend",
    color: "from-emerald-400 via-green-400 to-teal-400",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    title: "DevOps",
    color: "from-pink-400 via-fuchsia-500 to-rose-400",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "JWT",
      "CI/CD"
    ]
  }
];

export function AnimatedPinDemo() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  return (
    <div className="min-h-[30rem] w-full flex flex-wrap gap-6 items-center justify-center p-4">
      {cards.map((card, i) => (
        <PinContainer
          key={card.title}
          title={card.title}
          href={undefined}
        >
          <div
            className={
              `relative flex flex-col p-5 tracking-tight w-[90vw] max-w-xs sm:w-[18rem] sm:h-[18rem] h-[60vw] max-h-80 rounded-2xl ` +
              `bg-[rgba(15,23,42,0.85)] border border-pink-400/30 shadow-[0_4px_32px_0_rgba(236,72,153,0.10)] backdrop-blur-xl group cursor-pointer transition-all duration-300 font-fredoka`
            }
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className="pb-2 m-0 font-extrabold text-2xl text-white text-center drop-shadow font-fredoka tracking-wide">
              {card.title}
            </h3>
            {/* Show logos and a prompt when not hovered */}
            {hovered !== i && (
              <div className="flex-1 w-full flex flex-col items-center justify-center gap-4">
                <div className="flex flex-wrap gap-4 justify-center items-center mb-2">
                  {card.title === 'Frontend' && (
                    <>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10 bg-white rounded-full p-1" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-10 h-10" />
                    </>
                  )}
                  {card.title === 'Backend' && (
                    <>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-10 h-10 bg-white rounded-full p-1" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10" />
                    </>
                  )}
                  {card.title === 'DevOps' && (
                    <>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-10 h-10 bg-white rounded-full p-1" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-plain.svg" alt="JWT" className="w-10 h-10" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="CI/CD" className="w-10 h-10" />
                    </>
                  )}
                </div>
                <span className="text-base text-white/60 font-medium">Hover to see all skills</span>
              </div>
            )}
            <AnimatePresence>
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 rounded-2xl z-10 backdrop-blur-xl border border-pink-400/20 shadow-lg"
                >
                  <h4 className="text-2xl font-extrabold text-white mb-4 tracking-wide font-fredoka">Technologies</h4>
                  <ul className="flex flex-wrap gap-3 justify-center">
                    {card.skills.map(skill => (
                      <li key={skill} className="px-4 py-2 bg-pink-400/20 rounded-full text-lg font-bold text-pink-100 border border-pink-400/40 shadow-md font-fredoka tracking-wide">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}

export default AnimatedPinDemo;
