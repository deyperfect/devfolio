import { useEffect, useState } from "react";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("dark") === "active",
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("dark", "active");
    setIsDark(true);
  };

  const enableLightMode = () => {
    document.body.classList.remove("dark");
    localStorage.removeItem("dark");
    setIsDark(false);
  };

  const switchTheme = () => {
    isDark ? enableLightMode() : enableDarkMode();
  };

  return (
    <button
      onClick={switchTheme}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-8 h-8 rounded-full bg-background text-xl border border-accent/50 overflow-hidden"
    >
      <BsLightbulb
        className={`absolute text-yellow-400 transition-all duration-300 ease-in-out ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        }`}
      />
      <BsLightbulbOff
        className={`absolute transition-all duration-300 ease-in-out ${
          isDark
            ? "opacity-0 rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
