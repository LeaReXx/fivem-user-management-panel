"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/stores/theme-store";

const ToggleThemeBtn: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    !!mounted && (
      <div className="fixed bottom-5 left-5 bg-inside-box-bg-color/80 hover:bg-inside-box-bg-color shadow-md rounded-md z-10">
        <button
          onClick={toggleTheme}
          className="cursor-pointer p-2 rounded-lg transition-transform duration-200 ease-in-out"
          title={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>
    )
  );
};

export default ToggleThemeBtn;
