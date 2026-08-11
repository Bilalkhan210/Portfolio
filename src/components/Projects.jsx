import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: "Agencu-Ai",
    tags: ["React & Tailwindcss"],
    description: "Built a responsive AI agency website with modern UI/UX, SEO optimization, and Vercel hosting",
    img: "/react1.png",
    link:"https://agency-ai-ivory-chi.vercel.app/"
  },
  {
    title: "Restaurant App",
    tags: ["Laravel & Mysql", "React.js & TypeScript"],
    description: "Developed a responsive CMS website with an intuitive admin dashboard for managing content, categories, users, and media efficiently.",
    img: "/rest.png",
    link:"https://shoqis.admksol.com/"
  },
  {
    title: "linkupvibes",
    tags: ["laravel & Mysql", "Vue.js & Tailwindcss"],
    description: "LinkUp is a meetup platform that helps users discover, join, and create events based on shared interests.",
    img: "/link.png",
    link:"https://linkupvibes.com/"
  },
  {
    title: "e-commerce",
    tags: ["React.js & Tailwindcss"],
    description: "Built a responsive React.js e-commerce website with a modern UI and seamless shopping experience.",
    img: "/E.png",
    link:"https://e-commerce-kohl-rho.vercel.app/"
  },
  {
    title: "App",
    tags: ["Laravel & Mysql"],
    description: "Developed secure RESTful APIs for the NoorConnect application using Laravel, ensuring efficient data management and seamless integration.",
    img: "/noor.jpeg",
    link:"https://play.google.com/store/apps/details?id=com.noorconnect"
  },
  {
    title: "E-commerce ",
    tags: ["Laravel & Mysql & React.js"],
    description: "A modern and responsive e-commerce web application designed to provide a smooth and user-friendly online shopping experience.",
    img: "/full.png",
    link:"https://frontend-elite-commerce.vercel.app/"
  },
 
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Set initial visible count based on screen size
      if (visibleCount <= 6) {
        setVisibleCount(mobile ? 3 : 6);
      }
    };

    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section id="projects" className="py-32 px-6 lg:px-24 border-t border-line transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-mute mb-6">Projects</p>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter leading-tight text-textMain">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <article
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 150}ms` }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden relative mb-6 border border-line">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.img} alt={project.title} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-4 w-full">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-wider text-white">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-white">
                      <span>View Project</span> <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="mt-16 flex justify-center animate-fade-in-up">
            <button
              onClick={handleLoadMore}
              className="group relative px-8 py-4 bg-transparent border border-line hover:border-accent rounded-xl overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 text-lg font-bold text-textMain group-hover:text-white transition-colors duration-300">
                Show More Projects
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
