import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../styles/About.css';
import '../styles/Modal.css';
import aboutMap from '../assets/aboutMap.png';

function About() {
  const [activeModal, setActiveModal] = useState(null);

  const destinations = [
    {
      number: 1,
      title: 'Starting Point: Palus',
      // Adjusted positions to sit on the map islands
      position: { top: '35%', left: '30%' }, 
      content: [
        'I have started my journey from Palus, my native place.',
        'Inspired from my Father believing in the hardwork we do, we will get the thing we deserve...',
        'Completed my schooling from marathi school and moved to highschool.',
        'Completed my 5th to 12th education from Laxmanrao Kirloskar Vidyamandir, Palus',
        'Scored 97.60% in SSC and 95% in HSC'
      ]
    },
    {
      number: 2,
      title: 'Education Hub: Walchand College',
      position: { top: '38%', left: '72%' },
      content: [
        'Cracked the CET with score of 99.13 percentile and landed to a prestigious college.',
        'Walchand College of Engineering',
        'Computer Science Student',
        'Stood first in FY with 9.70 CGPA',
        'Participated in many hackathons',
        'Enhanced managerial skills at WCE ACM Club',
        'Worked on projects solving real-world problems',
        'Built strong DSA and other CS fundamentals with my peers'
      ]
    },
    {
      number: 3,
      title: 'Current Quest: Zensar Technologies',
      position: { top: '65%', left: '42%' },
      content: [
        'Joined Zensar Technologies as an intern in AI/ML and Software Engineer.',
        '1. Working on impactful automation projects',
        '2. Improving my skills day by day',
        '3. Exposure to company standards',
        '4. Chance to collaborate with experienced developers',
        '5. Understanding how corporate level projects evolve and develop'
      ]
    }
  ];

  return (
    <div id="about" className="w-full min-h-screen bg-slate-950 overflow-hidden">
      <section className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative flex flex-col justify-center items-center py-10 px-4">
        
        <div className="relative z-10 text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 font-fredoka drop-shadow-[0_5px_15px_rgba(255,105,180,0.3)]">
            My Journey
          </h1>
          <p className="text-xl text-pink-400 font-fredoka animate-pulse">
            Click markers to unlock my story
          </p>
        </div>

        {/* Interactive Treasure Map Container */}
        <div className="relative w-full max-w-5xl aspect-[16/10] flex items-center justify-center">
          
          {/* Map Wrapper with 3D Depth */}
          <div className="relative w-full h-full group">
            <img 
              src={aboutMap}
              alt="Journey Map" 
              className="w-full h-full object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                filter: 'sepia(20%) saturate(120%) drop-shadow(0 0 20px rgba(236, 72, 153, 0.2))'
              }}
            />

            {/* Marker Overlay - Scaled to the image */}
            <div className="absolute inset-0 w-full h-full">
              {destinations.map((dest, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModal(dest)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 focus:outline-none group z-30"
                  style={{
                    top: dest.position.top,
                    left: dest.position.left,
                  }}
                >
                  {/* Floating Animation Wrapper */}
                  <div className="animate-bounce-slow">
                    {/* Glowing Aura */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-pink-500/40 rounded-full blur-2xl group-hover:bg-pink-400/60 transition-all duration-500"></div>
                    
                    {/* Main Marker Circle */}
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full flex items-center justify-center font-black text-xl md:text-2xl text-white border-4 border-slate-900 shadow-[0_0_20px_rgba(236,72,153,0.8)] group-hover:shadow-[0_0_40px_rgba(236,72,153,1)] transition-all duration-300">
                      {dest.number}
                    </div>

                    {/* Quest Label */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-950/80 border border-pink-500/50 text-pink-300 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                      {dest.title.split(':')[0]}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        destination={activeModal}
      />
    </div>
  );
}

export default About;