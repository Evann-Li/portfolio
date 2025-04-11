import MajorProject from "@/components/MajorProject";
import MinorProject from "@/components/MinorProject";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <section className="space-y-12">
        <MajorProject
          title="Relay"
          overview="Relay is Canada’s first ridesharing app for parents, offering safe, reliable transportation for children by connecting trusted families within the community. 
          Designed to simplify carpooling, Relay features real-time GPS tracking, AI-powered ride updates, and smart route matching, helping parents save time, reduce stress, and foster social connections for both parents and kids."
          tech={["Typescript", "React Native", "Expo Go", "Tailwind CSS", "GraphQL", "Figma", "Google Maps API", "Firebase Auth"]}
          heroImage="/projects/relay/cover.png"
          supportImages={[
            "/projects/relay/screen2.png",
            "/projects/relay/logo.png",
            "/projects/relay/screens.png"
          ]}
          siteUrl="https://relay.arspera.com/"
          githubUrl="https://github.com/byrondray/relay"
        />

        <MajorProject
          title="Sports Management Software"
          overview="Custom platform for managing your sports league offering tools for scheduling, team and roster management, real-time game tracking, and advanced player stats. 
          The app will feature seamless communication tools, and mobile accessibility, ensuring players, coaches, and fans stay connected. 
          With real-time updates, user-friendly design, and robust analytics, the platform will simplify league operations and enhance engagement for everyone involved."
          tech={["React", "Tailwind CSS", "Typescript", "Railway", "Azure", "Drizzle"]}
          heroImage="/projects/sports/cover.png"
          supportImages={[
            "/projects/sports/screen1.png",
            "/projects/sports/screen2.png",
            "/projects/sports/screen3.png"
          ]}
        />
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Other Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <MinorProject
            title="Web Scraping Tool"
            summary="This web scraping tool is designed to efficiently extract, organize, and analyze data from websites. 
            It enables users to gather valuable information, such as product prices, user reviews, news articles, or competitor data, for various use cases like market research, trend analysis, and business intelligence. 
            With robust scheduling, data cleaning, and export features, the tool simplifies the web scraping process for users with varying technical expertise. 
            Built for speed, reliability, and compliance, the tool ensures data is extracted accurately and adheres to ethical scraping practices."
            tech={["Python", "BeautifulSoup", "Scrapy", "Selenium", "SQLite", "Pandas", "Flask"]}
          />
          <MinorProject
            title="Score Clock App"
            summary="A fully featured digital scoreboard solution built for sports like basketball and hockey. The app includes real-time score tracking, countdown and penalty timers, timeouts, and full game control panels. Designed for live environments, it features large, high-contrast displays for visibility from a distance, customizable game rules and durations, and tactile UI elements for fast interactions. Game officials or coaches can start, stop, or reset timers and scores with a single click, ensuring accuracy and efficiency during competitive play. The app is responsive and can run on tablets, laptops, or mounted screens, offering a versatile solution for amateur leagues, school tournaments, and recreational games. Built with React and TypeScript, it uses clean component architecture, local storage for session persistence, and Tailwind CSS for a modern, minimal look."
            tech={[
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Vite",
              "LocalStorage",
              "React Hooks",
              "Responsive Design"
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
