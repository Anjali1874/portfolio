import React, { useState, useEffect, useRef } from 'react';
import '../styles/MagicCursor.css';

function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const particleCountRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create particles randomly
      if (Math.random() > 0.7) {
        const newParticle = {
          id: particleCountRef.current++,
          x: e.clientX,
          y: e.clientY,
          duration: Math.random() * 500 + 300
        };

        setParticles((prev) => [...prev, newParticle]);

        // Remove particle after animation completes
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, newParticle.duration);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Cursor glow circle */}
      <div
        className="magic-cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Cursor dot */}
      <div
        className="magic-cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Trailing particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="magic-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animation: `magic-particle-float ${particle.duration}ms ease-out forwards`
          }}
        />
      ))}

      {/* Cursor trail line */}
      <div
        className="magic-cursor-trail"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
    </>
  );
}

export default MagicCursor;
