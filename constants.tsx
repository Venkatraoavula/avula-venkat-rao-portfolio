import React from 'react';
import { Project, ExperienceItem } from './types';
import { 
  Code2, 
  Database, 
  Layout, 
  BrainCircuit, 
  Server, 
  Globe 
} from 'lucide-react';

export const RESUME_DATA = {
  name: "Avula Venkat Rao",
  title: "Full Stack Developer | AI Enthusiast",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Bharath Institute of Higher Education and Research (BIHER), Chennai",
    year: "May 2025",
    cgpa: "9.0/10"
  },
  contact: {
    phone: "+91 9885164705",
    email: "venkatraoavula007@gmail.com",
    linkedin: "venkatrao-avula",
    github: "Venkatraoavula",
    location: "Vijayawada, Andhra Pradesh, India"
  },
  about: `I am a Computer Science Engineering student (Class of 2025) with a strong foundation in Full Stack Development and AI integration. With a CGPA of 9.0, I combine academic excellence with practical experience in building scalable web applications and AI-driven solutions. My expertise spans Frontend (React, Tailwind), Backend (Python Flask, Springboot), and Databases (PostgreSQL, MySQL).`,
  
  skills: {
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Query"],
    backend: ["Python (Flask)", "Java (Springboot)", "REST APIs", "Node.js Basics"],
    database: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    ai: ["Google Gemini API", "Web Speech API", "SpeechSynthesis API", "Machine Learning Basics"]
  }
};

export const PROJECTS: Project[] = [
  {
    title: "VoiceAI Customer Support System",
    category: "AI & Fullstack",
    description: "An automated customer support system using AI-driven voice interactions to reduce human workload.",
    technologies: ["React", "TypeScript", "Google Gemini API", "Web Speech API", "Python"],
    keyPoints: [
      "Built a multilingual voice-enabled support system (English, Hindi, Telugu).",
      "Implemented real-time speech-to-text and voice responses.",
      "Integrated Google Gemini API for intent detection.",
      "Developed an admin dashboard for ticket management."
    ]
  },
  {
    title: "Online Portal for Agri Business",
    category: "Backend",
    description: "A digital marketplace enabling farmers and buyers to interact with transparent pricing.",
    technologies: ["Java", "MySQL", "HTML/CSS", "JavaScript"],
    keyPoints: [
      "Developed robust backend systems using MySQL.",
      "Ensured data consistency and reliable query logic.",
      "Documented workflows for maintainability."
    ]
  },
  {
    title: "Sight Beyond Vision",
    category: "AI & Fullstack",
    description: "AI-based application assisting visually impaired users with object and currency identification.",
    technologies: ["Python", "Machine Learning", "Google Speech API"],
    keyPoints: [
      "Built AI system for currency and object detection.",
      "Integrated Google Speech API for audio feedback.",
      "Handled edge cases for high accuracy."
    ]
  },
  {
    title: "Python Call Log Center System",
    category: "Python",
    description: "Operational monitoring tool to log, track, and analyze customer support calls.",
    technologies: ["Python", "SQL Concepts", "CSV"],
    keyPoints: [
      "Designed system to process and analyze call records.",
      "Structured raw data into searchable formats.",
      "Performed QA checks for data integrity."
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Java Development Intern",
    company: "Octanet Services Pvt Ltd",
    type: "Remote",
    description: [
      "Developed and tested core application workflows focusing on data integrity.",
      "Applied OOP principles to build modular components.",
      "Performed systematic testing to improve reliability.",
      "Provided clear technical documentation."
    ]
  }
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant for Avula Venkat Rao's portfolio website. 
You are helpful, professional, and knowledgeable about Venkat's skills and experience.
Your goal is to answer visitor questions based ONLY on the following resume data:

Name: ${RESUME_DATA.name}
Education: ${RESUME_DATA.education.degree} at ${RESUME_DATA.education.college}, ${RESUME_DATA.education.year}, CGPA: ${RESUME_DATA.education.cgpa}.
Skills:
- Frontend: ${RESUME_DATA.skills.frontend.join(", ")}
- Backend: ${RESUME_DATA.skills.backend.join(", ")}
- Database: ${RESUME_DATA.skills.database.join(", ")}
- AI: ${RESUME_DATA.skills.ai.join(", ")}

Experience:
- ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company} (${EXPERIENCE[0].type}).

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} Tech: ${p.technologies.join(", ")}`).join("\n")}

Contact: ${RESUME_DATA.contact.email}, LinkedIn: ${RESUME_DATA.contact.linkedin}.

If asked about something not in this data, politely say you don't have that information but they can contact Venkat directly.
Keep answers concise and enthusiastic.`;
