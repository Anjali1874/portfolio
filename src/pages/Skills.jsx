import React, { useState, useRef, useEffect } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const skillsData = [
    { id: 1, name: 'React', x: 15, y: 28, color: '#00d4ff', category: 'Frontend' },
    { id: 2, name: 'Next.js', x: 10, y: 50, color: '#00d4ff', category: 'Frontend' },
    { id: 3, name: 'TypeScript', x: 35, y: 18, color: '#00d4ff', category: 'Frontend' },
    { id: 4, name: 'Tailwind CSS', x: 25, y: 45, color: '#00d4ff', category: 'Frontend' },
    { id: 5, name: 'Node.js', x: 55, y: 22, color: '#00ff88', category: 'Backend' },
    { id: 6, name: 'Python', x: 48, y: 50, color: '#00ff88', category: 'Backend' },
    { id: 7, name: 'Express', x: 75, y: 35, color: '#00ff88', category: 'Backend' },
    { id: 8, name: 'FastAPI', x: 65, y: 65, color: '#00ff88', category: 'Backend' },
    { id: 9, name: 'PostgreSQL', x: 20, y: 75, color: '#ff9500', category: 'Database' },
    { id: 10, name: 'MongoDB', x: 42, y: 80, color: '#ff9500', category: 'Database' },
    { id: 11, name: 'OpenCV', x: 85, y: 18, color: '#b366ff', category: 'AI/ML' },
    { id: 12, name: 'TensorFlow', x: 90, y: 50, color: '#b366ff', category: 'AI/ML' },
    { id: 13, name: 'LangChain', x: 78, y: 70, color: '#b366ff', category: 'AI/ML' },
    { id: 14, name: 'Git', x: 58, y: 68, color: '#ff4d7d', category: 'DevOps' },
    { id: 15, name: 'Docker', x: 72, y: 78, color: '#ff4d7d', category: 'DevOps' },
    { id: 16, name: 'JWT', x: 88, y: 65, color: '#ff4d7d', category: 'DevOps' },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const updateCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMobile) return;

      skillsData.forEach((skill1, index1) => {
        skillsData.forEach((skill2, index2) => {
          if (index2 > index1) {
            const x1 = (skill1.x * canvas.width) / 100;
            const y1 = (skill1.y * canvas.height) / 100;
            const x2 = (skill2.x * canvas.width) / 100;
            const y2 = (skill2.y * canvas.height) / 100;
            const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

            if (dist < 280) {
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
      
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
          />
        ))}
      </div>

      <div className="relative text-center z-30 mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white font-fredoka mb-3" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.8)'}}>
          My Skill Network
        </h1>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
          {[{ name: 'Frontend', color: '#00d4ff' }, { name: 'Backend', color: '#00ff88' }, { name: 'Database', color: '#ff9500' }, { name: 'AI/ML', color: '#b366ff' }, { name: 'DevOps', color: '#ff4d7d' }].map((cat) => (
            <div key={cat.name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
              <span className="text-[10px] md:text-xs text-gray-400 font-fredoka uppercase tracking-wider">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="relative w-full h-[500px] md:h-[600px] lg:h-[80vh] z-20 mt-8">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-bubble absolute transform -translate-x-1/2 -translate-y-1/2 cursor-default group z-20"
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`, width: isMobile ? '80px' : '120px', height: isMobile ? '80px' : '120px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
            />

            {/* Main Bubble */}
            <div className="relative rounded-full flex items-center justify-center font-bold text-white text-center border-2 transition-all duration-300 group-hover:scale-110 shadow-lg"
              style={{ width: isMobile ? '60px' : '85px', height: isMobile ? '60px' : '85px', borderColor: skill.color, background: `rgba(15, 23, 42, 0.95)`, boxShadow: `0 0 15px ${skill.color}20` }}>
              <span className="text-[10px] md:text-xs font-fredoka px-2 leading-tight uppercase tracking-tighter">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;