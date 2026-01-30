import React, { useState, useRef, useEffect } from 'react';
import '../styles/Skills.css';
import AnimatedPinDemo from '../components/AnimatedPinDemo';

function Skills() {
  return (
    <div className="w-full min-h-screen bg-transparent flex flex-col items-center justify-start pt-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-wider font-fredoka drop-shadow-lg text-center">
        <span className="hero-title mb-2">My Skills</span>
      </h2>
      <AnimatedPinDemo />
    </div>
  );
}

export default Skills;