import MajorProject from "@/components/MajorProject";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <section className="space-y-12">
        <MajorProject
          title="Relay"
          slug="relay"
          overview="Relay is Canada’s first ridesharing app for parents, offering safe, reliable transportation for children by connecting trusted families within the community. 
          Designed to simplify carpooling, Relay features real-time GPS tracking, AI-powered ride updates, and smart route matching, helping parents save time, reduce stress, and foster social connections for both parents and kids."
          tech={[
            "Typescript",
            "React Native",
            "Expo Go",
            "Tailwind CSS",
            "GraphQL",
            "Figma",
            "Google Maps API",
            "Firebase Auth"
          ]}
          heroImage="/projects/relay/logo.png"
          siteUrl="https://relay.arspera.com/"
          githubUrl="https://github.com/byrondray/relay"
        />

        <MajorProject
          title="SportsDB"
          slug="sportsdb"
          overview="Custom platform for managing your sports league offering tools for scheduling, team and roster management, real-time game tracking, and advanced player stats. 
          The app features seamless communication tools and mobile accessibility, ensuring players, coaches, and fans stay connected. 
          With real-time updates, user-friendly design, and robust analytics, the platform simplifies league operations and enhances engagement for everyone involved."
          tech={["React", "Tailwind CSS", "Typescript", "Railway", "Azure", "Drizzle"]}
          heroImage="/projects/sports/cover.png"
        />

        <MajorProject
          title="Web Scraping Tool"
          slug="web-scraper"
          overview="A powerful tool for scraping and analyzing data from websites. It extracts product listings, news articles, or pricing data for market research and trend analysis. Built with a modular scraper engine and scheduler, it ensures consistent, clean, and structured data retrieval with export options."
          tech={[
            "Python",
            "BeautifulSoup",
            "Scrapy",
            "Selenium",
            "SQLite",
            "Pandas",
            "Flask"
          ]}
          heroImage="/projects/web_scraping/logo.png"
        />

        <MajorProject
          title="GameClock"
          slug="gameclock"
          overview="A real-time digital scoreboard solution for sports like basketball and hockey. It features countdown and penalty timers, timeouts, customizable game rules, and tactile UI controls for quick interactions. Optimized for visibility and fast usage in live game settings."
          tech={[
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Vite",
            "LocalStorage",
            "React Hooks",
            "Responsive Design"
          ]}
          heroImage="/projects/clock/cover.png"
        />
      </section>
    </div>
  );
};

export default Projects;
