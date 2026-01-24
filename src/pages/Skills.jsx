import React, { useState, useRef, useEffect } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const canvasRef = useRef(null);

  const skillsData = [
    // Frontend (Cyan/Blue)
    { id: 1, name: 'React', x: 15, y: 25, color: '#00d4ff', description: 'Building interactive UIs with React and Hooks' },
    { id: 2, name: 'Next.js', x: 10, y: 50, color: '#00d4ff', description: 'Full-stack development with Next.js framework' },
    { id: 3, name: 'TypeScript', x: 35, y: 15, color: '#00d4ff', description: 'Type-safe JavaScript development' },
    { id: 4, name: 'Tailwind CSS', x: 25, y: 45, color: '#00d4ff', description: 'Utility-first CSS framework for rapid styling' },
    
    // Backend (Green)
    { id: 5, name: 'Node.js', x: 55, y: 20, color: '#00ff88', description: 'Server-side JavaScript runtime environment' },
    { id: 6, name: 'Python', x: 48, y: 50, color: '#00ff88', description: 'Versatile language for backend and AI/ML' },
    { id: 7, name: 'Express', x: 75, y: 35, color: '#00ff88', description: 'Minimal and flexible Node.js web framework' },
    { id: 8, name: 'FastAPI', x: 65, y: 65, color: '#00ff88', description: 'Modern, fast Python web framework' },
    
    // Database (Orange)
    { id: 9, name: 'PostgreSQL', x: 20, y: 75, color: '#ff9500', description: 'Powerful open-source relational database' },
    { id: 10, name: 'MongoDB', x: 42, y: 80, color: '#ff9500', description: 'NoSQL document database for flexible data' },
    
    // AI/ML & Tools (Purple/Magenta)
    { id: 11, name: 'OpenCV', x: 85, y: 15, color: '#b366ff', description: 'Computer vision and image processing library' },
    { id: 12, name: 'TensorFlow', x: 90, y: 50, color: '#b366ff', description: 'Machine learning and deep learning framework' },
    { id: 13, name: 'LangChain', x: 78, y: 70, color: '#b366ff', description: 'Framework for building LLM applications' },
    
    // DevOps & Security (Pink/Red)
    { id: 14, name: 'Git', x: 58, y: 70, color: '#ff4d7d', description: 'Version control and collaboration' },
    { id: 15, name: 'Docker', x: 72, y: 78, color: '#ff4d7d', description: 'Containerization for deployment' },
    { id: 16, name: 'JWT', x: 88, y: 65, color: '#ff4d7d', description: 'Secure authentication and authorization' },
  ];

  // Draw connecting lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)';
    ctx.lineWidth = 1;

    // Draw lines connecting nearby skills
    skillsData.forEach((skill1, index1) => {
      skillsData.forEach((skill2, index2) => {
        if (index2 > index1) {
          const dx = (skill2.x - skill1.x) * width / 100;
          const dy = (skill2.y - skill1.y) * height / 100;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only connect if reasonably close
          if (distance < 250) {
            ctx.beginPath();
            ctx.moveTo((skill1.x * width) / 100, (skill1.y * height) / 100);
            ctx.lineTo((skill2.x * width) / 100, (skill2.y * height) / 100);
            ctx.stroke();
          }
        }
      });
    });
  }, []);

  return (
    <div id="skills" className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-32 pb-20 px-6">
      {/* Canvas for connecting lines */}
      <canvas
        ref={canvasRef}
        width={typeof window !== 'undefined' ? window.innerWidth : 1200}
        height={typeof window !== 'undefined' ? window.innerHeight : 800}
        className="absolute inset-0 top-0 left-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Header */}
      <div className="relative text-center z-30 mb-2 mt-6" >
        <h1 className="text-6xl font-black text-white font-fredoka" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.8)'}}>
          My Skill Network
        </h1>
        <p className="text-xl text-gray-400 mt-4 font-fredoka">
          Hover over each skill to explore more
        </p>
      </div>

      {/* Description Box */}
      {hoveredSkill && (
        <div className="fixed top-40 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur border border-pink-400/50 rounded-xl p-4 z-40 max-w-xs animate-fade-in-up">
          <p className="text-white text-center font-fredoka text-sm">
            {hoveredSkill.description}
          </p>
        </div>
      )}

      {/* Skills Container */}
      <div className="relative w-full h-screen z-20">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="skill-bubble absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`
            }}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Outer glow on hover */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: skill.color,
                width: '140px',
                height: '140px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%'
              }}
            ></div>

            {/* Main circle */}
            <div
              className="relative w-24 h-24 rounded-full flex items-center justify-center font-bold text-white text-center border-2 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-125"
              style={{
                borderColor: skill.color,
                boxShadow: `0 0 30px ${skill.color}22`,
                background: 'rgba(15, 23, 42, 0.8)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 50px ${skill.color}33, 0 0 100px ${skill.color}11`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}22`;
              }}
            >
              <span className="text-sm font-fredoka px-2">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
