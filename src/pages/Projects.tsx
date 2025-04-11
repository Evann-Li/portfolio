// pages/Home.tsx
const Projects = () => {
    return (
      <main className="p-6 font-mono max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Your Name</h1>
        <p className="text-gray-600 mb-6">📍 Your City, Country</p>
        <p className="mb-4">
          Brief intro — what you study, work on, and side interests. Like:
          <br />
          “ML enthusiast focused on NLP and open-source tooling. Side quests in full-stack dev, data viz, and CLI tools.”
        </p>
        <ul className="mb-8">
          <li>🧠 <a href="https://github.com/yourhandle" className="underline">GitHub</a></li>
          <li>📧 your.email@example.com</li>
        </ul>
      </main>
    );
  };
  
  export default Projects;
  