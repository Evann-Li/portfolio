export const projectDetails = [
  {
    slug: "relay",
    title: "Relay",
    images: [
      "/projects/relay/screen2.png",
      "/projects/relay/logo.png",
      "/projects/relay/screens.png"
    ],
    tech: [
      "Typescript",
      "React Native",
      "Expo Go",
      "Tailwind CSS",
      "GraphQL",
      "Figma",
      "Google Maps API",
      "Firebase Auth"
    ],
    overview: (
      <>
        <h3 className="font-semibold text-lg mb-2">Introduction / Overview</h3>
        <p className="mb-4">
          Relay reimagines carpooling for parents by integrating secure user verification,
          live GPS tracking, and intelligent route sharing. Inspired by real parental
          challenges around coordinating rides, Relay focuses on trust, safety, and convenience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Multi-step parent verification with ID and profile checks</li>
              <li>Ride matching engine based on routes, timing, and proximity</li>
              <li>Live GPS tracking with continuous ETA updates</li>
              <li>Smart notifications for ride confirmations and changes</li>
              <li>In-app messaging between parents and drivers</li>
              <li>Scheduling options for one-time, recurring, and special trips</li>
              <li>Digital check-in and check-out to confirm ride completion</li>
              <li>Background-verified drivers with history review</li>
              <li>Built-in emergency contact system linked to active rides</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Challenges</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Creating a privacy-first system that still builds trust among families</li>
              <li>Building a scheduling engine that handles recurring and flexible ride plans</li>
              <li>Designing a mobile interface that's simple enough for busy parents</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  {
    slug: "sportsdb",
    title: "SportsDB",
    images: [
      "/projects/sports/screen1.png",
      "/projects/sports/screen2.png",
      "/projects/sports/screen3.png"
    ],
    tech: ["React", "Tailwind CSS", "Typescript", "Railway", "Azure", "Drizzle"],
    overview: (
      <>
        <h3 className="font-semibold text-lg mb-2">Introduction / Overview</h3>
        <p className="mb-4">
          SportsDB is a full-stack web application designed to manage and display sports leagues
          and teams’ data, including stats, schedules, player performance, and game outcomes.
          It’s built to help local leagues and amateur teams modernize operations with a clean,
          mobile-first interface.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Team and player profiles with stat tracking</li>
              <li>Game schedules with division filtering and status tags</li>
              <li>Leaderboard for goals, assists, saves, and more</li>
              <li>Admin dashboard with secure, role-based access</li>
              <li>Inline editing and guided form validation</li>
              <li>Responsive mobile design for on-the-go viewing</li>
              <li>Optimized SQL schema using Drizzle ORM</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Challenges</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Modeling many-to-many player/season relationships with Drizzle</li>
              <li>Balancing content density with mobile readability</li>
              <li>Designing a self-service admin flow usable by non-tech users</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  {
    slug: "web-scraper",
    title: "Web Scraping Tool",
    tech: [
      "Python",
      "BeautifulSoup",
      "Scrapy",
      "Selenium",
      "SQLite",
      "Pandas",
      "Flask"
    ],
    overview: (
      <>
        <h3 className="font-semibold text-lg mb-2">Introduction / Overview</h3>
        <p className="mb-4">
          This tool allows users to automate data collection from any website. It was built to
          support use cases like price tracking, content aggregation, and competitor monitoring.
          The project focuses on modularity, resilience, and exportable clean data.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HTML parsing and data extraction using BeautifulSoup</li>
              <li>Dynamic page support with Selenium integration</li>
              <li>Customizable scrapers via JSON-config templates</li>
              <li>Built-in scheduler for regular data collection</li>
              <li>Automatic deduplication and data cleaning</li>
              <li>Export to CSV, JSON, or SQLite</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Challenges</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Handling JavaScript-heavy pages while keeping performance high</li>
              <li>Structuring scraped data consistently across different sites</li>
              <li>Providing meaningful logs and error messages for debugging</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  {
    slug: "gameclock",
    title: "GameClock",
    tech: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "LocalStorage",
      "React Hooks",
      "Responsive Design"
    ],
    overview: (
      <>
        <h3 className="font-semibold text-lg mb-2">Introduction / Overview</h3>
        <p className="mb-4">
          A digital scoreboard app tailored for hockey and basketball games. Designed for visibility
          and responsiveness, it gives coaches, referees, or volunteers full control of game flow through
          an intuitive interface.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Large display UI optimized for gyms and community centers</li>
              <li>Game time, period, and score control with tactile buttons</li>
              <li>Penalty timers for both teams</li>
              <li>Customizable game rules and durations</li>
              <li>Responsive across tablets, laptops, and wall displays</li>
              <li>Session persistence via local storage</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Challenges</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Syncing real-time timers with manual input controls</li>
              <li>Designing a UI with both clarity and minimalism for fast operation</li>
              <li>Ensuring layout stayed accessible and touch-friendly on all screen sizes</li>
            </ul>
          </div>
        </div>
      </>
    )
  }
];
