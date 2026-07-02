export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  techs: string[];
  features: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // percentage (e.g. 90)
  icon: string; // lucide icon name
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  courses: string[];
  interests: string[];
  gpa?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo: string; // name of lucide icon or company name
}

export interface Achievement {
  title: string;
  description: string;
  category: "hackathon" | "competition" | "leadership" | "award" | "open-source";
  date: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  period: string;
  highlights: string[];
  tag: string; // e.g., "Self-Learning", "Open Source", "Volunteer"
}

export interface LanguageProficiency {
  language: string;
  level: string; // "Native", "Fluent", etc.
  percentage: number;
}

export interface GitHubStats {
  username: string;
  totalCommits: number;
  stars: number;
  repositoriesCount: number;
  contributionsThisYear: number;
  languages: { name: string; percentage: number; color: string }[];
  streak: { current: number; longest: number };
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  telegram: string;
}

export interface PortfolioData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  subTitle: string;
  aboutText: string;
  careerObjective: string;
  profileImage: string;
  values: string[];
  learningJourney: { year: string; title: string; desc: string }[];
  skills: SkillCategory[];
  projects: Project[];
  education: EducationItem[];
  certificates: Certificate[];
  achievements: Achievement[];
  experience: ExperienceItem[];
  githubStats: GitHubStats;
  contact: ContactInfo;
  languages: LanguageProficiency[];
}
