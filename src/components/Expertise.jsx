import React, { useState, useEffect } from 'react';

const expertiseData = [
  { skill: "React.js", percentage: 90 },
  { skill: "Laravel", percentage: 85 },
  { skill: "PHP", percentage: 88 },
  { skill: "JavaScript", percentage: 92 },
  { skill: "Node.js", percentage: 80 },
  { skill: "Express.js", percentage: 78 },
  { skill: "MongoDB", percentage: 75 },
  { skill: "MySQL", percentage: 85 },
  { skill: "Vue.js", percentage: 40 }
];

const Expertise = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Start animation after a short delay to ensure component is mounted
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="expertise" className="py-32 px-6 lg:px-24 border-t border-line bg-ink">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-mute mb-6">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tighter leading-tight mb-8">
            My Technical <br /> Proficiency
          </h2>
          <p className="text-lg text-mute leading-relaxed max-w-md">
            I specialize in full-stack development, delivering scalable and efficient solutions across various modern technologies.
          </p>
        </div>
        <div className="space-y-6">
          {expertiseData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium uppercase tracking-wider">
                <span>{item.skill}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden border border-line/30">
                <div
                  className="h-full bg-accent transition-all duration-[2000ms] ease-out"
                  style={{ width: animated ? `${item.percentage}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
