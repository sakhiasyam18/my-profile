import { useState } from "react";
import { ProfileCard } from "./components/profile-card";
import { SunIcon, MoonIcon } from "./components/icons";
import "./components/profile-card.css";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
      <ProfileCard
        name="Sakhiasyam"
        bio="Hai aku Asyam, Mahasiswa Ilmu Komputer yang suka Web 3. Sekarang suka di front end kayak React, Nextjs TypeScript."
        skills={["React", "TypeScript", "Next.js", "PHP"]}
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=student"
        githubUrl="https://github.com/sakhiasyam18"
      />
    </div>
  );
}

export default App;
