import React from 'react';

const services = [
  {
    icon: "fa-code",
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern frameworks like React, Next.js, and Node.js."
  },
  {
    icon: "fa-database",
    title: "Backend Development",
    description: "Developing robust and scalable server-side architectures, APIs, and database management systems using PHP, Laravel, and Node.js."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 lg:px-24 border-t border-line transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-mute mb-6">What I Do</p>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter leading-tight text-textMain">
            My Services &amp; <br /> Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-surface border border-line hover:border-accent transition-all group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <i className={`fa-solid ${service.icon} text-2xl text-accent group-hover:text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-textMain">{service.title}</h3>
              <p className="text-mute leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
