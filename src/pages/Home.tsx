import { Button } from "@/components/ui/Button";
import { Download, Github, Mail, MapPin, Linkedin } from "lucide-react";
import TechStackCubes from "@/components/TechCube";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-6 font-sans gap-10">
      <aside className="lg:w-1/3 space-y-4">
        <div>
          <h1 className="text-4xl font-bold">Evann Li</h1>
          <p className="text-gray-500 flex items-center mt-1">
            <MapPin className="w-4 h-4 mr-2" /> Richmond, Canada
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2 text-neutral-300 hover:text-white transition">
            <Github size={16} /> <a href="https://github.com/Evann-Li">GitHub</a>
          </p>
          <p className="flex items-center gap-2 text-neutral-300 hover:text-white transition">
            <Mail size={16} /> <a href="mailto:evannli450@gmail.com">Email</a>
          </p>
          <p className="flex items-center gap-2 text-neutral-300 hover:text-white transition">
            <Linkedin size={16} /> <a href="https://www.linkedin.com/in/evann-li/">LinkedIn</a>
          </p>
        </div>
      </aside>

      <main className="lg:w-2/3 space-y-6">
        <p className="text-lg text-gray-200 leading-relaxed">
          Hey!👋 I’m Evann — a full-stack web developer based in Richmond, BC 🇨🇦. 
          I’m currently studying at BCIT 🧑‍💻 where I build scalable and accessible web apps using modern tools like React ⚛️, TypeScript 🟦, and .NET 💡. 
          With a strong foundation in IT and hands-on experience in DevOps ⚙️, Linux 🐧 scripting, and cloud infrastructure ☁️, 
          I love solving real-world problems with clean, expressive code.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Featured Projects</h2>

          <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-5 space-y-2 shadow-inner">
            <h3 className="text-lg font-bold text-white">🚗 Relay – Ridesharing for Families</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A secure ridesharing app with GPS tracking, AI alerts, dark mode, and haptic feedback. 
              Built the front-end experience and contributed to safety-driven design. 
              Developed using React Native & Expo, with focus on accessibility and user engagement.
            </p>
          </div>

          <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-5 space-y-2 shadow-inner">
            <h3 className="text-lg font-bold text-white">🕸️ Web Scraping Tool</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Python-based tool for structured data extraction across websites. 
              Implemented error handling, automation with shell scripts, and used unit tests to ensure accuracy. 
              Used in a real-world setting at Lunge Systems.
            </p>
          </div>

          <a
            href="/projects"
            className="inline-block text-sm text-blue-400 hover:underline transition-colors"
          >
            View all projects →
          </a>
        </section>

        <TechStackCubes />

        <div className="pt-4 flex flex-wrap gap-4">
          <Button variant="secondary" className="flex items-center gap-2">
            <Download size={16} /> Download Resume
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Github size={16} /> Website Code
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
