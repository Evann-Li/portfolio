import React from "react";

interface MinorProjectProps {
  title: string;
  summary: string;
  tech: string[];
}

const MinorProject: React.FC<MinorProjectProps> = ({ title, summary, tech }) => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-lg border border-neutral-700 shadow-inner space-y-2">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MinorProject;