function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-4 bg-white/10 backdrop-blur-xl z-50 border-b border-white/20 shadow-lg">
      <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 text-2xl font-bold tracking-widest hover:opacity-80 transition-opacity cursor-pointer">
        <span className="text-3xl">⚡</span>
        <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">CreativeGirl</span>
      </button>
      
      <ul className="flex list-none gap-10 m-0">
        <li><button onClick={() => scrollToSection('home')} className="text-white text-base font-bold transition-colors duration-300 hover:text-pink-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-red-500 after:transition-all after:duration-300 hover:after:w-full bg-none border-none cursor-pointer" style={{textShadow: '0 2px 4px rgba(0,0,0,0.6)'}}>Home</button></li>
        <li><button onClick={() => scrollToSection('about')} className="text-white text-base font-bold transition-colors duration-300 hover:text-pink-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-red-500 after:transition-all after:duration-300 hover:after:w-full bg-none border-none cursor-pointer" style={{textShadow: '0 2px 4px rgba(0,0,0,0.6)'}}>About</button></li>
        <li><button onClick={() => scrollToSection('projects')} className="text-white text-base font-bold transition-colors duration-300 hover:text-pink-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-red-500 after:transition-all after:duration-300 hover:after:w-full bg-none border-none cursor-pointer" style={{textShadow: '0 2px 4px rgba(0,0,0,0.6)'}}>Projects</button></li>
        <li><button onClick={() => scrollToSection('experience')} className="text-white text-base font-bold transition-colors duration-300 hover:text-pink-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-red-500 after:transition-all after:duration-300 hover:after:w-full bg-none border-none cursor-pointer" style={{textShadow: '0 2px 4px rgba(0,0,0,0.6)'}}>Experience</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="text-white text-base font-bold transition-colors duration-300 hover:text-pink-400 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-red-500 after:transition-all after:duration-300 hover:after:w-full bg-none border-none cursor-pointer" style={{textShadow: '0 2px 4px rgba(0,0,0,0.6)'}}>Contact</button></li>
      </ul>
      
      <button onClick={() => scrollToSection('faqs')} className="bg-gradient-to-r from-pink-400 to-red-500 text-white px-8 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg shadow-pink-500/40 hover:shadow-pink-500/70 hover:-translate-y-1 hover:scale-105 active:scale-95 uppercase tracking-wider cursor-pointer border-none">FAQs</button>
    </nav>
  )
}

export default Navbar
