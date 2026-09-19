export type Locale = "en" | "pt";

export const site = {
  brand: "Faysk",
  personName: "Renan Silva",
  url: "https://faysk.dev",
  email: "contato@faysk.dev",
  github: "https://github.com/Faysk",
  linkedin: "https://www.linkedin.com/in/-renansilva/",
  lab: "https://lab.faysk.dev",
  location: "Portugal"
} as const;

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português"
};
