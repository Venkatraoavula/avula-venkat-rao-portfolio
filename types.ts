export interface Project {
  title: string;
  category: 'AI & Fullstack' | 'Backend' | 'Python' | 'Academic';
  description: string;
  technologies: string[];
  keyPoints: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
