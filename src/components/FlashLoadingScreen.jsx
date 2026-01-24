import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

function FlashLoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Progress bar animation logic
    // We want it to reach 100% over roughly 1.8 seconds to leave 0.2s for the "100%" display
    const intervalTime = 50; 
    const totalSteps = 40; // 2000ms / 50ms
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // 2. Forced 2-second delay before calling onFinished
    const timeout = setTimeout(() => {
      onFinished();
    }, 3200); // 2000ms + 200ms buffer for smooth exit

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onFinished]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] bg-slate-950 flex flex-col items-center justify-center font-fredoka"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full max-w-md px-10 text-center">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-6xl mb-10"
        >
          ⚡
        </motion.div>

        <div className="text-pink-500 font-bold text-lg mb-6 tracking-widest uppercase h-8">
          <Typewriter
            options={{
              strings: ['Booting System...', 'Calibrating Map...', 'Ready to Explore'],
              autoStart: true,
              loop: true,
              delay: 40
            }}
          />
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
          />
        </div>

        <div className="text-white/50 text-sm font-mono italic">
          {Math.floor(progress)}%
        </div>
      </div>
    </motion.div>
  );
}

export default FlashLoadingScreen;