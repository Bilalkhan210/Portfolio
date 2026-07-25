import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const StatItem = ({ number, label }) => {
  const numericValue = parseInt(number);
  const suffix = number.replace(/[0-9]/g, "");

  return (
    <div className="space-y-3">
      <p className="text-6xl md:text-7xl font-bold font-display tracking-tighter text-textMain">
        <Counter end={numericValue} />
        {suffix}
      </p>
      <p className="text-sm uppercase tracking-widest text-mute">{label}</p>
    </div>
  );
};

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mdaqwllk", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! I will contact you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Please check your Formspree ID.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-ink text-textMain antialiased overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />

        {/* Stat Band */}
        <section className="py-20 px-6 lg:px-24 border-t border-line bg-surface transition-colors duration-500">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <StatItem number="50+" label="Projects Completed" />
            <StatItem number="3+" label="Years Experience" />
            <StatItem number="30+" label="Happy Clients" />
          </div>
        </section>

        <Services />
        <Expertise />

        {/* About Section */}
        <section
          id="about"
          className="py-32 px-6 lg:px-24 border-t border-line transition-colors duration-500"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-mute mb-6">
                About Me
              </p>
              <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter leading-tight text-textMain">
                Crafting Digital <br /> Experiences That Matter
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold font-display text-textMain">
                  My Journey
                </h3>
                <p className="text-lg text-mute leading-relaxed">
                  My journey in web development began with building responsive
                  websites and continuously improving my development skills.
                  Over time, I gained experience creating modern web
                  applications, REST APIs, and user-friendly interfaces while
                  working on real-world projects. I enjoy learning new
                  technologies and writing clean, maintainable code. My core
                  expertise includes PHP, Laravel, React.js, and WordPress.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group border border-line">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_cdd88294eb_6436a76773280436.png"
                    alt="Workspace"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 px-6 lg:px-24 border-t border-line bg-surface transition-colors duration-500"
        >
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-mute">
                Contact
              </p>
              <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-textMain">
                Let's Work Together
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="form-input"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="form-input"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                className="form-input resize-none"
                required
              ></textarea>
              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-3"
                >
                  <span>Send Message</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
                {status && (
                  <p
                    className={`text-sm ${status.includes("successfully") ? "text-green-500" : "text-amber-500"}`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
