import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface MajorProjectProps {
  title: string;
  overview: string;
  tech: string[];
  heroImage: string;
  supportImages: string[];
  siteUrl?: string;
  githubUrl?: string;
}

const MajorProject: React.FC<MajorProjectProps> = ({
  title,
  overview,
  tech,
  heroImage,
  supportImages,
  siteUrl,
  githubUrl,
}) => {
  return (
    <div className="space-y-6">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt={`${title} cover`}
        className="w-full max-h-[300px] object-contain rounded-lg shadow-lg"
      />

      {/* Title & Overview */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300 leading-relaxed">{overview}</p>
      </div>

      {/* Support Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
        {supportImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} screen ${i + 1}`}
            className="w-full max-h-[200px] object-contain rounded-md shadow-md"
          />
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>

      {/* Optional Links */}
      {(siteUrl || githubUrl) && (
        <div className="flex justify-center gap-6 pt-6">
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#E6E1F3] text-black font-medium text-sm px-4 py-2 rounded-md hover:bg-[#d3cbed] transition shadow-md hover:shadow-[0_0_20px_#E6E1F3]"
            >
              <ExternalLink
                size={16}
                className="transition-transform duration-300 group-hover:scale-125"
              />
              Visit Website
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-black text-white font-medium text-sm px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition-colors duration-300 shadow-md hover:shadow-[0_0_20px_#ffffff]"
            >
              <Github
                size={16}
                className="transition-transform duration-500 group-hover:rotate-[360deg]"
              />
              View Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default MajorProject;
