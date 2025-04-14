import { useParams, Link } from "react-router-dom";
import { projectDetails } from "../lib/projectData";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) return <p className="p-8 text-center">Project not found.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      <Link
        to="/projects"
        className="inline-block text-sm text-purple-400 hover:text-purple-200 transition"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold">{project.title}</h1>

      <div className="space-y-4 text-gray-200">{project.overview}</div>

      {/* Tech Stack */}
      {project.tech && (
        <div className="pt-4">
          <h3 className="font-semibold text-lg mb-2">Tech Stack</h3>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <li
                key={index}
                className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Images */}
      {project.images && project.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {project.images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="w-full max-h-[200px] object-contain rounded-md shadow-md"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
