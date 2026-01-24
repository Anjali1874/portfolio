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

function App() {
  return (
    <div className="w-full bg-slate-950 scroll-smooth">
      <Stars />
      <Asteroids />
      <div className="relative z-0">
        <MagicCursor />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <RunningText />
        <Projects />
        <Experience />
        <FAQs />
      </div>
    </div>
  )
}

export default App
