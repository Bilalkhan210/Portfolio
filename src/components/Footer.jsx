import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 lg:px-24 border-t border-line bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">

          {/* Column 1: Logo & Brief */}
          <div className="space-y-6">
            <a href="#" className="inline-block text-2xl font-bold font-display tracking-tight text-white bg-accent px-3 py-1 rounded">BK</a>
            <p className="text-mute leading-relaxed">
              Full Stack Developer specializing in modern web technologies and user-centric digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Bilalkhan210" target="_blank" rel="noopener noreferrer" className="text-mute hover:text-white transition-colors"><i className="fa-brands fa-github text-xl"></i></a>
              <a href="https://www.linkedin.com/in/bilal-khan-84764b2a5/" target="_blank" rel="noopener noreferrer" className="text-mute hover:text-white transition-colors"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
              <a href="https://wa.me/923164881288" target="_blank" rel="noopener noreferrer" className="text-mute hover:text-white transition-colors"><i className="fa-brands fa-whatsapp text-xl"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-mute hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-mute hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="text-mute hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-mute hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-mute">
                <i className="fa-solid fa-phone text-accent mt-1"></i>
                <span>+92 316 4881288</span>
              </li>
              <li className="flex items-start space-x-3 text-mute">
                <i className="fa-solid fa-envelope text-accent mt-1"></i>
                <span className="break-all">bilalkhan2107007@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-mute">
                <i className="fa-solid fa-location-dot text-accent mt-1"></i>
                <span>Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter or Extra Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display text-white">Newsletter</h4>
            <p className="text-sm text-mute leading-relaxed">Subscribe to get latest updates and news.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-ink border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-2 top-2 bg-accent hover:bg-violet-600 p-1.5 rounded-md transition-colors">
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom: Copyright */}
        <div className="pt-8 border-t border-line text-center">
          <p className="text-mute text-sm">&copy; 2025 Bilal Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
