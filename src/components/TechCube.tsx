import React from "react";
import "./TechCube.css";

const techGroups = {
    Frontend: ["⚛️ React", "🟦 TypeScript", "✨ JavaScript", "🧱 HTML", "🎨 CSS", "🐘 PHP"],
    Backend: ["💎 C#", "🌐 .NET", "🧩 .NET Core", "📎 ASP.NET Core", "🗃️ SQL", "🐬 MySQL"],
    DevOps: ["🐳 Docker", "☁️ AWS", "🌍 Terraform", "🔁 CI/CD", "🧰 Jenkins", "🔒 SSL"],
    Scripting: ["🐍 Python", "🐚 Shell", "📜 Bash", "🐧 Linux", "✅ Unit Testing", "🧪 Pytest"],
    Tools: ["💾 Microsoft SQL Server", "📝 JIRA", "🧠 Notion", "🧠 VS Code", "📬 Postman", "🎨 Figma"],
};

const TechCube = ({ items, color, }: { items: string[]; color: string; }) => {
  const [front, back, right, left, top, bottom] = items;
  return (
    <div className={`cube-container group mx-auto cube-${color}`}>
      <div className="cube group-hover:paused">
        <div className="face front">{front}</div>
        <div className="face back">{back}</div>
        <div className="face right">{right}</div>
        <div className="face left">{left}</div>
        <div className="face top">{top}</div>
        <div className="face bottom">{bottom}</div>
      </div>
    </div>
  );
};

const TechStackCubes = () => {
  const entries = Object.entries(techGroups);
  const topRow = entries.slice(0, 3);
  const bottomRow = entries.slice(3);

  return (
    <section className="space-y-10 py-10">
      <h2 className="text-xl font-bold text-white">My Tech Stack</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
        {topRow.map(([group, items]) => (
          <div key={group} className="text-center space-y-15">
            <h3 className="text-white font-semibold text-lg">{group}</h3>
            <TechCube items={items} color={group.toLowerCase()} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-20 pt-12">
        {bottomRow.map(([group, items]) => (
          <div key={group} className="text-center space-y-15">
            <h3 className="text-white font-semibold text-lg">{group}</h3>
            <TechCube items={items} color={group.toLowerCase()} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackCubes;