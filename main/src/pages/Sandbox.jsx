import React, { useState, useEffect } from "react";
import '../assets/color-modes'

function Sandbox() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <h1>My App</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme} data-bs-theme-value="dark">Toggle Theme</button>
      <button onClick={toggleTheme} data-bs-theme-value="light">light</button>
    </div>
  );
}

export default Sandbox;