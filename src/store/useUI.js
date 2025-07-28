import { create } from "zustand";

export const useUI = create((set) => ({
  language: "Русский",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "Русский" ? "Английский" : "Русский",
    })),
}));
