import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  onThemeChange?: (isDark: boolean) => void;
}

export default function ThemeToggle({ onThemeChange }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true; // default to dark mode as requested
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (onThemeChange) {
      onThemeChange(isDark);
    }
  }, [isDark]);

  return (
    <button
      id="theme-toggle-btn"
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-full border border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-gray-100 dark:hover:bg-slate-850 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 group"
      aria-label="Toggle theme color"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="text-gray-700 dark:text-gray-300 group-hover:text-brand-purple"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </button>
  );
}
