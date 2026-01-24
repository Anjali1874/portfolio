import React, { useState, useRef, useEffect } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const skillsData = [
    // Frontend (Cyan/Blue)
    { id: 1, name: 'React', x: 15, y: 28, color: '#00d4ff', category: 'Frontend', description: 'Building interactive UIs with React and Hooks' },
    { id: 2, name: 'Next.js', x: 10, y: 50, color: '#00d4ff', category: 'Frontend', description: 'Full-stack development with Next.js framework' },
    { id: 3, name: 'TypeScript', x: 35, y: 18, color: '#00d4ff', category: 'Frontend', description: 'Type-safe JavaScript development' },
    { id: 4, name: 'Tailwind CSS', x: 25, y: 45, color: '#00d4ff', category: 'Frontend', description: 'Utility-first CSS framework for rapid styling' },
    
    // Backend (Green)
    { id: 5, name: 'Node.js', x: 55, y: 22, color: '#00ff88', category: 'Backend', description: 'Server-side JavaScript runtime environment' },
    { id: 6, name: 'Python', x: 48, y: 50, color: '#00ff88', category: 'Backend', description: 'Versatile language for backend and AI/ML' },
    { id: 7, name: 'Express', x: 75, y: 35, color: '#00ff88', category: 'Backend', description: 'Minimal and flexible Node.js web framework' },
    { id: 8, name: 'FastAPI', x: 65, y: 65, color: '#00ff88', category: 'Backend', description: 'Modern, fast Python web framework' },
    
    // Database (Orange)
    { id: 9, name: 'PostgreSQL', x: 20, y: 75, color: '#ff9500', category: 'Database', description: 'Powerful open-source relational database' },
    { id: 10, name: 'MongoDB', x: 42, y: 80, color: '#ff9500', category: 'Database', description: 'NoSQL document database for flexible data' },
    
    // AI/ML & Tools (Purple/Magenta)
    { id: 11, name: 'OpenCV', x: 85, y: 18, color: '#b366ff', category: 'AI/ML', description: 'Computer vision and image processing library' },
    { id: 12, name: 'TensorFlow', x: 90, y: 50, color: '#b366ff', category: 'AI/ML', description: 'Machine learning and deep learning framework' },
    { id: 13, name: 'LangChain', x: 78, y: 70, color: '#b366ff', category: 'AI/ML', description: 'Framework for building LLM applications' },
    
    // DevOps & Security (Pink/Red)
    { id: 14, name: 'Git', x: 58, y: 68, color: '#ff4d7d', category: 'DevOps', description: 'Version control and collaboration' },
    { id: 15, name: 'Docker', x: 72, y: 78, color: '#ff4d7d', category: 'DevOps', description: 'Containerization for deployment' },
    { id: 16, name: 'JWT', x: 88, y: 65, color: '#ff4d7d', category: 'DevOps', description: 'Secure authentication and authorization' },
  ];

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Draw connecting lines with animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const updateCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const ctx = canvas.getContext('2d');
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Don't draw lines on mobile
      if (isMobile) return;

      // Draw lines connecting nearby skills with gradient
      skillsData.forEach((skill1, index1) => {
        skillsData.forEach((skill2, index2) => {
          if (index2 > index1) {
            const dx = (skill2.x - skill1.x) * width / 100;
            const dy = (skill2.y - skill1.y) * height / 100;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only connect if reasonably close
            if (distance < 280) {
              const x1 = (skill1.x * width) / 100;
              const y1 = (skill1.y * height) / 100;
              const x2 = (skill2.x * width) / 100;
              const y2 = (skill2.y * height) / 100;

              // Create gradient for line
              const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
              gradient.addColorStop(0, `${skill1.color}30`);
              gradient.addColorStop(1, `${skill2.color}30`);

              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        });
      });
    };

    updateCanvas();
    window.addEventListener('resize', updateCanvas);
    return () => window.removeEventListener('resize', updateCanvas);
  }, [isMobile]);

  return (
    <div id="skills" className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-20 md:pt-32 pb-20 px-4 md:px-6">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative text-center z-30 mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white font-fredoka mb-3" 
            style={{textShadow: '3px 3px 0px rgba(0,0,0,0.8)'}}>
          My Skill Network
        </h1>
        <p className="text-base md:text-xl text-gray-400 font-fredoka px-4">
          {isMobile ? 'Tap each skill to explore' : 'Hover over each skill to explore more'}
        </p>
        
        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 px-4">
          {[
            { name: 'Frontend', color: '#00d4ff' },
            { name: 'Backend', color: '#00ff88' },
            { name: 'Database', color: '#ff9500' },
            { name: 'AI/ML', color: '#b366ff' },
            { name: 'DevOps', color: '#ff4d7d' }
          ].map((cat) => (
            <div key={cat.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: cat.color,
                  boxShadow: `0 0 10px ${cat.color}66`
                }}
              />
              <span className="text-xs md:text-sm text-gray-300 font-fredoka">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description Box */}
      {hoveredSkill && (
        <div className="fixed top-32 md:top-40 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-md border-2 rounded-2xl p-4 md:p-5 z-50 max-w-xs md:max-w-sm mx-4 shadow-2xl animate-fade-in-up"
             style={{
               borderColor: hoveredSkill.color,
               boxShadow: `0 0 30px ${hoveredSkill.color}40, 0 0 60px ${hoveredSkill.color}20`
             }}>
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: hoveredSkill.color }}
            />
            <h3 className="text-white font-bold font-fredoka text-base md:text-lg">{hoveredSkill.name}</h3>
          </div>
          <p className="text-gray-300 font-fredoka text-xs md:text-sm leading-relaxed">
            {hoveredSkill.description}
          </p>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <span className="text-xs text-gray-400 font-fredoka">{hoveredSkill.category}</span>
          </div>
        </div>
      )}

      {/* Skills Container */}
      <div ref={containerRef} className="relative w-full h-[600px] md:h-[700px] lg:h-screen z-20 mt-8">
        {/* Canvas for connecting lines */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 top-0 left-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />

        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="skill-bubble absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20 transition-all duration-300"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`
            }}
            onMouseEnter={() => !isMobile && setHoveredSkill(skill)}
            onMouseLeave={() => !isMobile && setHoveredSkill(null)}
            onClick={() => isMobile && setHoveredSkill(hoveredSkill?.id === skill.id ? null : skill)}
          >
            {/* Outer glow on hover */}
            <div
              className="absolute inset-0 rounded-full blur-xl md:blur-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                width: isMobile ? '100px' : '140px',
                height: isMobile ? '100px' : '140px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%'
              }}
            ></div>

            {/* Pulsing ring effect */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
              style={{
                width: isMobile ? '70px' : '96px',
                height: isMobile ? '70px' : '96px',
                border: `2px solid ${skill.color}`,
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%'
              }}
            ></div>

            {/* Main circle */}
            <div
              className="relative rounded-full flex items-center justify-center font-bold text-white text-center border-2 md:border-3 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 md:group-hover:scale-125 group-active:scale-110"
              style={{
                width: isMobile ? '70px' : '96px',
                height: isMobile ? '70px' : '96px',
                borderColor: skill.color,
                boxShadow: `0 0 20px ${skill.color}33, inset 0 0 20px ${skill.color}11`,
                background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)`
              }}
            >
              <span className="text-xs md:text-sm font-fredoka px-2 leading-tight" style={{
                textShadow: `0 0 10px ${skill.color}66`
              }}>
                {skill.name}
              </span>
            </div>

            {/* Category badge on mobile */}
            {isMobile && (
              <div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-fredoka whitespace-nowrap"
              >
                {skill.category}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;