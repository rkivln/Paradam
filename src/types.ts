export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  vibeFrequency: string;
}

export interface Client {
  id: string;
  name: string;
  tagline: string;
  service: string;
  year: string;
  image: string;
  accent: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  astrology: string;
  alignment: string;
  element: string; // e.g. "Fire", "Water"
  image: string;
}
