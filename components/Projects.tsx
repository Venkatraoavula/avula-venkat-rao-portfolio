import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { PROJECTS, RESUME_DATA } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600">
              Showcasing my work in Full Stack, AI, and Backend systems.
            </p>
          </div>
          <a 
            href={`https://github.com/${RESUME_DATA.contact.github}`} 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
          >
            View GitHub Profile <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  {project.category}
                </div>
                {project.technologies.includes("Google Gemini API") && (
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-purple-600">
                    <Sparkles size={12} />
                    Gemini Powered
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.keyPoints.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-500">
                      <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};