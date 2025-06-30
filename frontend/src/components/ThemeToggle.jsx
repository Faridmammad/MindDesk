import React, { useEffect, useState, useMemo } from "react";

export default function ThemeToggle() {
  const themes = useMemo(() => ["night", "nord"], []);
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, [themes]);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === themes[0] ? themes[1] : themes[0];
    setTheme(nextTheme);
  };

  return (
    <button className="btn btn-outline" onClick={toggleTheme}>
      {theme === "night" ? "❄️ Nord Mode" : "🌙 Night Mode"}
    </button>
  );
}
