export type Locale = "es" | "en";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  name: string;
  description: LocalizedText;
  tech: string[];
  category: LocalizedText;
  demo?: string;
  github: string;
  web: string;
};