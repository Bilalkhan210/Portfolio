import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Set default theme to dark
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] px-6 py-4 lg:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled || isOpen ? 'bg-surface/95 backdrop-blur-md border-b border-line shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex-shrink-0 relative z-[101]">
          <a href="#" className="text-2xl font-bold font-display tracking-tight text-white bg-accent px-3 py-1 rounded shadow-lg shadow-purple-900/20">BK</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link font-semibold transition-colors">
              {link.name}
            </a>
          ))}

          <a href="#contact" className="btn-primary py-2.5 px-6 text-sm">
            Hire Me
          </a>
        </nav>

        <div className="flex items-center space-x-4 md:hidden relative z-[101]">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-textMain focus:outline-none bg-surface/50 rounded-lg border border-line"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${isOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ease-in-out top-2 ${isOpen ? 'opacity-0 -translate-x-2' : 'opacity-100'}`}></span>
              <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)}></div>
        <nav className={`absolute top-0 right-0 w-[80%] h-full bg-surface border-l border-line flex flex-col pt-32 px-10 space-y-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link, i) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-2xl font-bold font-display text-mute hover:text-textMain transition-all`}>
              <span className="text-accent mr-4 text-lg">0{i + 1}.</span>
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center py-4 text-lg">
            Get In Touch
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
