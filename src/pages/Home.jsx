import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Home.css';
import homebg from '../assets/homebg.jpg';

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="w-full min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section 
        className="w-full h-screen bg-cover bg-center bg-fixed relative flex flex-col justify-center items-center overflow-hidden"
        style={{backgroundImage: `url(${homebg})`}}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-950/60 to-slate-900/50"></div>
        
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="hero-title mb-2">
            Hey! I am Anjali Kumbhar
          </p>

          {/* Typing effect for the designation */}
          <div className="text-2xl font-bold text-pink-500 mb-10 font-fredoka drop-shadow-lg min-h-[40px]">
            <Typewriter
              options={{
                strings: ['A Software Engineer', 'A Creative Developer', 'A UI/UX Enthusiast'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>

          <h1 className="hero-title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Explore My Portfolio')
                  .pauseFor(2500)
                  .start();
              }}
            />
          </h1>

          <p className="hero-subtitle">
            Welcome to my interactive software engineering portfolio, where<br/>
            each step is filled with creativity and innovation.
          </p>

          <button 
            onClick={() => scrollToSection('about')} 
            className="cta-hero-button inline-block cursor-pointer mt-4"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;