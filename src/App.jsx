import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css'
import Navbar from './components/Navbar'
import MagicCursor from './components/MagicCursor'
import Stars from './components/Stars'
import Asteroids from './components/Asteroids'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import RunningText from './components/RunningText'
import Projects from './pages/Projects'
import FAQs from './pages/FAQs'
import Experience from './pages/Experience'
import FlashLoadingScreen from './components/FlashLoadingScreen' // Ensure the path is correct
import AnimatedPinDemo from './components/AnimatedPinDemo';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full bg-slate-950 scroll-smooth">
      {/* 1. The Flash Loading Screen Logic */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <FlashLoadingScreen onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Main Content - Wrapped in motion to fade in after loading */}
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative z-0"
        >
          <Stars />
          <Asteroids />
          <MagicCursor />
          <Navbar />
          
          <main>
            <Home />
            <About />
            <Skills />
            <RunningText />
            <Projects />
            <Experience />
            <FAQs />
          </main>
        </motion.div>
      )}
    </div>
  )
}

export default App