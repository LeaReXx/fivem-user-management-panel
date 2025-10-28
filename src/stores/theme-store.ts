"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  hasUserPreference: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  syncWithSystem: (isDark: boolean) => void;
}

const getSystemTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => {
      // Listen to system theme changes
      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", (e) => {
          const { hasUserPreference } = get();
          // فقط اگر کاربر تنظیم دستی نکرده باشد
          if (!hasUserPreference) {
            set({ isDark: e.matches });
          }
        });
      }

      return {
        isDark: getSystemTheme(),
        hasUserPreference: false,
        toggleTheme: () =>
          set((state) => ({
            isDark: !state.isDark,
            hasUserPreference: true,
          })),
        setTheme: (isDark) =>
          set({
            isDark,
            hasUserPreference: true,
          }),
        syncWithSystem: (isDark) => set({ isDark }),
      };
    },
    {
      name: "theme-storage",
    },
  ),
);
