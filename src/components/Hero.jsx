import React, { useState, useEffect } from 'react';

const Hero = () => {
  const words = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const [idx, setIdx] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('translate-y-[-100%] transition-transform duration-500');

      setTimeout(() => {
        setIdx((prevIdx) => (prevIdx + 1) % words.length);
        setAnimationClass('translate-y-[100%] transition-none');

        requestAnimationFrame(() => {
          setAnimationClass('translate-y-0 transition-transform duration-500');
        });
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-12 px-6 lg:px-24 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-mute">Hello, I'm</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display leading-none tracking-tighter text-textMain">
            Bilal <br />
            <span className="hero-title-outline">Khan</span>
          </h1>
          <div className="flex items-center space-x-4 text-xl md:text-2xl font-medium">
            <span className="text-mute">Freelancer &amp;</span>
            <div className="overflow-hidden relative h-[1.2em] w-64">
              <span className={`absolute top-0 left-0 whitespace-nowrap text-textMain font-bold ${animationClass}`}>
                {words[idx]}
              </span>
            </div>
          </div>
          <p className="text-lg md:text-xl max-w-lg text-mute leading-relaxed">
            I build modern web apps, APIs, and digital solutions. Turning ideas into powerful products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary px-8 py-4 text-base">View My Work</a>
            <a
              href="/Bilalkhan.pdf"
              download="Bilal_Khan_CV.pdf"
              className="border border-line hover:border-textMain text-textMain px-8 py-4 rounded-lg text-base font-semibold transition-all"
            >
              Download CV
            </a>
          </div>
          <div className="flex space-x-6 pt-2">
            <a href="https://github.com/Bilalkhan210" target="_blank" rel="noopener noreferrer" className="text-mute hover:text-textMain text-2xl transition-colors"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/bilal-khan-84764b2a5/" target="_blank" rel="noopener noreferrer" className="text-mute hover:text-textMain text-2xl transition-colors"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/923164881288" target="_blank" rel="noopener noreferrer" className="text-mute hover:text-textMain text-2xl transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden relative group border border-line">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="BilalKhan.jpeg"
              alt="Bilal Khan"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
