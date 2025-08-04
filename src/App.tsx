import React, { useState, useEffect } from "react";

interface Project {
  name: string;
  description: string;
  url: string;
  language?: string;
}

const projects: Project[] = [
  {
    name: "NYC Taxi Fare Prediction",
    description: "Predict taxi fares in NYC using BigQuery ML.",
    url: "https://github.com/yourusername/nyc-taxi-fare-prediction",
    language: "Python",
  },
  {
    name: "YouTube Analytics Dashboard",
    description: "A dashboard to analyze YouTube channel metrics with React.",
    url: "https://github.com/yourusername/youtube-analytics-dashboard",
    language: "TypeScript",
  },
  // Add more projects here...
];

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system preference on initial mount
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  // Toggle 'dark' class on <html> tag
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Scott's GitHub Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-4">
            Hi, I’m Scott! <br />
            A Data Engineer & Developer.
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome to my portfolio where I share my projects and skills in
            data engineering, AI, and full-stack development.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/hero-image.jpg"
            alt="Scott"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, description, url, language }) => (
            <a
              href={url}
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-purple-400"
            >
              <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                {name}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
              {language && (
                <span className="inline-block text-sm font-medium text-white bg-purple-600 px-3 py-1 rounded-full">
                  {language}
                </span>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg my-12">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
          I’m Scott, a passionate data engineer and software developer with a
          background in mechanical engineering. I enjoy turning data into
          actionable insights and building intuitive web applications.
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto p-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} Scott. Built with React & Tailwind CSS.
        <br />
        <a
          href="mailto:scott@example.com"
          className="text-purple-600 hover:underline"
        >
          Contact me
        </a>
      </footer>
    </div>
  );
};

export default App;
