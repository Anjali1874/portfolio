import React, { useState, useEffect, useRef } from 'react';
import '../styles/MagicCursor.css';

function MagicCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState([]);
  const particleCountRef = useRef(0);

  useEffect(() => {
    const handleMove = (x, y) => {
      setPosition({ x, y });

      // Create a "burst" of stars
      const newParticle = {
        id: particleCountRef.current++,
        x,
        y,
        // Randomize the "shoot" direction
        tx: (Math.random() - 0.5) * 100,
        ty: (Math.random() - 0.5) * 100,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 600 + 400,
        // Magic colors: Pink, Gold, Cyan
        color: ['#ff69b4', '#ffd700', '#00d4ff'][Math.floor(Math.random() * 3)]
      };

      setParticles((prev) => [...prev, newParticle]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, newParticle.duration);
    };

    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    
    // Support for Mobile Touch
    const onTouchMove = (e) => {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div className="magic-container">
      {/* Magic Stick Tip (The Glow) */}
      <div
        className="magic-cursor-glow"
        style={{ left: position.x, top: position.y }}
      />

      {/* Star Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="magic-star"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            animationDuration: `${p.duration}ms`
          }}
        />
      ))}
    </div>
  );
}

export default MagicCursor;