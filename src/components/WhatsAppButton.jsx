import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923164881288"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl transition-all transform hover:scale-110 active:scale-95 animate-bounce hover:animate-none"
      aria-label="Contact on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
