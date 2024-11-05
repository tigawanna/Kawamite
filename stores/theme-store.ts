import { Appearance, useColorScheme } from "react-native";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DarkOrLight {
  darkOrLight: "light" | "dark";
  setDarkOrLight: (theme: "light" | "dark") => void;
}

export const useDarkOrLight = create<DarkOrLight>()(
  devtools(
    persist(
      (set) => ({
        darkOrLight: Appearance.getColorScheme() ?? "light",
        setDarkOrLight: (theme) => set({ darkOrLight: theme }),
      }),
      {
        name: "theme-storage",
      }
    )
  )
);

