import { useEffect, useState } from "react";

const About = () => {
  const [bouncing, setBouncing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBouncing(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-white font-mono">
      {/* Intro */}
      <section className="space-y-4">
      <h1 className={`text-3xl font-bold ${bouncing ? "animate-bounce" : ""}`}>
      👋 Hey, I'm Evann
    </h1>
        <p className="text-gray-300 leading-relaxed">
          Outside of full-stack dev life, I spend a lot of my time giving back to my community, staying active, and exploring creative hobbies.
          Whether it’s coaching, leading small groups, or playing sports, I love staying engaged and learning new things. 🚀
        </p>
      </section>

      {/* Volunteer & Activities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🤝 Volunteering & Community</h2>
        <ul className="space-y-2 text-gray-300">
          <li>
            • Captain, coach, and referee with Richmond Cosom Floor Hockey Association 🏑  
            <span className="block text-sm text-gray-400 ml-4">
              — Coached youth, managed teams, and was awarded the Marcel Doucet Scholarship for Sportsmanship.
            </span>
          </li>
          <li>
            • Servant Team Member at Fraserlands Church ⛪  
            <span className="block text-sm text-gray-400 ml-4">
              — Helped organize events, led small groups, and supported community outreach.
            </span>
          </li>
          <li>
            • Bike Instructor at Pedalheads 🚲  
            <span className="block text-sm text-gray-400 ml-4">
              — Taught kids road safety and riding skills during summer seasons.
            </span>
          </li>
        </ul>
      </section>

      {/* Hobbies */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">🎯 Hobbies & Interests</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
          {["Hockey 🏒", "Volleyball 🏐", "Ultimate 🥏", "Building Models 🧱", "Piano 🎹"].map((hobby) => (
            <div
              key={hobby}
              className="bg-[#1e1e1e] text-white px-6 py-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
            >
              {hobby}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
