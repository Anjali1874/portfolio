import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = ["home", "about", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-2 md:px-4">
      {/* Glass Navbar Container */}
      <div className="mx-auto mt-2 flex max-w-7xl items-center justify-between px-4 md:px-10 py-3 md:py-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]">

        {/* Logo - Fluid Typography */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-black tracking-widest group whitespace-nowrap"
        >
          <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            CreativeGirl
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="relative text-xs xl:text-sm font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-pink-400
                after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-red-500
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("faqs")}
          className="hidden lg:block rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 xl:px-8 xl:py-2.5 text-xs xl:text-sm font-black uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(236,72,153,0.55)]"
        >
          FAQs
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          aria-label="Open menu"
        >
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[105] bg-slate-950/98 backdrop-blur-3xl transition-all duration-500 lg:hidden ${
          menuOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        }`}
      >
        {/* --- NEW: Top Right Close Button --- */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 h-12 w-12 flex items-center justify-center text-white hover:text-pink-500 transition-colors z-[110]"
          aria-label="Close menu"
        >
          <span className="text-4xl font-light">✕</span>
        </button>

        {/* Menu Items - Optimized sizes for Mobile/Tablet */}
        <ul className="flex h-full flex-col items-center justify-center gap-6 sm:gap-10">
          {navItems.map((item, index) => (
            <li
              key={item}
              className={`transition-all duration-700 ${
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => scrollToSection(item)}
                className="text-2xl sm:text-4xl font-black uppercase tracking-[0.25em] text-white hover:text-pink-500 transition-colors"
              >
                {item}
              </button>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className={`pt-6 transition-all duration-700 delay-500 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={() => scrollToSection("faqs")}
              className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-10 py-3 sm:px-14 sm:py-4 text-lg sm:text-xl font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(236,72,153,0.65)]"
            >
              FAQs
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;